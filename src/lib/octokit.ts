import { Octokit } from "octokit";


const githubToken = process.env.Token;


export default class OctokitSingleton {
  private static instance: Octokit;

  private constructor() {} // Prevent instantiation outside the class

  public static getInstance(): Octokit {

    if (!OctokitSingleton.instance) {
      // Create a new instance if it doesn't exist
      OctokitSingleton.instance = new Octokit({
        auth: githubToken
      });
    }
    return OctokitSingleton.instance;
  }
}
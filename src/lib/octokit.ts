import { Octokit } from "octokit";

export default class OctokitSingleton {
  private static instance: Octokit;

  private constructor() {} // Prevent instantiation outside the class

  public static getInstance(): Octokit {
    if (!OctokitSingleton.instance) {
      // Create a new instance if it doesn't exist
      OctokitSingleton.instance = new Octokit({
        auth: process.env.Token
      });
    }
    return OctokitSingleton.instance;
  }
}
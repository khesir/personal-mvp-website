import OctokitSingleton from "@/lib/octokit";
import axios from "axios";


const octokit = OctokitSingleton.getInstance();

let owner = "khesir"

export async function getAllPublicRepo(){
    try {
        const response = await octokit.request('GET /user/repos?sort=created',{
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
              }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getRepoLanguages(name: string,) {
    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner: owner,
            repo: name
        });

        // Extract language names from the response
        const languages = Object.keys(response.data);
        return languages
    } catch (error) {
        console.error("Error fetching language data:", error);
    }
}
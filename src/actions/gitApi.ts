import OctokitSingleton from "@/lib/octokit";


const octokit = OctokitSingleton.getInstance();


export async function getAllPublicRepo(){
    try {
        const response = await octokit.request('GET /user/repos?sort=created',{
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                Authorization: `token ${import.meta.env.VITE_TOKEN}`
              }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getRepoLanguages(owner: string, name: string) {
    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                Authorization: `token ${import.meta.env.VITE_TOKEN}`
            },
            owner: owner,
            repo: name,
            
        });

        // Extract language names from the response
        const languages = Object.keys(response.data);
        return languages
    } catch (error) {
        console.error("Error fetching language data:", error);
    }
}
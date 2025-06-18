import axios from 'axios';

export const fetchProjects = async () => {
	try {
		const res = await axios.get(
			`${import.meta.env.VITE_API_URL}/projects?pageSize=3`,
		);
		return res.data.result.results;
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.toString());
		} else {
			console.log(String(e));
		}
	}
};

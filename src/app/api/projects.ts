import axios from 'axios';

export const fetchProjects = async () => {
	try {
		const res = await axios.get(`${import.meta.env.VITE_API_URL}/projects`);
		console.log(res.data);
		return res.data;
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.toString());
		} else {
			console.log(String(e));
		}
	}
};
export const fetchProjectsByID = async (id: string) => {
	try {
		const res = await axios.get(
			`${import.meta.env.VITE_API_URL}/projects/${id}`,
		);
		console.log(res.data.result);
		return res.data.result;
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.toString());
		} else {
			console.log(String(e));
		}
	}
};

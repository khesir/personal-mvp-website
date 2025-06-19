import axios from 'axios';

export const fetchProjects = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_API_URL}/projects?pageSize=6`,
	);
	return res.data;
};
export const fetchProjectsByID = async (id: string) => {
	try {
		const res = await axios.get(
			`${import.meta.env.VITE_API_URL}/projects/${id}`,
		);
		return res.data.result;
	} catch (e) {
		throw e;
	}
};

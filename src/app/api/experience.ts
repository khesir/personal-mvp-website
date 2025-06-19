import axios from 'axios';

export const fetchExperiences = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_API_URL}/experiences?pageSize=4`,
	);
	console.log(res);
	return res.data;
};
export const fetchProjectsByID = async (id: string) => {
	try {
		const res = await axios.get(
			`${import.meta.env.VITE_API_URL}/projects/${id}`,
		);
		console.log(res.data.result);
		return res.data.result;
	} catch (e) {
		throw e;
	}
};

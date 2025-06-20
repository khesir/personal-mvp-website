import axios from 'axios';

export const fetchExperiences = async (pageSize: number) => {
	const res = await axios.get(
		`${import.meta.env.VITE_API_URL}/experiences?pageSize=${pageSize}`,
	);
	return res.data;
};
export const fetchProjectsByID = async (id: string) => {
	try {
		const res = await axios.get(
			`${import.meta.env.VITE_API_URL}/experiences/${id}`,
		);
		return res.data.result;
	} catch (e) {
		throw e;
	}
};

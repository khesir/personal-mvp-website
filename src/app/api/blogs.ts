import axios from 'axios';

export const fetchBlogs = async () => {
	const res = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
	console.log(res);
	return res.data;
};
export const fetchBlogsByID = async (id: string) => {
	const res = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${id}`);
	return res.data.result;
};

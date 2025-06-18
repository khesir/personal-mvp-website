/* eslint-disable @typescript-eslint/no-explicit-any */
const retry = async (
	fn: () => Promise<any>,
	retries = 3,
	delay = 1000,
): Promise<any> => {
	try {
		return await fn();
	} catch (e) {
		if (retries > 0) {
			await new Promise((res) => setTimeout(res, delay));
			return retry(fn, retries - 1, delay);
		} else {
			throw e;
		}
	}
};

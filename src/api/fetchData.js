export const fetchData = async () => {
	try {
		const res = await fetch(
			`https://api.le-systeme-solaire.net/rest/bodies/mars`
		);
		const data = await res.json();
		return data;
	} catch (e) {
		console.log(e);
	}
};

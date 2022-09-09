export const fetchData = async (planet) => {
	try {
		const res = await fetch(
			`https://api.le-systeme-solaire.net/rest/bodies/${planet}`
		);
		const data = await res.json();
		return data;
	} catch (e) {
		console.log(e);
	}
};

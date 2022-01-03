export async function get({ params }) {
	const [type, file] = params.slug.split('/');
	const url = `http://localhost:3000/${type}/${file}.${type}`;
	const data = await fetch(url).then((res) => res.arrayBuffer());
	return {
		headers: {
			'Content-Type': 'image/gif'
		},
		body: new Uint8Array(data)
	};
}

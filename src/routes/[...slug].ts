import { dev } from '$app/env';
export async function get({ params }) {
	const [type, file] = params.slug.split('/');
	const envPath = dev ? 'http://localhost:3000' : 'https://vadivelu.anoram.com';
	const url = `${envPath}/${type}/${file}.${type}`;
	const data = await fetch(url).then((res) => res.arrayBuffer());
	return {
		accept: '*/*',
		headers: {
			'Content-Type': 'image/gif'
		},
		body: new Uint8Array(data)
	};
}

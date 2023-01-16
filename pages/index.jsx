import Head from 'next/head'
import { getAboutMe } from '../lib/api'
import { Welcome } from '../components/welcome'

export default function Home({ data }) {
	return (
		<>
			<Head>
				<title>leandev</title>
				<meta name='description' content='Welcome to my site' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Welcome imgURL={data.img} title={data.title} />
		</>
	)
}

export async function getStaticProps() {
	const data = await getAboutMe()
	return { props: { data } }
}

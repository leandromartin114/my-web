import Head from 'next/head'
import { getAboutMe, getMyProjects } from '../lib/api'
import { Layout } from '../components/layout'
import { Welcome } from '../components/welcome'
import { AboutMe } from '../components/about-me'
import { TechStack } from '../components/tech-stack'
import { Projects } from '../components/projects'

export default function Home({ data, projects }) {
	return (
		<>
			<Head>
				<title>leandev</title>
				<meta name='description' content='Welcome to my site' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Welcome
					title={data.title}
					description={data.description}
					cv={data.cv}
				/>
				<div className='bg-icons bg-auto'>
					<AboutMe imgURL={data.img} />
					<TechStack />
					<Projects projects={projects} />
				</div>
			</Layout>
		</>
	)
}

export async function getStaticProps() {
	const data = await getAboutMe()
	const projects = await getMyProjects()
	return { props: { data, projects } }
}

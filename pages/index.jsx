import Head from 'next/head'
import { getAboutMe, getMyProjects } from '../lib/api'
import { Layout } from '../components/layout'
import { Welcome } from '../components/welcome'
import { AboutMe } from '../components/about-me'
import { TechStack } from '../components/tech-stack'
import { Projects } from '../components/projects'
import { Contact } from '../components/contact'
import { Endpaper } from '../ui/endpaper'

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
				<div>
					<Welcome
						title={data.title}
						description={data.description}
						cv={data.cv}
					/>
				</div>
				<div className='bg-icons bg-auto grid justify-items-center items-center'>
					<Endpaper />
					<TechStack />
					<Projects projects={projects} />
					<Endpaper />
				</div>
				<AboutMe imgURL={data.img} />
				<Contact />
			</Layout>
		</>
	)
}

export async function getStaticProps() {
	const data = await getAboutMe()
	const projects = await getMyProjects()
	return { props: { data, projects } }
}

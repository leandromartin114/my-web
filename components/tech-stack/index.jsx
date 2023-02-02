import { Large, LightBody } from '../../ui/typography'
import { IconsGrid } from '../../ui/icons-grid'

export const TechStack = () => {
	return (
		<section
			id='stack'
			className='w-full px-4 grid gap-7 items-center justify-items-center'
		>
			<Large>Education And Technologies</Large>
			<div className='text-center max-w-lg xl:max-w-4xl '>
				<div className='grid'>
					<LightBody>
						I'm finishing the Full Stack Web Development career at{' '}
						<a
							className='underline cursor-pointer'
							href='https://apx.school'
							target='_blank'
							rel='noreferrer'
						>
							APX.school
						</a>{' '}
						where I've learned most of these technologies:
					</LightBody>
				</div>
				<div className='hidden lg:grid gap-7'>
					<LightBody>
						I started learning myself the basics of HTML, CSS and JavaSript.
						After that, I thought it was a good idea to continue my learning
						with more support and advice from someone else. At this point, I
						decided to start{' '}
						<a
							className='underline cursor-pointer'
							href='https://apx.school'
							target='_blank'
							rel='noreferrer'
						>
							APX's
						</a>{' '}
						Full Stack Web Development career.
					</LightBody>
					<LightBody>
						During my course, I learned to code with JavaScript and TypeScript
						using Node.js. I learned POO as well as how to use Git. Later, I
						incorporated everything related to the browser and eventually built
						basic Web sites with HTML, CSS and JS.
					</LightBody>
					<LightBody>
						After that I was integrating skills that allowed me to build a
						Backend with technologies such as Firebase, PostgreSQL, Algolia,
						Mapbox, Supabase, Airtable, Postman and deploying it on platforms
						such as Heroku, Render and Railway.
					</LightBody>
					<LightBody>
						Finally I acquired more knowledge in the Frontend that allowed me to
						move from custom elements to React.js. At this point, I was able to
						build modern websites with libraries like styled-components or
						Tailwind and using Next.js framework.
					</LightBody>
				</div>
				<IconsGrid />
			</div>
		</section>
	)
}

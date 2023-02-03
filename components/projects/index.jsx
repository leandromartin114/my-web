import { Large } from '../../ui/typography'
import { Card } from '../../ui/card'

export const Projects = ({ projects }) => {
	return (
		<section
			id='projects'
			className='w-full px-4 grid gap-7 items-center justify-items-center'
		>
			<Large>My Projects</Large>
			<div className='grid gap-4'>
				{projects
					? projects.map((p) => {
							return (
								<Card
									key={p.title}
									imgURL={p.img}
									title={p.title}
									description={p.description}
									url={p.url}
									github={p.github}
									tech={p.tech.stack}
								/>
							)
					  })
					: 'Ups...'}
			</div>
		</section>
	)
}

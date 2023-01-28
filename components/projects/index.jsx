import { Large } from '../../ui/typography'
import { Card } from '../../ui/card'

export const Projects = ({ projects }) => {
	return (
		<section
			id='projects'
			className=' w-full py-5 px-1 grid justify-items-center '
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
									url={p.url}
								/>
							)
					  })
					: 'Ups...'}
			</div>
		</section>
	)
}

import { Large } from '../../ui/typography'
import { Carousel, CarouselXL } from '../carousel'

export const Projects = ({ projects }) => {
	return (
		<section
			id='projects'
			className='w-full px-2 py-20 grid gap-9 items-center justify-items-center'
		>
			<Large color='text-orange-500'>My Projects</Large>
			<div className='2xl:hidden'>
				<Carousel items={projects} />
			</div>
			<div className='hidden 2xl:block'>
				<CarouselXL items={projects} />
			</div>
		</section>
	)
}

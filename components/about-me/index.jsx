import Image from 'next/image'
import { Large, Body } from '../../ui/typography'

export const AboutMe = ({ imgURL }) => {
	return (
		<section
			id='about'
			className='px-2 py-20 xl:py-28 2xl:py-32 w-full 2xl:h-screen grid gap-7 items-center justify-items-center xl:grid-cols-2'
		>
			<Image
				className='hidden sm:block sm:w-72 xl:w-96 2xl:w-[700px] sm:h-72 xl:h-96 2xl:h-[700px] rounded-full border-solid border-cyan-500 border-4 2xl:border-8'
				width={2500}
				height={2500}
				src={imgURL}
				alt='Leandro'
			/>
			<div className='text-center max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl grid gap-14'>
				<Large color='text-cyan-300'>About Me</Large>
				<div className='text-center max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl grid gap-8'>
					<Body>
						I love soccer, video games and Astronomy. Also, I'm a big fan of Red
						Hot Chili Peppers band. I enjoy traveling across the world, knowing
						new places. Besides all those things I'm motivated to build apps
						that bring solutions to the people.
					</Body>
					<Body>
						For several years I worked in customer service for a telco and
						studying business administration, I decided to change my career and
						I went into the IT world, through the web development. A profession
						that immediately seduced me because it forces me to keep learning
						continuously and gives me many tools to get solutions through the
						use of technology.
					</Body>
					<Body>
						Over those years in customer service, I have developed skills such
						as teamwork, client orientation and leadership. Now, after two years
						of programming training, I consider that I have developed my
						patience, managed frustration and I am becoming more agile every day
						to solve problems. But of course, I still have a long way to go.
					</Body>
				</div>
			</div>
		</section>
	)
}

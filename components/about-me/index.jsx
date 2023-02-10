import Image from 'next/image'
import { Large, Body } from '../../ui/typography'

export const AboutMe = ({ imgURL }) => {
	return (
		<section
			id='about'
			className='px-2 py-20 xl:py-28 2xl:py-32 w-full 2xl:h-screen grid gap-7 items-center justify-items-center xl:grid-cols-2'
		>
			<Image
				className='lg:w-[450px] lg:h-[450px] 2xl:w-[720px] 2xl:h-[720px] rounded-full border-solid border-cyan-500 border-4 2xl:border-8'
				width={360}
				height={360}
				src={imgURL}
				alt='Leandro'
			/>
			<div className='text-center max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl grid gap-7'>
				<Large color='text-cyan-300'>About Me</Large>
				<Body>
					After 14 years of working in customer service for a telecom company
					and studying business administration, I decided to change my
					professional career. I am now taking my first steps in software
					development. A profession that immediately seduced me because it
					forces me to keep learning continuously and gives me many tools to get
					solutions through the use of technology.
				</Body>
				<Body>
					Over those 14 years, I have developed skills such as teamwork, client
					orientation and leadership. Now, after two years of programming
					training, I consider that I have developed my patience, managed
					frustration and I am becoming more agile every day to solve problems.
					But of course, I still have a long way to go.
				</Body>
			</div>
		</section>
	)
}
// {
/* <div className='text-center max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl grid gap-7'>
				<Large color='text-cyan-300'>Education And Technologies</Large>
				<MobileText />
				<DesktopText />
			</div>
			<IconsGrid /> */
// }

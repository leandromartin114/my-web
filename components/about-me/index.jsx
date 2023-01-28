import Image from 'next/image'
import { Large, JustifyBody } from '../../ui/typography'

export const AboutMe = ({ imgURL }) => {
	return (
		<section
			id='about'
			className=' w-full py-8 px-4 grid gap-7 items-center justify-items-center'
		>
			<Large>About Me</Large>
			<div className='max-w-4xl xl:max-w-6xl'>
				<Image
					className='image'
					width={360}
					height={360}
					src={imgURL}
					alt='Leandro'
				/>
				<JustifyBody>
					After 14 years of working in customer service for a telecom company
					and studying business administration, I decided to change my
					professional career. I am now taking my first steps in software
					development. A profession that immediately seduced me because it
					forces me to keep learning continuously and gives me many tools to get
					solutions through the use of technology.
					<br />
					Over those 14 years, I have developed skills such as teamwork, client
					orientation and leadership. Now, after two years of programming
					training, I consider that I have developed my patience, managed
					frustration and I am becoming more agile every day to solve problems.
					But of course, I still have a long way to go.
				</JustifyBody>
			</div>
		</section>
	)
}

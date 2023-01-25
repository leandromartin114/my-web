import { SubTitle, Title, Body } from '../../ui/typography'
import { SocialWelcome } from '../social-welcome'

export const Welcome = ({ imgURL, title, description }) => {
	return (
		<div className='bg-dodger-blue-100 pt-56 md:pt-0 lg:h-full flex flex-col items-center md:flex-row-reverse md:justify-center md:gap-6 lg:gap-24'>
			<div className='w-auto flex flex-col justify-center items-center text-center gap-12'>
				<div className='flex flex-col gap-2 justify-center items-center text-center'>
					<Title>{title}</Title>
					<SubTitle>Full Stack Developer</SubTitle>
					<SocialWelcome />
				</div>
				<div className='hidden md:flex max-w-lg text-center'>
					<Body>{description}</Body>
				</div>
			</div>
			<div className='flex justify-center items-center mt-3 md:max-w-md lg:max-w-2xl'>
				<img src={imgURL} />
			</div>
		</div>
	)
}

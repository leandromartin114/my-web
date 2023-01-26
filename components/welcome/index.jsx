import { SubTitle, Title, Body } from '../../ui/typography'
import { SocialWelcome } from '../social-welcome'

export const Welcome = ({ imgURL, title, description }) => {
	return (
		<div
			id='welcome'
			className='bg-white pt-4 xl:pt-0 px-4 xl:h-[calc(100vh-50px)] flex flex-col items-center md:flex-row-reverse md:justify-center md:gap-6 lg:gap-24 '
		>
			<div className='w-auto flex flex-col justify-center items-center text-center gap-14'>
				<div className='flex flex-col gap-2 justify-center items-center text-center'>
					<Title>{title}</Title>
					<SubTitle>Full Stack Developer</SubTitle>
					<SocialWelcome />
				</div>
				<div className='hidden md:flex max-w-lg text-center'>
					<Body>{description}</Body>
				</div>
			</div>
			<div className='flex justify-center items-center max-w-md md:max-w-md lg:max-w-xl'>
				<img className='lg:bg-dodger-blue-200 lg:rounded-full ' src={imgURL} />
			</div>
		</div>
	)
}

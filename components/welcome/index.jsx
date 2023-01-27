import { SubTitle, Title, Body } from '../../ui/typography'
import { SocialWelcome } from '../social-welcome'

export const Welcome = ({ title, description }) => {
	return (
		<section
			id='welcome'
			className='bg-lean bg-contain bg-no-repeat bg-center pt-4 xl:pt-0 px-4 md:h-[calc(100vh-50px)] flex flex-col items-center md:flex-row-reverse md:justify-center md:gap-6 lg:gap-24 '
		>
			<div className='w-auto flex flex-col justify-center items-center text-center gap-14'>
				<div className='flex flex-col gap-2 justify-center items-center text-center'>
					<Title>{title.toUpperCase()}</Title>
					<SubTitle>Full Stack Developer</SubTitle>
					<SocialWelcome />
				</div>
				<div className='max-w-lg text-center'>
					<Body>{description}</Body>
				</div>
			</div>
		</section>
	)
}

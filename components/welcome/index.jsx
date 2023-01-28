import { SubTitle, Title, Body } from '../../ui/typography'
import { SocialWelcome } from '../social-welcome'
import { DownloadButton } from '../../ui/buttons'

export const Welcome = ({ title, description, cv }) => {
	return (
		<section
			id='welcome'
			className='bg-lean bg-cover md:bg-contain bg-no-repeat bg-center h-screen md:h-[calc(100vh-50px)] grid gap-4 md:gap-11 justify-items-center content-center xl:content-end xl:pb-36'
		>
			<div className='flex flex-col gap-2 justify-center items-center text-center'>
				<Title>{title.toUpperCase()}</Title>
				<SubTitle>Full Stack Developer</SubTitle>
				<SocialWelcome />
			</div>
			<div className='hidden md:flex max-w-sm md:max-w-lg xl:max-w-4xl text-center'>
				<Body>{description}</Body>
			</div>
			<DownloadButton file={cv}>Download CV</DownloadButton>
		</section>
	)
}

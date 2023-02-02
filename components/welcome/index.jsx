import { SubTitle, Title, Body } from '../../ui/typography'
import { SocialWelcome } from '../social-welcome'
import { DownloadButton } from '../../ui/buttons'
import Image from 'next/image'

export const Welcome = ({ title, description, cv }) => {
	return (
		<section
			id='welcome'
			className='h-screen lg:h-[calc(100vh-50px)] grid gap-9 md:gap-11 justify-items-center content-center'
		>
			<Image
				className='rounded-full bg-cyan-100 lean'
				width={230}
				height={230}
				src='https://res.cloudinary.com/deooec1tp/image/upload/v1675355039/My%20web/Lean_sin_fondo_zan07l.png'
				alt='Leandro'
			/>
			<div className='flex flex-col gap-2 justify-center items-center text-center'>
				<Title>{title.toUpperCase()}</Title>
				<SubTitle>Full Stack Developer</SubTitle>
				<SocialWelcome />
			</div>
			<div className='hidden xl:flex max-w-4xl text-center'>
				<Body>{description}</Body>
			</div>
			<DownloadButton file={cv}>Download CV</DownloadButton>
		</section>
	)
}
// bg-lean bg-cover md:bg-contain bg-no-repeat bg-center

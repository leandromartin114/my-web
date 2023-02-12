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
			<div className='flex items-center justify-center rounded-full bg-cyan-600 lean w-[230px] h-[230px] sm:w-[294px] sm:h-[294px] xl:w-[390px] xl:h-[390px] 2xl:w-[612px] 2xl:h-[612px] bg-gradient-to-r bg-clip-border bg-transparent from-cyan-800 via-cyan-500 to-cyan-300 animate-text'>
				<Image
					className='bg-cyan-200 rounded-full lean sm:w-72 xl:w-96 2xl:w-[600px] sm:h-72 xl:h-96 2xl:h-[600px]'
					width={224}
					height={224}
					src='https://res.cloudinary.com/deooec1tp/image/upload/v1675355039/My%20web/Lean_sin_fondo_zan07l.png'
					alt='Leandro'
				/>
			</div>
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

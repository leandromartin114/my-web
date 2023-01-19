import { SubTitle, Title } from '../../ui/typography'
import { Layout } from '../layout'
import { SocialWelcome } from '../social-welcome'

export const Welcome = ({ imgURL, title }) => {
	return (
		<div className='bg-dodger-blue-100 flex flex-col items-center'>
			<Layout>
				<div className='bg-dodger-blue-100 pt-2 md:pt-0 flex flex-col items-center md:flex-row-reverse md:justify-center md:gap-6'>
					<div className='w-auto flex flex-col justify-center items-center text-center'>
						<Title>{title}</Title>
						<SubTitle>Full Stack Developer</SubTitle>
						<SocialWelcome />
					</div>
					<div className='flex justify-center items-center mt-3 max-w-md'>
						<img src={imgURL} />
					</div>
				</div>
			</Layout>
		</div>
	)
}

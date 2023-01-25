import { Large, LightBody } from '../../ui/typography'

export const AboutMe = ({ description }) => {
	return (
		<div className=' w-full h-72 py-5 px-4 grid items-center justify-items-center'>
			<Large>About Me</Large>
			<div className=' max-w-lg text-center self-start'>
				<LightBody>{description}</LightBody>
			</div>
		</div>
	)
}

import { LightBody, LightSmall } from '../typography'

export const Card = ({ imgURL, title, description, url }) => {
	return (
		<div className='grid items-center justify-items-center'>
			<img src={imgURL} alt='img' />
			<div className='grid gap-4'>
				<LightBody>{title}</LightBody>
				<LightSmall>{description}</LightSmall>
				<LightSmall>{url}</LightSmall>
			</div>
		</div>
	)
}

import { LightBody, LightSmall } from '../typography'

export const Card = ({ imgURL, title, description, url }) => {
	return (
		<div className='grid items-center justify-items-center'>
			<img className='w-56 h-64 ' src={imgURL} alt='img' />
			<div className='max-w-xs h-full '>
				<LightBody>{title}</LightBody>
				<LightSmall>{description}</LightSmall>
				<LightSmall>Link</LightSmall>
			</div>
		</div>
	)
}

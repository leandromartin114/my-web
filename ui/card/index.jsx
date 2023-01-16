import { Body, Small } from '../typography'
export const Card = ({ imgURL, title, description, url }) => {
	return (
		<div>
			<img src={imgURL} alt='img' />
			<div>
				<Body>{title}</Body>
				<Small>{description}</Small>
				<Small>{url}</Small>
			</div>
		</div>
	)
}

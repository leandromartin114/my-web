import { LightBody, LightSmall } from '../typography'
import { CardTechsButtons } from '../tech-texts'

export const Card = ({ imgURL, title, description, url, github, tech }) => {
	return (
		<div className='px-10 py-6 grid items-center justify-items-center bg-black border-solid border-4 border-cyan-300 shadow-md shadow-white rounded-xl'>
			<LightBody>{title}</LightBody>
			<img className='w-[280px] h-[320px] ' src={imgURL} alt={title} />
			<div className='max-w-xs h-full '>
				<LightSmall>{description}</LightSmall>
				<LightSmall>link</LightSmall>
				<LightSmall>github</LightSmall>
				<div className='grid grid-cols-2 gap-3'>
					{tech
						? tech.map((t) => {
								return <CardTechsButtons key={t}>{t}</CardTechsButtons>
						  })
						: null}
				</div>
			</div>
		</div>
	)
}

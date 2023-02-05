import { LightSmall, CardTags, CardTitle } from '../typography'
import { CardAnchor } from '../anchor'

export const Card = ({ imgURL, title, description, url, github, tech }) => {
	return (
		<div className='p-2 2xl:p-6 grid items-center justify-items-center gap-3 2xl:gap-4 bg-black border-solid border-8 border-orange-500 rounded-xl'>
			<CardTitle>{title}</CardTitle>
			<img
				className='w-[245px] h-[285px] lg:w-[315px] lg:h-[350px] 2xl:w-[480px] 2xl:h-[560px] border-2 border-orange-500 rounded-xl'
				src={imgURL}
				alt={title}
			/>
			<div className='w-[245px] lg:w-[315px] 2xl:w-[480px] h-full grid justify-items-center items-center gap-2 2xl:gap-3'>
				<div className='w-full grid grid-cols-2 gap-2 2xl:gap-3 justify-items-center items-center'>
					<CardAnchor link={url}>Visit</CardAnchor>
					<CardAnchor link={github}>GitHub</CardAnchor>
				</div>
				<div className='hidden lg:block'>
					<LightSmall>{description}</LightSmall>
				</div>
				<div className='w-full h-32 md:h-40 grid grid-cols-2 gap-2 2xl:gap-3 justify-items-center items-start content-start'>
					{tech
						? tech.map((t) => {
								return <CardTags key={t}>{t}</CardTags>
						  })
						: null}
				</div>
			</div>
		</div>
	)
}

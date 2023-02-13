import { Large } from '../../ui/typography'
import { MobileText, DesktopText } from '../../ui/tech-texts'
import { IconsGrid } from '../../ui/icons-grid'

export const TechStack = () => {
	return (
		<section
			id='stack'
			className='px-2 py-20 w-full xl:h-screen grid gap-7 items-center justify-items-center xl:grid-cols-2'
		>
			<div className='text-center max-w-md md:max-w-lg xl:max-w-4xl grid gap-12 items-center justify-items-center'>
				<Large color='text-cyan-300'>Education And Technologies</Large>
				<div className='text-center max-w-md md:max-w-lg xl:max-w-2xl grid gap-7'>
					<MobileText />
					<DesktopText />
				</div>
			</div>
			<IconsGrid />
		</section>
	)
}

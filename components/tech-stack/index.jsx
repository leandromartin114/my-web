import { Large } from '../../ui/typography'
import { MobileText, DesktopText } from '../../ui/tech-texts'
import { IconsGrid } from '../../ui/icons-grid'

export const TechStack = () => {
	return (
		<section
			id='stack'
			className='px-2 py-20 xl:py-28 2xl:py-32 w-full 2xl:h-screen grid gap-7 items-center justify-items-center xl:grid-cols-2'
		>
			<div className='text-center max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl grid gap-7'>
				<Large color='text-cyan-300'>Education And Technologies</Large>
				<MobileText />
				<DesktopText />
			</div>
			<IconsGrid />
		</section>
	)
}

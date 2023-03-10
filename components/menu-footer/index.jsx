import { DarkAnchor } from '../../ui/anchor'
import { HomeIcon } from '../../ui/icons'

export const MenuFooter = () => {
	return (
		<div className='grid justify-items-start items-center p-2 '>
			<ul className='grid gap-1 md:gap-2 xl:gap-4'>
				<li>
					<a href='#top'>
						<HomeIcon />
					</a>
				</li>
				<li>
					<DarkAnchor link='#stack'>tech stack</DarkAnchor>
				</li>
				<li>
					<DarkAnchor link='#projects'>my projects</DarkAnchor>
				</li>
				<li>
					<DarkAnchor link='#about'>about me</DarkAnchor>
				</li>
				<li>
					<DarkAnchor link='#contact'>contact</DarkAnchor>
				</li>
			</ul>
		</div>
	)
}

import { LightAnchor } from '../../ui/anchor'
import { HomeIcon } from '../../ui/icons'

export const MenuFooter = () => {
	return (
		<div className='grid justify-items-start items-center py-2 px-4'>
			<ul className='grid gap-1'>
				<li>
					<a href='#top'>
						<HomeIcon />
					</a>
				</li>
				<li>
					<LightAnchor link='#about'>about me</LightAnchor>
				</li>
				<li>
					<LightAnchor link='#stack'>tech stack</LightAnchor>
				</li>
				<li>
					<LightAnchor link='#projects'>my projects</LightAnchor>
				</li>
				<li>
					<LightAnchor link='#contact'>contact</LightAnchor>
				</li>
			</ul>
		</div>
	)
}

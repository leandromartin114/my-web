import { LightAnchor } from '../../ui/anchor'
import { HomeIcon } from '../../ui/icons'

export const MenuFooter = () => {
	return (
		<div className='grid justify-items-start items-center py-2 px-4'>
			<ul className='grid gap-1'>
				<li>
					<a href='/#welcome'>
						<HomeIcon />
					</a>
				</li>
				<li>
					<LightAnchor link='/#about'>About Me</LightAnchor>
				</li>
				<li>
					<LightAnchor link='/#stack'>Tech Stack</LightAnchor>
				</li>
				<li>
					<LightAnchor link='/#projects'>My Projects</LightAnchor>
				</li>
				<li>
					<LightAnchor link='/#contact'>Contact</LightAnchor>
				</li>
			</ul>
		</div>
	)
}

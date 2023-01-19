import { LightAnchor } from '../../ui/anchor'

export const MenuFooter = () => {
	return (
		<div className='grid justify-items-start items-center py-2 px-4'>
			<ul className='grid gap-1'>
				<li>
					<LightAnchor>About Me</LightAnchor>
				</li>
				<li>
					<LightAnchor>Tech Stack</LightAnchor>
				</li>
				<li>
					<LightAnchor>My Projects</LightAnchor>
				</li>
				<li>
					<LightAnchor>Contact</LightAnchor>
				</li>
			</ul>
		</div>
	)
}

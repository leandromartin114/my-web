import { LightAnchor } from '../../ui/anchor'

export const MenuFooter = () => {
	return (
		<div className='grid justify-items-start items-center py-2 px-4'>
			<ul className='grid gap-1'>
				<li>
					<a>
						<LightAnchor>About Me</LightAnchor>
					</a>
				</li>
				<li>
					<a>
						<LightAnchor>Tech Stack</LightAnchor>
					</a>
				</li>
				<li>
					<a>
						<LightAnchor>My Projects</LightAnchor>
					</a>
				</li>
				<li>
					<a>
						<LightAnchor>Contact</LightAnchor>
					</a>
				</li>
			</ul>
		</div>
	)
}

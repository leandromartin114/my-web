import { Anchor } from '../../ui/anchor'

export const Navbar = () => {
	return (
		<div className='p-2'>
			<ul className='flex gap-6 lg:gap-9 items-center justify-center'>
				<li>
					<Anchor>About Me</Anchor>
				</li>
				<li>
					<Anchor>Tech Stack</Anchor>
				</li>
				<li>
					<Anchor>My Projects</Anchor>
				</li>
				<li>
					<Anchor>Contact</Anchor>
				</li>
			</ul>
		</div>
	)
}

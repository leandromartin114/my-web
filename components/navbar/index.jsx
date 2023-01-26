import { Anchor } from '../../ui/anchor'

export const Navbar = () => {
	return (
		<div>
			<ul className='flex gap-6 lg:gap-9 items-center justify-center content-center'>
				<li>
					<Anchor link='/#about'>About Me</Anchor>
				</li>
				<li>
					<Anchor link='/#stack'>Tech Stack</Anchor>
				</li>
				<li>
					<Anchor link='/#projects'>My Projects</Anchor>
				</li>
				<li>
					<Anchor link='/#contact'>Contact</Anchor>
				</li>
			</ul>
		</div>
	)
}

import { Anchor } from '../../ui/anchor'

export const Navbar = () => {
	return (
		<nav>
			<ul className='flex gap-6 lg:gap-9 items-center justify-center content-center'>
				<li>
					<Anchor link='#about'>about me</Anchor>
				</li>
				<li>
					<Anchor link='#stack'>tech stack</Anchor>
				</li>
				<li>
					<Anchor link='#projects'>my projects</Anchor>
				</li>
				<li>
					<Anchor link='#contact'>contact</Anchor>
				</li>
			</ul>
		</nav>
	)
}

import { useState } from 'react'
import { GithubIcon, GmailIcon, LinkedinIcon } from '../../ui/icons'
import { Body } from '../../ui/typography'

const style =
	'md:hidden text-base md:text-lg font-semibold text-black bg-white rounded-md p-2 border-2 rounded -right-60 -top-2  absolute'
const style2 =
	'md:inline text-base md:text-lg font-semibold text-black bg-white rounded-md p-2 border-2 rounded -left-64 absolute'

export const SocialMedia = () => {
	const [active, setActive] = useState(false)
	const handleClick = () => {
		setActive(!active)
	}
	return (
		<div className='grid gap-3 justify-items-start items-center py-2 px-4 md:justify-items-end'>
			<Body>Social Media</Body>
			<ul className='grid gap-2'>
				<li>
					<a
						href='https://github.com/leandromartin114'
						target='_blank'
						rel='noreferrer'
					>
						<GithubIcon />
					</a>
				</li>
				<li className='relative'>
					<span className={active ? style : 'hidden'}>
						leandrom.roldan@gmail.com
					</span>
					<span className={active ? style2 : 'hidden'}>
						leandrom.roldan@gmail.com
					</span>
					<a>
						<GmailIcon onClick={handleClick} />
					</a>
				</li>
				<li>
					<a
						href='https://www.linkedin.com/in/leandro-martin-roldan/'
						target='_blank'
						rel='noreferrer'
					>
						<LinkedinIcon />
					</a>
				</li>
			</ul>
		</div>
	)
}

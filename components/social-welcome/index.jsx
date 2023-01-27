import { useState } from 'react'
import { GithubBlack, GmailBlack, LinkedinBlack } from '../../ui/icons'

const style =
	'text-base md:text-lg font-semibold text-tiber-700 bg-white rounded-md p-2 absolute -bottom-12 border-2 rounded'

export const SocialWelcome = () => {
	const [active, setActive] = useState(false)
	const handleClick = () => {
		setActive(!active)
	}
	return (
		<div className='grid justify-items-center relative'>
			<ul className='flex gap-2'>
				<li>
					<a
						href='https://github.com/leandromartin114'
						target='_blank'
						rel='noreferrer'
					>
						<GithubBlack />
					</a>
				</li>
				<li>
					<a>
						<GmailBlack onClick={handleClick} />
					</a>
				</li>
				<li>
					<a
						href='https://www.linkedin.com/in/leandro-martin-roldan/'
						target='_blank'
						rel='noreferrer'
					>
						<LinkedinBlack />
					</a>
				</li>
			</ul>
			<span className={active ? style : 'hidden'}>
				leandrom.roldan@gmail.com
			</span>
		</div>
	)
}

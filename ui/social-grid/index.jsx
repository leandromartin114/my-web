import { useState } from 'react'
import { GithubColor, GmailColor, LinkedinColor, TwitterColor } from '../icons'

const style =
	'absolute text-base md:text-lg xl:text-xl font-semibold bg-white rounded-md p-1 md:p-2 border-2 y-1/2 x-1/2'

export const SocialGrid = () => {
	const [active, setActive] = useState(false)
	const handleClick = () => {
		setActive(!active)
	}
	return (
		<div className='bg-orange-200 border-solid border-orange-600 border-4 2xl:border-8 rounded-full'>
			<ul className='relative w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] md:w-[320px] md:h-[320px] xl:w-[430px] xl:h-[430px] grid grid-cols-2 items-center justify-items-center p-8 sm:p-10 md:p-12 xl:p-14 gap-1'>
				<li>
					<a
						href='https://github.com/leandromartin114'
						target='_blank'
						rel='noreferrer'
					>
						<GithubColor />
					</a>
				</li>
				<li>
					<a onClick={handleClick}>
						<GmailColor />
					</a>
				</li>
				<li>
					<a
						href='https://www.linkedin.com/in/leandro-martin-roldan/'
						target='_blank'
						rel='noreferrer'
					>
						<LinkedinColor />
					</a>
				</li>
				<li>
					<a
						href='https://twitter.com/leandromroldan'
						target='_blank'
						rel='noreferrer'
					>
						<TwitterColor />
					</a>
				</li>
				<span className={active ? style : 'hidden'}>
					leandrom.roldan@gmail.com
				</span>
			</ul>
		</div>
	)
}

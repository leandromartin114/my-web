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
			<ul className='relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[370px] md:h-[370px] xl:w-[430px] xl:h-[430px] grid grid-cols-2 items-center justify-items-center p-6 sm:p-8 md:p-10 xl:p-12 gap-1'>
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

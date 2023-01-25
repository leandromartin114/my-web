import { GithubBlack, GmailBlack, LinkedinBlack } from '../../ui/icons'

export const SocialWelcome = () => {
	return (
		<div>
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
						<GmailBlack />
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
		</div>
	)
}

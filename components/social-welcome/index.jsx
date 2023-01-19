import { GithubBlack, GmailBlack, LinkedinBlack } from '../../ui/icons'

export const SocialWelcome = () => {
	return (
		<div>
			<ul className='flex gap-2'>
				<li>
					<a>
						<GithubBlack />
					</a>
				</li>
				<li>
					<a>
						<GmailBlack />
					</a>
				</li>
				<li>
					<a>
						<LinkedinBlack />
					</a>
				</li>
			</ul>
		</div>
	)
}

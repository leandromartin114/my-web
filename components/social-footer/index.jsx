import {
	GithubIcon,
	GmailIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from '../../ui/icons'
import { LightBody } from '../../ui/typography'

export const SocialMedia = () => {
	return (
		<div className='grid gap-3 justify-items-start items-center py-2 px-4 md:justify-items-end'>
			<LightBody>Social Media</LightBody>
			<ul className='grid gap-1'>
				<li>
					<a>
						<GithubIcon />
					</a>
				</li>
				<li>
					<a>
						<GmailIcon />
					</a>
				</li>
				<li>
					<a>
						<InstagramIcon />
					</a>
				</li>
				<li>
					<a>
						<LinkedinIcon />
					</a>
				</li>
				<li>
					<a>
						<TwitterIcon />
					</a>
				</li>
			</ul>
		</div>
	)
}

import { SocialMedia } from '../social-footer'
import { MenuFooter } from '../menu-footer'
import { LightSmall } from '../../ui/typography'

export const Footer = () => {
	return (
		<footer className='py-4 bg-tiber-600 w-full flex flex-col items-start gap-3 md:gap-7'>
			<div className='w-full md:flex md:justify-between md:items-start gap-3'>
				<MenuFooter />
				<SocialMedia />
			</div>
			<div className='w-full py-2 px-4 flex justify-start md:justify-center'>
				<LightSmall>
					Copyright © 2023 Leandro Roldán. All rights reserved.
				</LightSmall>
			</div>
		</footer>
	)
}

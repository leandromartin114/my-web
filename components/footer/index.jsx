import { SocialMedia } from '../social-footer'
import { MenuFooter } from '../menu-footer'
import { Small } from '../../ui/typography'

export const Footer = () => {
	return (
		<footer className='py-4 xl:py-5 bg-white w-full flex flex-col items-start gap-3 md:gap-7 xl:gap-9 border-t-orange-600 border-2 xl:border-4'>
			<div className='w-full py-2 px-4 flex justify-start md:justify-center md:text-center'>
				<MenuFooter />
			</div>
			<div className='w-full py-2 px-4 flex justify-start md:justify-center'>
				<Small>Copyright © 2023 Leandro Roldán. All rights reserved.</Small>
			</div>
		</footer>
	)
}

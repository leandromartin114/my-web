import { Body, Large } from '../../ui/typography'
import { ContactForm } from '../contact-form'
import { SocialGrid } from '../../ui/social-grid'

export const Contact = ({ imgURL }) => {
	return (
		<section
			id='contact'
			className='px-2 py-20 xl:py-28 2xl:py-32 w-full 2xl:h-screen grid gap-7 items-center justify-items-center xl:grid-cols-2'
		>
			<div className='text-center max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl grid gap-14 items-center justify-items-center'>
				<Large color='text-orange-500'>Contact</Large>
				<div className='text-center max-w-md md:max-w-lg xl:max-w-4xl 2xl:max-w-5xl grid gap-8 items-center justify-items-center'>
					<div className='max-w-3xl'>
						<Body>
							You want to connect with me? Leave your information and I'll
							contact you soon.
						</Body>
					</div>
					<ContactForm />
				</div>
			</div>
			<div className='2xl:w-[800px] grid gap-8 items-center justify-items-center'>
				<Body>If you prefer, here are others ways to contact me:</Body>
				<SocialGrid />
			</div>
		</section>
	)
}

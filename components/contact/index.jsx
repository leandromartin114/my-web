import { Body, Large } from '../../ui/typography'
import { ContactForm } from '../contact-form'
import { SocialGrid } from '../../ui/social-grid'

export const Contact = ({ imgURL }) => {
	return (
		<section
			id='contact'
			className='px-2 py-20 w-full xl:h-screen grid gap-7 items-center justify-items-center xl:grid-cols-2'
		>
			<div className='text-center max-w-md md:max-w-lg xl:max-w-2xl grid gap-12 items-center justify-items-center'>
				<Large color='text-orange-500'>Contact</Large>
				<div className='text-center max-w-md md:max-w-lg xl:max-w-2xl grid gap-7 items-center justify-items-center'>
					<div className='max-w-3xl'>
						<Body>
							You want to connect with me? Leave your information and I'll
							contact you soon.
						</Body>
					</div>
					<ContactForm />
				</div>
			</div>
			<div className='grid gap-8 items-center justify-items-center'>
				<Body>If you prefer, here are others ways to contact me:</Body>
				<SocialGrid />
			</div>
		</section>
	)
}

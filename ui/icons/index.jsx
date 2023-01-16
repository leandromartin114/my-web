import Instagram from './instagram.svg'
import Gmail from './gmail.svg'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'

export const GithubIcon = () => {
	return (
		<div className='w-7 h-7'>
			<img src={Github.src} alt='Github' />
		</div>
	)
}

export const GmailIcon = () => {
	return (
		<div className='w-7 h-7'>
			<img src={Gmail.src} alt='Gmail' />
		</div>
	)
}

export const InstagramIcon = () => {
	return (
		<div className='w-7 h-7'>
			<img src={Instagram.src} alt='Instagram' />
		</div>
	)
}

export const LinkedinIcon = () => {
	return (
		<div className='w-7 h-7'>
			<img src={Linkedin.src} alt='Linkedin' />
		</div>
	)
}

export const TwitterIcon = () => {
	return (
		<div className='w-7 h-7'>
			<img src={Twitter.src} alt='Twitter' />
		</div>
	)
}

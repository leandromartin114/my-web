export const Anchor = ({ children, link }) => {
	return (
		<a href={link} className='cursor-pointer'>
			<p
				className='text-xl xl:text-2xl font-bold text-jelly-bean-400 hover:text-jelly-bean-600
                        after:block
                        after:border-b-4
                        after:border-jelly-bean-600
                        after:scale-x-0 
                        after:transition-transform
                        duration-300
                        after:ease-in-out
                        after:origin-center
                        hover:after:scale-x-100'
			>
				{children}
			</p>
		</a>
	)
}

export const LightAnchor = ({ children, link }) => {
	return (
		<a href={link} className='cursor-pointer'>
			<p
				className='inline-block text-base xl:text-lg font-bold text-dodger-blue-100 hover:text-dodger-blue-500
                        after:block
                        after:border-b-2
                        after:border-dodger-blue-500
                        after:scale-x-0
                        after:transition-transform
                        duration-300
                        after:ease-in-out
                        after:origin-center
                        hover:after:scale-x-100'
			>
				{children}
			</p>
		</a>
	)
}

export const Anchor = ({ children, link }) => {
	return (
		<a href={link} className='cursor-pointer'>
			<p
				className='font-montserrat text-xl xl:text-2xl font-bold text-cyan-500 hover:text-cyan-700
                        after:block
                        after:border-b-4
                        after:border-cyan-700
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
				className='font-montserrat inline-block text-base xl:text-lg font-bold text-white hover:text-cyan-400
                        after:block
                        after:border-b-2
                        after:border-cyan-400
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

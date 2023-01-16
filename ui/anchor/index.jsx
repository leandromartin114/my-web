export const Anchor = ({ children }) => {
	return (
		<a className='cursor-pointer'>
			<p
				className='text-xl font-bold text-dodger-blue-500 hover:text-dodger-blue-800
                        after:block
                        after:border-b-2
                        after:border-dodger-blue-800
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

export const LightAnchor = ({ children }) => {
	return (
		<a className='cursor-pointer'>
			<p
				className='inline-block text-base font-bold text-dodger-blue-100 hover:text-dodger-blue-500
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

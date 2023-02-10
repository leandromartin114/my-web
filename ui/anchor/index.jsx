export const Anchor = ({ children, link }) => {
	return (
		<a href={link} className='cursor-pointer'>
			<p
				className='font-montserrat text-xl xl:text-2xl 2xl:text-3xl font-bold text-cyan-500 hover:text-cyan-700
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
				className='font-montserrat inline-block text-base xl:text-lg 2xl:text-xl font-bold text-white hover:text-cyan-400
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

export const DarkAnchor = ({ children, link }) => {
	return (
		<a href={link} className='cursor-pointer'>
			<p
				className='font-montserrat inline-block text-base xl:text-lg 2xl:text-xl font-bold text-black hover:text-cyan-400
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

export const CardAnchor = ({ children, link }) => {
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			className='cursor-pointer w-full'
		>
			<p className='w-full bg-white rounded-2xl border-solid border-2 border-orange-700 px-2 py-1 text-xs lg:text-base 2xl:text-lg font-bold text-orange-700 text-center flex justify-center items-center'>
				{children}
			</p>
		</a>
	)
}

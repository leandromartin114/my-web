export const Title = ({ children }) => {
	return (
		<h1
			className='font-righteous font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl   
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-dodger-blue-900 via-dodger-blue-700 to-dodger-blue-400
            animate-text
		'
		>
			{children}
		</h1>
	)
}

export const SubTitle = ({ children }) => {
	return (
		<h2
			className='font-kanit text-2xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold
		bg-gradient-to-l bg-clip-text  text-transparent 
        from-tiber-700 via-tiber-500 to-tiber-200
        animate-text
		'
		>
			{children}
		</h2>
	)
}

export const Large = ({ children }) => {
	return (
		<h3 className='font-righteous text-2xl md:text-3xl xl:text-4xl font-normal text-tiber-200 '>
			{children}
		</h3>
	)
}

export const LightLarge = ({ children }) => {
	return (
		<h3 className='font-righteous text-2xl md:text-3xl xl:text-4xl font-normal text-dodger-blue-100'>
			{children}
		</h3>
	)
}

export const Body = ({ children }) => {
	return (
		<p className='text-base md:text-lg xl:text-2xl font-semibold xl:font-bold text-tiber-700'>
			{children}
		</p>
	)
}

export const LightBody = ({ children }) => {
	return (
		<p className='text-base md:text-lg xl:text-2xl font-semibold xl:font-bold text-dodger-blue-100'>
			{children}
		</p>
	)
}

export const JustifyBody = ({ children }) => {
	return (
		<p className='text-center lg:text-justify text-base md:text-lg xl:text-2xl font-semibold xl:font-bold text-dodger-blue-100'>
			{children}
		</p>
	)
}

export const Small = ({ children }) => {
	return (
		<p className='text-xs lg:text-sm font-semibold text-tiber-700'>
			{children}
		</p>
	)
}

export const LightSmall = ({ children }) => {
	return (
		<p className='text-xs lg:text-sm font-semibold text-dodger-blue-100'>
			{children}
		</p>
	)
}

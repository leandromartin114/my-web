export const Title = ({ children }) => {
	return (
		<h1
			className='font-righteous font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-8xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-cyan-800 via-cyan-500 to-cyan-300
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
			className='font-kanit font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-8xl
		bg-gradient-to-r bg-clip-text  text-transparent 
        from-orange-800 via-orange-500 to-orange-300
        animate-text
		'
		>
			{children}
		</h2>
	)
}

export const Large = ({ children, color }) => {
	return (
		<h3
			className={
				'font-righteous text-center text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold ' +
				color
			}
		>
			{children}
		</h3>
	)
}

export const Body = ({ children }) => {
	return (
		<p className='text-base md:text-lg xl:text-xl font-semibold xl:font-bold text-black'>
			{children}
		</p>
	)
}

export const LightBody = ({ children }) => {
	return (
		<p className='text-base md:text-lg xl:text-xl font-semibold text-white'>
			{children}
		</p>
	)
}

export const JustifyBody = ({ children }) => {
	return (
		<p className='text-center lg:text-justify text-base md:text-lg xl:text-xl font-semibold xl:font-bold text-black'>
			{children}
		</p>
	)
}

export const Small = ({ children }) => {
	return (
		<p className='text-xs lg:text-sm font-semibold text-black'>{children}</p>
	)
}

export const LightSmall = ({ children }) => {
	return (
		<p className='text-xs lg:text-sm font-semibold text-white'>{children}</p>
	)
}

export const CardTags = ({ children }) => {
	return (
		<div className='w-full bg-orange-700 rounded-2xl shadow-sm shadow-white px-2 py-1 text-xs lg:text-sm font-bold text-white text-center flex justify-center items-center cursor-text'>
			{children}
		</div>
	)
}

export const CardTitle = ({ children }) => {
	return (
		<h3 className='font-righteous text-center text-lg md:text-xl xl:text-2xl font-semibold text-white '>
			{children}
		</h3>
	)
}

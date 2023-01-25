export const Title = ({ children }) => {
	return (
		<h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-jelly-bean-500'>
			{children}
		</h1>
	)
}

export const SubTitle = ({ children }) => {
	return (
		<h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-tiber-400'>
			{children}
		</h2>
	)
}

export const Large = ({ children }) => {
	return <h3 className='text-2xl font-bold text-jelly-bean-400 '>{children}</h3>
}

export const LightLarge = ({ children }) => {
	return <h3 className='text-2xl font-bold text-dodger-blue-100'>{children}</h3>
}

export const Body = ({ children }) => {
	return (
		<p className='text-base md:text-lg font-semibold text-jelly-bean-800'>
			{children}
		</p>
	)
}

export const LightBody = ({ children }) => {
	return (
		<p className='text-base md:text-lg font-semibold text-dodger-blue-100'>
			{children}
		</p>
	)
}

export const Small = ({ children }) => {
	return <p className='text-xs font-semibold text-jelly-bean-800'>{children}</p>
}

export const LightSmall = ({ children }) => {
	return (
		<p className='text-xs font-semibold text-dodger-blue-100'>{children}</p>
	)
}

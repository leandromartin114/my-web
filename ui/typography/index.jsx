export const Title = ({ children }) => {
	return (
		<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-jelly-bean-500'>
			{children}
		</h1>
	)
}

export const SubTitle = ({ children }) => {
	return (
		<h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-tiber-400'>
			{children}
		</h2>
	)
}

export const Large = ({ children }) => {
	return <p className='text-2xl font-bold text-dodger-blue-600'>{children}</p>
}

export const LightLarge = ({ children }) => {
	return <p className='text-2xl font-bold text-dodger-blue-100'>{children}</p>
}

export const Body = ({ children }) => {
	return (
		<p className='text-base font-semibold text-jelly-bean-800'>{children}</p>
	)
}

export const LightBody = ({ children }) => {
	return (
		<p className='text-base font-semibold text-dodger-blue-100'>{children}</p>
	)
}

export const Small = ({ children }) => {
	return <p className='text-xs font-semibold text-jelly-bean-800'>{children}</p>
}

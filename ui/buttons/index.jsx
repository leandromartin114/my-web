export const Button = ({ children }) => {
	return (
		<button className='px-4 py-1 text-base font-semibold text-white bg-dodger-blue-400 border-2 border-solid rounded-md border-dodger-blue-900 hover:bg-dodger-blue-700'>
			{children}
		</button>
	)
}

export const DownloadButton = ({ children, file }) => {
	return (
		<a
			href={file}
			target='_blank'
			rel='noopener noreferrer'
			className='px-4 py-1 text-base lg:text-lg font-bold text-white bg-dodger-blue-400 rounded-md hover:bg-dodger-blue-700 hover:shadow-2xl hover:shadow-dodger-blue-800 cursor-pointer'
		>
			{children}
		</a>
	)
}

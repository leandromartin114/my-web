export const Button = ({ children }) => {
	return (
		<button className='px-4 py-1 text-base font-semibold text-white bg-cyan-500 border-2 border-solid rounded-md border-cyan-900 hover:bg-cyan-700'>
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
			className='px-4 py-1 text-base lg:text-lg xl:text-2xl xl:px-6 xl:py-3 font-bold text-white bg-cyan-500 rounded-lg hover:bg-cyan-700 hover:shadow-2xl hover:shadow-cyan-800 cursor-pointer'
		>
			{children}
		</a>
	)
}

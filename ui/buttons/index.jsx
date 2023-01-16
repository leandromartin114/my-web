export const Button = ({ children }) => {
	return (
		<button className='px-4 py-1 text-base font-semibold text-white bg-dodger-blue-400 border-2 border-solid rounded-md border-dodger-blue-900 hover:bg-dodger-blue-700'>
			{children}
		</button>
	)
}

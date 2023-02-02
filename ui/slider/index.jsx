export const Slider = ({ images }) => {
	return (
		<div className='cube-container'>
			<div className='cube'>
				{images.map((i) => {
					return <img key={i} src={i} />
				})}
			</div>
		</div>
	)
}

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { fetchLocalAPI } from '../../lib/api'

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const [show, setShow] = useState(false)

	const onSubmit = async (data) => {
		setShow(true)
		const dataString = JSON.stringify(data)
		const res = await fetchLocalAPI(dataString)
		console.log(res)
		reset()
	}

	return (
		<form
			className='w-64 md:w-80 xl:w-[450px] 2xl:w-[600px] px-3 md:px-4 2xl:px-7 py-4 md:py-5 2xl:py-7 grid gap-4 md:gap-5 2xl:gap-8 items-center justify-items-center bg-orange-100 border-solid border-orange-600 border-4 2xl:border-8 rounded-xl'
			onSubmit={handleSubmit(onSubmit)}
		>
			<label className='text-start w-full grid gap-1 2xl:gap-2'>
				<h4 className='text-sm md:text-base xl:text-2xl 2xl:text-3xl font-bold'>
					Your name
				</h4>
				<input
					className='py-1 2xl:py-3 px-2 2xl:px-4 text-base md:text-lg xl:text-3xl 2xl:text-4xl rounded-lg'
					type='text'
					{...register('name', { required: true })}
				/>
			</label>
			{errors.name && (
				<span className='justify-self-start text-sm md:text-base xl:text-xl 2xl:text-3xl'>
					This field is required
				</span>
			)}

			<label className='text-start w-full grid gap-1 2xl:gap-2'>
				<h4 className='text-sm md:text-base xl:text-2xl 2xl:text-3xl font-bold'>
					Your email
				</h4>
				<input
					className='py-1 2xl:py-3 px-2 2xl:px-4 text-base md:text-lg xl:text-3xl 2xl:text-4xl rounded-lg'
					type='email'
					{...register('email', { required: true })}
				/>
			</label>
			{errors.email && (
				<span className='justify-self-start text-sm md:text-base xl:text-xl 2xl:text-3xl'>
					This field is required
				</span>
			)}

			<label className='text-start w-full grid gap-1 2xl:gap-2'>
				<h4 className='text-sm md:text-base xl:text-2xl 2xl:text-3xl font-bold'>
					Your phone number
				</h4>
				<input
					className='py-1 2xl:py-3 px-2 2xl:px-4 text-base md:text-lg xl:text-3xl 2xl:text-4xl rounded-lg'
					type='phone'
					{...register('phone')}
				/>
			</label>

			<label className='text-start w-full grid gap-1 2xl:gap-2'>
				<h4 className='text-sm md:text-base xl:text-2xl 2xl:text-3xl font-bold'>
					Message
				</h4>
				<textarea
					className='h-36 md:h-40 2xl:h-64 py-1 px-2 text-base md:text-lg xl:text-3xl 2xl:text-4xl rounded-lg'
					{...register('message', { required: true })}
				/>
			</label>
			{errors.message && (
				<span className='justify-self-start text-sm md:text-base xl:text-xl 2xl:text-3xl'>
					This field is required
				</span>
			)}

			<button
				className='w-full py-1 2xl:py-3 px-2 2xl:px-3 text-base md:text-lg xl:text-xl 2xl:text-3xl text-white font-bold bg-orange-500 rounded-lg'
				type='submit'
			>
				Enviar
			</button>
			<span
				className={
					show ? 'block text-sm md:text-base xl:text-xl 2xl:text-3xl' : 'hidden'
				}
			>
				Thanks for your message! I'll be in touch soon.
			</span>
		</form>
	)
}
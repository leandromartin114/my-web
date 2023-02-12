import { LightSmall, CardTags, CardTitle } from '../../ui/typography'
import { CardAnchor } from '../../ui/anchor'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, EffectFlip, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const Carousel = ({ items }) => {
	return (
		<div className='max-w-screen-2xl'>
			<Swiper
				effect='flip'
				grabCursor
				pagination
				navigation
				modules={[EffectFlip, Pagination, Navigation]}
				className='w-[315px] md:w-[350px] lg:w-[510px] lg:h-[910px]'
			>
				{items.map((item, index) => (
					<SwiperSlide key={item.title}>
						<div
							key={index}
							className='h-full p-2 grid content-start items-center justify-items-center gap-2 bg-black border-solid border-8 border-orange-500 rounded-xl'
						>
							<CardTitle>{item.title}</CardTitle>
							<img
								src={item.img}
								alt={item.title}
								className='w-[265px] md:w-[300px] lg:w-[410px] h-full border-2 border-orange-500 rounded-xl'
							/>
							<div className='w-[265px] md:w-[300px] lg:w-[410px] h-full grid justify-items-center items-center gap-2'>
								<div className='w-full grid grid-cols-2 gap-2 justify-items-center items-center'>
									<CardAnchor link={item.url}>Visit</CardAnchor>
									<CardAnchor link={item.github}>GitHub</CardAnchor>
								</div>
								<div className='hidden md:block'>
									<LightSmall>{item.description}</LightSmall>
								</div>
								<div className='w-full h-32 grid grid-cols-2 gap-2 justify-items-center items-start content-start'>
									{item.tech.stack
										? item.tech.stack.map((t) => {
												return <CardTags key={t}>{t}</CardTags>
										  })
										: null}
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
				...
			</Swiper>
		</div>
	)
}

export const CarouselXL = ({ items }) => {
	return (
		<div className='max-w-screen-2xl'>
			<Swiper
				effect='coverflow'
				grabCursor
				centeredSlides
				slidesPerView={3}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				navigation
				pagination={{
					dynamicBullets: true,
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className='h-[1050px]'
			>
				{items.map((item, index) => (
					<SwiperSlide key={item.title}>
						<div
							key={index}
							className='h-[965px] p-6 grid content-start items-center justify-items-center gap-4 bg-black border-solid border-8 border-orange-500 rounded-xl'
						>
							<CardTitle>{item.title}</CardTitle>
							<img
								src={item.img}
								alt={item.title}
								className='w-[410px] h-[450px] border-2 border-orange-500 rounded-xl'
							/>
							<div className='w-[410px] h-full grid justify-items-center items-center gap-3'>
								<div className='w-full grid grid-cols-2 gap-3 justify-items-center items-center'>
									<CardAnchor link={item.url}>Visit</CardAnchor>
									<CardAnchor link={item.github}>GitHub</CardAnchor>
								</div>
								<div>
									<LightSmall>{item.description}</LightSmall>
								</div>
								<div className='w-full h-40 grid grid-cols-2 gap-3 justify-items-center items-start content-start'>
									{item.tech.stack
										? item.tech.stack.map((t) => {
												return <CardTags key={t}>{t}</CardTags>
										  })
										: null}
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
				...
			</Swiper>
		</div>
	)
}

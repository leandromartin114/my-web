import {
	CssIcon,
	FirebaseIcon,
	GitIcon,
	NodeIcon,
	ReactIcon,
	JSIcon,
	TSIcon,
	HtmlIcon,
	AlgoliaIcon,
	PostgresIcon,
	NextIcon,
	TailwindIcon,
	PostmanIcon,
	WebpackIcon,
	ContentfulIcon,
	CloudinaryIcon,
} from '../icons'

export const IconsGrid = () => {
	return (
		<div className='p-7 grid gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 grid-cols-4 items-center justify-items-center bg-black border-solid border-cyan-300 border-4 shadow-white rounded-xl'>
			<HtmlIcon />
			<CssIcon />
			<JSIcon />
			<TSIcon />
			<GitIcon />
			<NodeIcon />
			<FirebaseIcon />
			<PostgresIcon />
			<AlgoliaIcon />
			<PostmanIcon />
			<ReactIcon />
			<NextIcon />
			<WebpackIcon />
			<TailwindIcon />
			<ContentfulIcon />
			<CloudinaryIcon />
		</div>
	)
}

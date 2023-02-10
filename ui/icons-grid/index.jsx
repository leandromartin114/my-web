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
		<div className='p-2 sm:p-7 grid gap-2 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 grid-cols-4 items-center justify-items-center bg-black border-solid border-cyan-300 border-4 2xl:border-8 rounded-xl'>
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

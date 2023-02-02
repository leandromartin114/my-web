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
		<div className='py-5 px-1 grid gap-2 grid-cols-4 items-center justify-items-center'>
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

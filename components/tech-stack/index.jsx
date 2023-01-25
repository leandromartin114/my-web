import { Large } from '../../ui/typography'
import {
	AlgoliaIcon,
	CssIcon,
	FirebaseIcon,
	GitIcon,
	HtmlIcon,
	JSIcon,
	NextIcon,
	NodeIcon,
	PostgresIcon,
	ReactIcon,
	TailwindIcon,
	TSIcon,
} from '../../ui/icons'

export const TechStack = () => {
	return (
		<div className=' w-full h-96 py-5 px-4 grid items-center justify-items-center'>
			<Large>Tech Stack</Large>
			<div className=' max-w-2xl self-start grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 lg:gap-7'>
				<HtmlIcon />
				<CssIcon />
				<TailwindIcon />
				<JSIcon />
				<TSIcon />
				<NodeIcon />
				<FirebaseIcon />
				<PostgresIcon />
				<AlgoliaIcon />
				<ReactIcon />
				<NextIcon />
				<GitIcon />
			</div>
		</div>
	)
}

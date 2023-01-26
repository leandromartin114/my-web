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
		<div
			id='stack'
			className=' w-full py-5 px-4 grid items-start justify-items-center'
		>
			<Large>Tech Stack</Large>
			<div className=' max-w-2xl grid grid-cols-3 sm:grid-cols-4 gap-4 lg:gap-7'>
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

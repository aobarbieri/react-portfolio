import About from './About'
import Nav from './Nav'

export default function Header({ about }) {
	return (
		<header>
			<Nav />
			<About about={about} />
		</header>
	)
}

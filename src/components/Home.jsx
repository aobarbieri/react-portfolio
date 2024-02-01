import About from './About'
import Projects from './Projects'

export default function Home() {
	document.title = 'Amanda Mitzian'
	return (
		<>
			<About />
			<Projects />
		</>
	)
}

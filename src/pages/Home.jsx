import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
	document.title = 'Amanda Mitzian'
	return (
		<>
			<About />
			<Projects />
		</>
	)
}

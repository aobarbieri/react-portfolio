import About from './About'
import Projects from './Projects'
import Skills from './Skills'

export default function Home() {
	document.title = 'Amanda Mitzian'
	return (
		<>
			<About />
			<Projects />
			<Skills />
		</>
	)
}

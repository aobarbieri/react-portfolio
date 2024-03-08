import { useState, useEffect } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Bio from './components/Bio'
import Footer from './components/Footer'

function App() {
	const [about, setAbout] = useState(null)

	const getAboutData = async () => {
		const res = await fetch('./about.json')
		const data = await res.json()
		setAbout(data)
	}
	useEffect(() => {
		getAboutData()
	}, [])

	const loaded = () => (
		<>
			<Header about={about} />
			<main className='main'>
				<Projects />
				<Skills />
			</main>
			<Bio about={about} />
			<Footer />
		</>
	)
	return about ? loaded() : ''
}

export default App

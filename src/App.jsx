import { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/footer/Footer'

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
			<Footer about={about} />
		</>
	)
	return about ? loaded() : ''
}

export default App

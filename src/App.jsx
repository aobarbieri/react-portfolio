import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<Projects />
				<Skills />
			</main>
			<Footer />
		</>
	)
}

export default App

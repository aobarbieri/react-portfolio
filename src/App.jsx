import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'

function App() {
	return (
		<>
			<Header />
			<Contact />
			<main className='container'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App

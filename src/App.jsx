import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'

function App() {
	return (
		<>
			<Header />
			<main className='container'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App

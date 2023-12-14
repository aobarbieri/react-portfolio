import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

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

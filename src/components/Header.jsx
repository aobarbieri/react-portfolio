import { Link } from 'react-router-dom'
import logo from '../assets/html-logo.svg'

export default function Header() {
	return (
		<header className='fixed'>
			<nav className='navbar flex justify-between'>
				<Link to='/' className='flex items-end'>
					<img className='hidden md:inline md:h-7' src={logo} alt='HTML icon' />
					<h3 className='text-lg md:text-xl font-semibold mx-2'>Amanda Mitzian</h3>
				</Link>

				{/* Tablet and Laptop */}
				<ul className='flex items-end'>
					<Link to='/'>
						<li className='mx-5'>Home</li>
					</Link>
					<Link to='/projects'>
						<li>Projects</li>
					</Link>
				</ul>
			</nav>
		</header>
	)
}

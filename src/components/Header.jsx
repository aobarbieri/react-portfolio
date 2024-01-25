import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className='fixed'>
			<nav className='navbar flex justify-between'>
				<Link to='/' className='flex items-end'>
					<h3 className=''>Amanda Mitzian</h3>
				</Link>

				{/* Tablet and Laptop */}
				<ul className='flex items-end'>
					<Link to='/projects'>
						<li>Projects</li>
					</Link>
					<li>Resume</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	)
}

import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className='fixed'>
			<nav className='navbar flex justify-between'>
				<Link to='/' className='flex items-end'>
					<h3 className=''>Amanda Mitzian</h3>
				</Link>

				<ul className=''>
					<Link to='/projects'>
						<li>Projects</li>
					</Link>
					<li>
						<a href='https://drive.google.com/file/d/1GiCiuwG9234fkXM11Suym41aN3mSfgE1/view?usp=sharing' target='_blank' rel='noreferrer'>
							Resume
						</a>
					</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	)
}

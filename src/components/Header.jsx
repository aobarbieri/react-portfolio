import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className='fixed'>
			<nav className='navbar'>
				<Link to='/'>
					<h3 className=''>Amanda Mitzian</h3>
				</Link>

				<ul className='flex'>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<a href='https://drive.google.com/file/d/1zhjTywdUQ9HmZyuEaP6MT1hUastRY-n9/view?usp=sharing' target='_blank' rel='noreferrer'>
							Resume
						</a>
					</li>
					{/* <li>Contact</li> */}
				</ul>
			</nav>
		</header>
	)
}

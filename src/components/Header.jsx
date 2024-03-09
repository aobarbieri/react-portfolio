import About from './About'

export default function Header({ about }) {
	return (
		<header>
			<nav className='navbar'>
				<ul className='nav-items'>
					<li>
						<a href='https://drive.google.com/file/d/1zhjTywdUQ9HmZyuEaP6MT1hUastRY-n9/view?usp=sharing' target='_blank' rel='noreferrer'>
							Resume
						</a>
					</li>
					<li>
						<span>/</span>
					</li>
					<li>Contact</li>
				</ul>
			</nav>
			<About about={about} />
		</header>
	)
}

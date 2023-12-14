import logo from '../assets/html-logo.svg'

export default function Header() {
	return (
		<header className='fixed w-full'>
			<nav className='navbar'>
				<a className='flex items-end' href='#start'>
					<img className='hidden md:inline md:h-7' src={logo} alt='HTML icon' />
					<h3 className='text-lg md:text-xl font-semibold mx-2'>Amanda Mitzian</h3>
				</a>

				{/* Tablet and Laptop */}
				<ul className='navbar__full'>
					<li>
						<a href='resume'>Resume</a>
					</li>
					<li className='mx-5'>
						<a className='workLink'>
							Work
						</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

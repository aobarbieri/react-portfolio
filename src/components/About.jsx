import { useState } from 'react'
import PropTypes from 'prop-types'
import avatar from '/assets/amanda.png'
import github from '/assets/brands/github.svg'
import linkedin from '/assets/brands/linkedin.svg'
import email from '/assets/icons/email.svg'

export default function About({ about }) {
	const [toggle, setToggle] = useState(true)

	const setToggleClass = () => {
		setToggle(false)
	}

	return (
		<section className='about'>
			<div className='avatar'>
				<img src={avatar} alt="Amanda's Avatar" />
			</div>
			<div className='about-content'>
				<h1>{about.name}</h1>
				<p className='pitch'>{about.pitch}</p>
				<div className='bio'>
					<h2 className='noto-sans'>About</h2>
					<p className={toggle ? 'line-clamp' : ''} id='clamp'>
						{about.bio}
					</p>
					<button onClick={setToggleClass} className={`${!toggle ? 'hidden' : ''} btn-cta`}>
						Show more
					</button>
				</div>
			</div>
			<div className='divider'></div>
			<div className='about-social'>
				<h2 className='noto-sans'>Social</h2>
				<ul className='about-icons'>
					<li className='list-item'>
						<a href='https://www.linkedin.com/in/amanda-mitzian/' target='_blank' rel='noreferrer'>
							<img src={linkedin} alt='' />
							<span>LinkedIn</span>
						</a>
					</li>
					<li className='list-item'>
						<a href='https://github.com/aobarbieri' target='_blank' rel='noreferrer'>
							<img src={github} alt='' />
							<span>GitHub</span>
						</a>
					</li>
					<li className='list-item'>
						<a href='' target='_blank' rel='noreferrer'>
							<img src={email} alt='' />
							<span>Email</span>
							{/* fix this */}
						</a>
					</li>
				</ul>
			</div>
		</section>
	)
}

About.propTypes = {
	about: PropTypes.string.isRequired, //  'about' prop is required and should be a string
}

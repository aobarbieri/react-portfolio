import { useState, useEffect } from 'react'
import avatar from '/assets/avatar.svg'
import github from '/assets/brands/github.svg'
import linkedin from '/assets/brands/linkedin.svg'
import email from '/assets/icons/email.svg'

export default function About() {
	const [about, setAbout] = useState(null)
	const [toggle, setToggle] = useState(true)

	const getAboutData = async () => {
		const res = await fetch('./about.json')
		const data = await res.json()
		setAbout(data)
	}
	useEffect(() => {
		getAboutData()
	}, [])

	const setToggleClass = () => {
		setToggle(false)
	}

	const loaded = () => (
		<section className='about'>
			<div className='avatar'>
				<img src={avatar} alt="Amanda's Avatar" />
			</div>
			<div className='about-content'>
				<h1>{about.name}</h1>
				<p className='pitch'>{about.pitch}</p>
				<div className='bio'>
					<h2>About</h2>
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
				<h2>Social</h2>
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
						</a>
					</li>
				</ul>
			</div>
		</section>
	)
	return about ? loaded() : ''
}

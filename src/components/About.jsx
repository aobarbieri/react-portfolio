import { useState, useEffect } from 'react'
import avatar from '../assets/avatar.svg'
import bg from '../assets/avatar-bg.png'

export default function About() {
	const [about, setAbout] = useState(null)

	const getAboutData = async () => {
		const res = await fetch('./about.json')
		const data = await res.json()
		setAbout(data)
	}
	useEffect(() => {
		getAboutData()
	}, [])

	const loaded = () => (
		<section className='about'>
			<div className='about-content'>
				<h1 className=''>Hi, I&apos;m {about.name}</h1>
				<p>{about.bio}</p>
			</div>

			<div className='wrapper'>
				<img className='avatar' src={avatar} alt="Amanda's Avatar" />
				<img className='avatar-bg' src={bg} />
			</div>
		</section>
	)

	return about ? loaded() : <h1>Loading...</h1>
}

import { useState, useEffect } from 'react'
import avatar from '../assets/avatar.svg'

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
			<h1 className=''>Hi, I&apos;m {about.name}</h1>
			<p>{about.bio}</p>
			<img className='' src={avatar} alt="Amanda's Avatar" />
		</section>
	)

	return about ? loaded() : <h1>Loading...</h1>
}

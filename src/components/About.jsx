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
			<div className='about-content'>
				<h1 className=''>Hi, I&apos;m {about.name}</h1>
				<p>{about.bio}</p>
			</div>

			<div className='wrapper'>
				<img className='avatar' src={avatar} alt="Amanda's Avatar" />

				<svg className='avatar-bg' width='100%' height='206' viewBox='0 0 100% 206' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M0 0C552.627 26.641 867.838 27.1125 1440 0V174.873C879.307 202.275 563.903 201.137 0 174.873V0Z' fill='#99D3BE' />
					<path d='M0 157C563.257 181.964 876.893 180.619 1440 157V185C876.419 212.031 560.397 211.374 0 185V157Z' fill='#629A86' />
				</svg>
			</div>
		</section>
	)

	return about ? loaded() : <h1>Loading...</h1>
}

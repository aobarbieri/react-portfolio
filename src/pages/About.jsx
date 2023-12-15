import { useState, useEffect } from 'react'

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
		<section className='home'>
			{/* Avatar */}
			<section className='flex mb-16'>
				<img className='mr-6' src={about.headshot} alt="Amanda's Avatar" />
				<div className='self-center'>
					<h1 className='font-semibold text-4xl'>{about.name}</h1>
					<h2 className='text-sm leading-6 font-light'>Full Stack Developer</h2>
					<h2 className='text-sm leading-6 font-light'>
						{about.email}
					</h2>
				</div>
			</section>

			{/* About */}
			<section className='mb-4'>
				<div className='md:text-lg'>
					<p>{about.bio}</p>
				</div>
			</section>
		</section>
	)

	return about ? loaded() : <h1>Loading...</h1>
}

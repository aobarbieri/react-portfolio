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
				<img className='mr-6 avatar' src={about.headshot} alt="Amanda's Avatar" />
				<div className='self-center'>
					<h1 className='font-semibold text-4xl'>{about.name}</h1>
					<h2 className='text-sm leading-6 font-light'>Full Stack Developer</h2>
					<h2 className='text-sm leading-6 font-light'>{about.email}</h2>
				</div>
			</section>

			{/* About */}
			<section className='mb-4'>
				<div className='md:text-lg'>
					<p>{about.bio}</p>
				</div>
			</section>

			{/* Links */}
			<article className='flex flex-nowrap my-12 lg:mb-0 text-sm md:text-lg'>
				<a href='https://drive.google.com/file/d/1GiCiuwG9234fkXM11Suym41aN3mSfgE1/view?usp=sharing' target='_blank' rel='noreferrer'>
					<i className='fa-solid fa-graduation-cap mr-1.5 link-icon rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'></i>
					Resume
				</a>
				<a className='mx-5' href='https://github.com/aobarbieri' target='_blank' rel='noreferrer'>
					<i className='fa-solid fa-rocket mr-1.5 link-icon rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'></i>{' '}
					GitHub
				</a>

				<a href='https://www.linkedin.com/in/amanda-mitzian/' target='_blank' rel='noreferrer'>
					<i className='fa-solid fa-comment-dots mr-1.5 link-icon rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'></i>
					LinkedIn
				</a>
			</article>
		</section>
	)

	return about ? loaded() : <h1>Loading...</h1>
}

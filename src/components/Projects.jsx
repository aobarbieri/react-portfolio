import { useState, useEffect } from 'react'
import github from '../assets/brands/github.svg'

import html from '../assets/brands/html.svg'
import css from '../assets/brands/css.svg'
import sass from '../assets/brands/sass.svg'
import tailwind from '../assets/brands/tailwind.svg'
import js from '../assets/brands/js.svg'
import express from '../assets/brands/express.svg'
import nextJs from '../assets/brands/next-js.svg'
import react from '../assets/brands/react.svg'
import mongodb from '../assets/brands/mongodb.svg'
import mongoose from '../assets/brands/mongoose.svg'
import postgre from '../assets/brands/postgre.svg'

export default function Projects() {
	const [projects, setProjects] = useState(null)

	const getProjectData = async () => {
		const res = await fetch('./projects.json')
		const data = await res.json()
		setProjects(data)
	}

	useEffect(() => {
		getProjectData()
	}, [])

	document.title = 'Amanda Mitzian - Projects'

	const loaded = () => {
		return (
			<section className='projects'>
				<h2>Projects</h2>

				{projects.map((project) => (
					<section className='projects-wrapper' key={project.id}>
						<h3>{project.name}</h3>
						<img src={project.image} alt={project.name} />
						<div>
							<p className='description'>{project.description}</p>
							<div className='tech'>
								<p>Built with:</p>

								{project.tech.html ? <img className='tech-icon' src={html} alt='HTML' title='HTML' /> : ''}

								{project.tech.css ? <img className='tech-icon' src={css} alt='CSS' title='CSS' /> : ''}

								{project.tech.sass ? <img className='tech-icon' src={sass} alt='SASS' title='SASS' /> : ''}

								{project.tech.tailwind ? <img className='tech-icon' src={tailwind} alt='Tailwind' title='Tailwind' /> : ''}

								{project.tech.js ? <img className='tech-icon' src={js} alt='JavaScript' title='JavaScript' /> : ''}

								{project.tech.express ? <img className='tech-icon' src={express} alt='Express.js' title='Express.js' /> : ''}

								{project.tech.nextJs ? <img className='tech-icon' src={nextJs} alt='Next.js' title='Next.js' /> : ''}

								{project.tech.react ? <img className='tech-icon' src={react} alt='React' title='React' /> : ''}

								{project.tech.mongodb ? <img className='tech-icon' src={mongodb} alt='Mongo DB' title='Mongo DB' /> : ''}

								{project.tech.mongoose ? <img className='tech-icon' src={mongoose} alt='Mongoose' title='Mongoose' /> : ''}

								{project.tech.postgre ? <img className='tech-icon' src={postgre} alt='PostgreSQL' title='PostgreSQL' /> : ''}
							</div>

							<a className='btn-cta' href={project.live} target='_blank' rel='noreferrer'>
								Try it out
							</a>
							<a className='btn-link-cta' href={project.git} target='_blank' rel='noreferrer'>
								<img src={github} alt='GitHub' />
								View on GitHub
							</a>
						</div>
					</section>
				))}
			</section>
		)
	}

	return projects ? loaded() : ''
}

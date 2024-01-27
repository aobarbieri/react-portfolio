import { useState, useEffect } from 'react'
import github from '../assets/brands/github.svg'

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
					<div className='projects-wrapper' key={project.id}>
						<h3>{project.name}</h3>
						<img src={project.image} alt={project.name} />
						<p className='description'>{project.description}</p>
						<p className='tech'>Built with:</p>

						<a className='btn-cta' href={project.live} target='_blank' rel='noreferrer'>
							Try it out
						</a>
						<a className='btn-link-cta' href={project.git} target='_blank' rel='noreferrer'>
							<img src={github} alt='GitHub' />
							View on GitHub
						</a>
					</div>
				))}
			</section>
		)
	}

	return projects ? loaded() : <h1>Loading...</h1>
}

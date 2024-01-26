import { useState, useEffect } from 'react'

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
			<section className=''>
				<h2>Projects</h2>
				{projects.map((project) => (
					<div className='' key={project.id}>
						<img className='' src={project.image} alt={project.name} />
						<h2 className=''>{project.name}</h2>
						<p className=''>{project.description}</p>
						<p>Built with:</p>

						<a href={project.git} target='_blank' className='' rel='noreferrer'>
							GitHub
						</a>
						<a href={project.live} target='_blank' className='' rel='noreferrer'>
							View
						</a>
					</div>
				))}
			</section>
		)
	}

	return projects ? loaded() : <h1>Loading...</h1>
}

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
		return projects.map((project) => (
			<section key={project.id} className='container__projects my-16 lg:flex justify-between'>
				<div className='lg:basis-1/2'>
					<h2 className='pr-4 text-3xl font-semibold inline'>{project.name}</h2>

					<p className='my-6'>{project.description}</p>
					<div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-3'>
						<a href={project.git} target='_blank' className='btn-bg py-2 px-10 text-sm flex' rel='noreferrer'>
							<i className='fab self-center fa-github-alt text-lg mr-1.5'></i> GitHub
						</a>
						<a href={project.live} target='_blank' className='btn-bg py-2 px-10 text-sm lg:justify-self-start' rel='noreferrer'>
							View
						</a>
					</div>
				</div>
				<img className='mocks mt-9 lg:mt-0' src={project.image} alt={project.name} />
			</section>
		))
	}

	return projects ? loaded() : <h1>Loading...</h1>
}

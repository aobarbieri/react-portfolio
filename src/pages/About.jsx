import avatar from '../assets/avatar.png'

export default function About() {
	return (
		<section className='home'>
			{/* Avatar */}
			<section className='headline load-hidden flex mb-16'>
				<img className='avatar border rounded-full mr-6' src={avatar} alt="Amanda's Avatar" />
				<div className='self-center'>
					<h1 className='font-semibold text-4xl'>Amanda</h1>
					<h2 className='text-sm leading-6 font-light'>Full Stack Developer</h2>
				</div>
			</section>

			{/* About */}
			<article className='headline load-hidden mb-4'>
				<div className='md:text-lg'>
					<p>
						I'm a self taught developer learning software engineering by doing. I enjoy working with challenging layouts and building web pages that
						are user-friendly, simple and delightful.
					</p>
				</div>
			</article>

			{/* Buttons */}
			<article className='about punchline load-hidden flex flex-nowrap my-12 lg:mb-0 text-sm md:text-lg'>
				<a className='' href='resume'>
					<i className='fa-solid fa-graduation-cap mr-1.5 link-icon rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'></i>{' '}
					Resume
				</a>
				<a className='workLink mx-5' href='#work'>
					<i className='fa-solid fa-rocket mr-1.5 link-icon rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'></i>{' '}
					Work
				</a>

				<a className='contactLink' href='#contact'>
					<i className='fa-solid fa-comment-dots mr-1.5 link-icon rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'></i>{' '}
					Contact
				</a>
			</article>
		</section>
	)
}

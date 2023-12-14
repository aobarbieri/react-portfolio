
import mixItUp from '../assets/mix-it-up-mock.png'
import studiOn from '../assets/studion-mock.png'
import allMetro from '../assets/all-metro-mock.png'
import flickbase from '../assets/flickbase-mock.png'
import quoteGenerator from '../assets/quote-mock.png'

export default function Projects() {
    return (
		<article className='container'>
			<article>
				<section className='headline load-hidden pb-12 font-bold'>
					<h1 className='text-2xl pb-4'>Work</h1>
					<h2 className='text-4xl'>A Selection Of Stuff I've Built</h2>
				</section>

				{/* Mix It Up */}
				<section className='headline load-hidden container__projects lg:flex justify-between'>
					<div className='lg:basis-1/2'>
						<h2 className='pr-4 text-3xl font-semibold inline'>Mix It Up</h2>
						<div className='inline'>
							<i className='devicon-react-original'></i>
							<i className='devicon-tailwindcss-plain'></i>
							<i className='devicon-javascript-plain'></i>
						</div>
						<p className='mb-10 mt-4 lg:mt-6'>
							<span className='text-sm font-light'>In production</span>
							<br />
							Have you wondered which Cocktails you could make with the ingredients you have in your kitchen? Mix It Up is coming to help you with
							that!
						</p>
						<div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-3'>
							<a href='https://github.com/aobarbieri/mix-it-up-react' target='_blank' className='btn-bg py-2 px-10 text-sm' rel='noreferrer'>
								<i className='fab fa-github-alt text-lg mr-1.5'></i> GitHub
							</a>
						</div>
					</div>
					<img className='mocks mt-9 lg:mt-0' src={mixItUp} alt='Mix It Up project' />
				</section>

				{/* StudiOn */}
				<section className='headline load-hidden container__projects my-10 lg:flex justify-between'>
					<div className='lg:basis-1/2 lg:text-right'>
						<h2 className='pr-4 text-3xl font-semibold inline'>Studion</h2>
						<div className='inline'>
							<i className='devicon-html5-plain'></i>
							<i className='devicon-css3-plain'></i>
							<i className='devicon-javascript-plain'></i>
						</div>
						<p className='mb-10 mt-4 lg:mt-6 work--description'>
							Create a good impression with your audience as you roll out new products, introduce campaigns on business events. Studion Events
							invites businesses and non-profit firms to entrust their upcoming events with them. Focusing on the most essential elements of the
							website, it has a minimalist design yet has compelling content.
						</p>
						<div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-end gap-2 lg:gap-0'>
							<a href='https://github.com/aobarbieri/studion' target='_blank' className='btn-bg py-2 px-10 text-sm' rel='noreferrer'>
								<i className='fab fa-github-alt text-lg mr-1.5'></i> GitHub
							</a>
							<a
								href='https://studion-events.netlify.app/'
								className='btn-bg py-2 px-8 text-sm lg:justify-self-center'
								target='_blank'
								rel='noreferrer'>
								Click to View
							</a>
						</div>
					</div>
					<img className='mocks lg:order-first mt-9 lg:mt-0' src={studiOn} alt='studion events project' />
				</section>

				{/* All Metro */}
				<section className='headline load-hidden container__projects lg:flex justify-between'>
					<div className='lg:basis-1/2'>
						<h2 className='pr-4 text-3xl font-semibold inline'>ALL METRO</h2>
						<div className='inline'>
							<i className='devicon-html5-plain'></i>
							<i className='devicon-css3-plain'></i>
							<i className='devicon-javascript-plain'></i>
						</div>
						<p className='mb-10 mt-4 lg:mt-6'>
							ALL METRO is a small business located in Piracicaba - Brazil. They offer training, consulting, calibration, maintenance, and sales
							of residential and commercial scales. The website was developed to make a strong and lasting impression towards current and future
							clients.
						</p>
						<div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-2 lg:gap-0'>
							<a href='https://github.com/aobarbieri/allmetro' target='_blank' rel='noreferrer' className='btn-bg py-2 px-10 text-sm'>
								<i className='fab fa-github-alt text-lg mr-1.5'></i> GitHub
							</a>
							<a href='https://allmetro.netlify.app/' className='btn-bg py-2 px-8 text-sm lg:justify-self-start' target='_blank' rel='noreferrer'>
								Click to View
							</a>
						</div>
					</div>
					<img className='mocks mt-9 lg:mt-0' src={allMetro} alt='Mix It Up project avatar' />
				</section>

				{/* Flickbase */}
				<section className='headline load-hidden container__projects my-10 lg:flex justify-between'>
					<div className='lg:basis-1/2 lg:text-right'>
						<h2 className='pr-4 text-3xl font-semibold inline'>Flickbase</h2>
						<div className='inline'>
							<i className='devicon-react-original'></i>
							<i className='devicon-tailwindcss-plain'></i>
							<i className='devicon-typescript-plain'></i>
						</div>
						<p className='mb-10 mt-4 lg:mt-6'>
							Flickbase simulates a streaming website. It offers a library with the most popular filmes and television series using The Movie DB
							API. Project focused on layout and styles.
						</p>
						<div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-end gap-2 lg:gap-0'>
							<a href='https://github.com/aobarbieri/flick-base' target='_blank' rel='noreferrer' className='btn-bg py-2 px-10 text-sm'>
								<i className='fab fa-github-alt text-lg mr-1.5'></i> GitHub
							</a>
							<a
								href='https://flick-base.netlify.app/'
								className='btn-bg py-2 px-8 text-sm lg:justify-self-center'
								target='_blank'
								rel='noreferrer'>
								Click to View
							</a>
						</div>
					</div>
					<img className='mocks lg:order-first mt-9 lg:mt-0 -z-10' src={flickbase} alt='flickbase project avatar' />
				</section>

				{/* Quote Generator */}
				<section className='headline load-hidden container__projects mb-10 lg:mb-28 lg:flex justify-between'>
					<div className='lg:basis-1/2'>
						<h2 className='pr-4 text-3xl font-semibold inline'>Quote Generator</h2>
						<div className='md:inline'>
							<i className='devicon-html5-plain'></i>
							<i className='devicon-css3-plain'></i>
							<i className='devicon-javascript-plain'></i>
						</div>
						<p className='mb-10 mt-4 lg:mt-6'>
							Motivational quotes to enlighten your day. Find the right quotes for you or others, simply copy or tweet the best ones.
						</p>
						<div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-2 lg:gap-0'>
							<a href='https://github.com/aobarbieri/quote-generator' target='_blank' rel='noreferrer' className='btn-bg py-2 px-10 text-sm'>
								<i className='fab fa-github-alt text-lg mr-1.5'></i> GitHub
							</a>
							<a
								href='https://aobarbieri.github.io/quote-generator/'
								target='_blank'
								rel='noreferrer'
								className='btn-bg py-2 px-8 text-sm lg:justify-self-start'>
								Click to View
							</a>
						</div>
					</div>
					<img className='mocks mt-9 lg:mt-0' src={quoteGenerator} alt='Quote Generator project avatar' />
				</section>
			</article>
		</article>
	)
}
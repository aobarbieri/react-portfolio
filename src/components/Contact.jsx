import github from '../assets/brands/github.svg'
import linkedin from '../assets/brands/linkedin.svg'
// import email from '../assets/icons/email.svg'
import resume from '../assets/icons/resume.svg'

export default function Contact() {
	return (
		<aside className='floating-list'>
			<ul>
				<li className='list-item'>
					<a href='https://www.linkedin.com/in/amanda-mitzian/' target='_blank' rel='noreferrer'>
						LinkedIn
						<img src={linkedin} alt='' />
					</a>
				</li>
				<li className='list-item'>
					<a href='https://github.com/aobarbieri' target='_blank' rel='noreferrer'>
						GitHub
						<img src={github} alt='' />
					</a>
				</li>
				{/* <li className='list-item'>
					<a href='' target='_blank' rel='noreferrer'>
						Email
						<img src={email} alt='' />
					</a>
				</li> */}
				<li className='list-item'>
					<a href='https://drive.google.com/file/d/1zhjTywdUQ9HmZyuEaP6MT1hUastRY-n9/view?usp=sharing' target='_blank' rel='noreferrer'>
						Resume
						<img src={resume} alt='' />
					</a>
				</li>
			</ul>
		</aside>
	)
}

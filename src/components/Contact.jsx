import github from '../assets/brands/github.svg'
import linkedin from '../assets/brands/linkedin.svg'
import email from '../assets/icons/email.svg'
import resume from '../assets/icons/resume.svg'

export default function Contact() {
	return (
		<aside className='floating-list'>
			<ul>
				<li className='list-item'>
					<a href=''>
						LinkedIn
						<img src={linkedin} alt='' />
					</a>
				</li>
				<li className='list-item'>
					<a href=''>
						GitHub
						<img src={github} alt='' />
					</a>
				</li>
				<li className='list-item'>
					<a href=''>
						Email
						<img src={email} alt='' />
					</a>
				</li>
				<li className='list-item'>
					<a href=''>
						Resume
						<img src={resume} alt='' />
					</a>
				</li>
			</ul>
		</aside>
	)
}

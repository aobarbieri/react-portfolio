import Bio from './Bio'
import Nav from './Nav'

export default function Footer({ about }) {
	return (
		<footer className='footer'>
			<Bio about={about} />
			<Nav />
			<section className='signature'>
				<p className='noto-sans'>2021-2024 | Coded with 💜 by Amanda Mitzian</p>
			</section>
		</footer>
	)
}

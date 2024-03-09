import Bio from './Bio'

export default function Footer({ about }) {
	return (
		<footer className='footer'>
			<Bio about={about} />
			<section className='signature'>
				<p className='noto-sans'>2021-2024 | Coded with 💜 by Amanda Mitzian</p>
			</section>
		</footer>
	)
}

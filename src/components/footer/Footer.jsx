import PropTypes from 'prop-types'
import Bio from './Bio'
import Nav from '../header/Nav'

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

Footer.propTypes = {
	about: PropTypes.string.isRequired, //  'about' prop is required and should be a string
}

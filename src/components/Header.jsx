import PropTypes from 'prop-types'
import About from './About'
import Nav from './Nav'

export default function Header({ about }) {
	return (
		<header>
			<Nav />
			<About about={about} />
		</header>
	)
}

Header.propTypes = {
	about: PropTypes.string.isRequired, //  'about' prop is required and should be a string
}

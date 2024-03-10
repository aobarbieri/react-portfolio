import PropTypes from 'prop-types'
export default function Bio({ about }) {
	return (
		<section className='bio bio-mobile'>
			<h2 className='noto-sans'>About</h2>
			<p>{about.bio}</p>
		</section>
	)
}

Bio.propTypes = {
	about: PropTypes.string.isRequired, //  'about' prop is required and should be a string
}

export default function Bio({ about }) {
	return (
		<div className='bio bio-mobile'>
			<h2 className='noto-sans'>About</h2>
			<p>{about.bio}</p>
		</div>
	)
}

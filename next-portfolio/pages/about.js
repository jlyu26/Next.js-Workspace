import Link from 'next/link';

export default () => (
	<div>
		<h1>About</h1>
		<Link href="/">
			<a>Home</a>
		</Link>
		<p>Full-Stack Developer</p>
		<img src="/static/JavaScript-logo.png" alt="JavaScipt" height="200px" />		
	</div>
);
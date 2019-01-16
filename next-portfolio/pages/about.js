import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
	<Layout title="About">
		<Link href="/">
			<a>Home</a>
		</Link>
		<p>Full-Stack Developer</p>
		<img src="/static/JavaScript-logo.png" alt="JavaScipt" height="200px" />		
	</Layout>
);
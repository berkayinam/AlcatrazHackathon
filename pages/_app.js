import '../styles/globals.css'
import Navbar from '../components/homepage/navbar';
import Footer from '../components/homepage/footer';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

	if (Component.getLayout)
	{
		return  Component.getLayout(<Component {...pageProps} />);
	}

	return (
	<div className=' overflow-visible'>
		<Navbar></Navbar>
		<Component {...pageProps} />
		<Footer></Footer>
		<Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
		<Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
	</div>
);
}

export default MyApp

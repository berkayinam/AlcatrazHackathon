import Link from "next/link";
import Script from 'next/script';
import Navbar from "../components/navbar";
import Herofull from "../components/heroFull";
import Footer from "../components/footer";
import FirstInfo from "../components/firstinfo";
import TwoInfo from "../components/twoinfo";
import "../styles/Home.module.css";

export default function App() {
	return (
	<div className='w-full'>
		<Navbar></Navbar>
		<Herofull></Herofull>
		<FirstInfo></FirstInfo>
		<TwoInfo></TwoInfo>
		<Footer></Footer>
		<Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
		<Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
	</div>
	);
}
import Image from "next/image";
import Community from "../../img/community.png";

const TwoInfo = () => {
	return (
		<section className="text-gray-600 body-font bg-[#e6dbff]">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Başarılı bir topluluğun sırrı
						<br className="hidden lg:inline-block"/>
					</h1>
					<p>Topluluk liderleri ne ister? Topluluk, iletişim ve etkinliklerin bir arada olmasını.</p>
					<br/>
					<ul className="commmunity-mark">
						<li>Eventbrite etkinlik organizasyonu için araçlar sağlar</li>
						<li>Meetup ise etkinlik organizasyonu ve topluluk oluşturmak için araçlar sağlar.</li>
						<li>Facebook'ta sosyalleşebilir ve insanlarla iletişime geçebilirsin</li>
					</ul>
					<br/>
					<p>Ama yalnızca Kommunity'de bu özelliklerin mükemmel bir karışımını, dünyanın her yerindeki toplulukların ihtiyaçlarına uyacak şekilde bulabilirsiniz.</p>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<Image className="object-cover object-center rounded" alt="hero" src={Community}></Image>
				</div>
			</div>
		</section>
	);
}

export default TwoInfo;
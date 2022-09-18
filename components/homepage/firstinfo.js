import Image from "next/image";
import WorkUI from "../../img/work.png";

const FirstInfo = () => {

	return (
		<section className="text-gray-600 body-font" id="FirstInfo">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					<Image className="object-cover object-center rounded" alt="hero" src={WorkUI}></Image>
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Neden bizle çalışmalısınız ?
						<br className="hidden lg:inline-block" />
					</h1>
					<ol className="correct-mark">
						<li className="mb-2">Haberleşmek, öğrenmek ve birlikte çalışmak için topluluğunuzu tek bir yerde toplayın.</li>
						<li className="mb-2">Tüm organizasyon sürecinizi tek bir platformdan yürütün.</li>
						<li className="mb-2">Otomatik hatırlatıcılarla topluluk üyelerinizin etkinliklerinize yeniden katılımını artırın</li>
						<li className="mb-2">Alcatraz'ın  uluslarası kullanıcıları ile etkinliklerinizin kapsamını artırın</li>
					</ol>
				</div>
			</div>
		</section>
	);
}

export default FirstInfo;
import Link from "next/link";

const CommunityForm = () => {
	return (
		<div className="w-11/12 min-h-fit flex flex-col justify-center items-center gap-2">
			<span className="text-xl font-bold text-white">Topluluk Kurucusu</span>
			<input type="text" className="w-1/3 h-12 rounded-sm p-2" placeholder="Topluluk Kurucusu"></input>
			<span className="text-xl font-bold text-white">Topluluk Adı</span>
			<input type="text" className="w-1/3 h-12 rounded-sm p-2" placeholder="Topluluk Adı"></input>
			<span className="text-xl font-bold text-white">Topluluk Kategorisi Seçin</span>
				<select value="typeMain" className="w-1/3 h-12 rounded text-center">
					<option value="type" disabled selected>Topluluk Kategorisi Seçin</option>
					<option value="type">Hackathon</option>
					<option value="type">Eğitim</option>
					<option value="type">Buluşma</option>
				</select>
			<span className="text-xl font-bold text-white">Topluluk Yeri</span>
			<input type="text" className="w-1/3 h-12 rounded-sm p-2" placeholder="Topluluk Yeri"></input>
			<span className="text-xl font-bold text-white">Toplanma Zamanı</span>
			<input type="date" className="w-1/3 h-12 rounded-sm p-2 text-center" placeholder="Toplanma Zamanı"></input>
			<input type="time" className="w-1/3 h-12 rounded-sm p-2 text-center" placeholder="Toplanma Zamanı"></input>
		</div>
	);
}

const CreateCommunity = () => {
	return (
		<div className="w-full min-h-screen bg-primary flex flex-col justify-center items-center">
			<CommunityForm></CommunityForm>
			<div className="tooltip tooltip-bottom w-1/3 pt-2 mt-2" data-tip="Yukarıdaki kutucukları doldurduktan sonra topluluk oluşturabilirsiniz :)">
				<Link href="/">
					<button className="btn glass w-11/12 text-xl font-bold">Topluluğu Kur</button>
				</Link>
			</div>
		</div>
	);
}

export default CreateCommunity;
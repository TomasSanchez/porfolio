import Profile from "../components/Profile";
import Main from "../components/Main";

export default function Home() {
	return (
		<div className='flex flex-col md:flex-row bg-gray-800 overflow-hidden pt-4'>
			<div className=' md:border-r-2 border-green-700 flex-1 max-w-md justify-center md:block m-auto md:mt-1'>
				<Profile />
			</div>
			<div className='flex-1  flex flex-col '>
				<Main
					url={"www.salame.com"}
					img={"/testing_img.png"}
					description={"some website using this and that"}
				/>
				<Main
					url={"www.salame.com"}
					img={"https://dummyimage.com/1900x1000/000000/fff.png"}
					description={"some website using this and that"}
				/>
			</div>
			<div className='flex-1 flex flex-col '>
				<Main
					url={"www.salame.com"}
					img={"https://dummyimage.com/1900x1000/000000/fff.png"}
					description={"some website using this and that"}
				/>
				<Main
					url={"www.salame.com"}
					img={"https://dummyimage.com/1900x1000/000000/fff.png"}
					description={"some website using this and that"}
				/>
			</div>
			<div className='flex-1 flex flex-col'></div>
		</div>
	);
}

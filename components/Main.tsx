type propType = {
	url: string;
	description: string;
	img: any;
};

const Main = ({ url, description, img }: propType) => {
	return (
		<div className='w-4/5  m-auto bg-gray-900 rounded-md shadow-lg mt-6 mb-10 border border-green-700 h-auto z-30'>
			<div className='object-cover object-center inline-block '>
				<img className='z-10 rounded-lg' src={img} />
			</div>
			<div className='px-2'>
				<a href={url} className='text-gray-300 text-xs'>
					{url}
				</a>
			</div>
			<div className='border-t border-gray-500 text-gray-300 p-2'>
				{description}
			</div>
		</div>
	);
};

export default Main;

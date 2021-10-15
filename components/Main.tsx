type propType = {
	url: string;
	url_as: string;
	description: string;
	img: any;
};

const Main = ({ url, description, img, url_as }: propType) => {
	return (
		<div className='w-4/5  m-auto bg-gray-900 rounded-md shadow-lg mt-6 mb-10 border border-green-900 h-auto z-30'>
			<div className='object-cover object-center inline-block '>
				<img className='z-10 rounded-lg' src={img} />
			</div>
			<div className='px-2 flex '>
				<a href={url} target='_blank' className='text-gray-300 text-xs hover:underline flex'>
					{url_as}

					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-3 w-3 text-gray-200'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
						<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
					</svg>
				</a>
			</div>
			<div className='border-t border-gray-500 text-gray-300 p-2'>{description}</div>
		</div>
	);
};

export default Main;

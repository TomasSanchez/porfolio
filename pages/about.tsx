const About = () => {
	return (
		<div>
			<section className='text-gray-400 bg-gray-900 body-font border-b-2 border-green-700'>
				<div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
					<img
						className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded h-auto border border-black shadow-lg'
						src='/big_me.jpeg'
					/>
					<div className='text-center lg:w-2/3 w-full'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
							Tomas Solano Sancez
						</h1>
						<p className='leading-relaxed mb-8'>
							Systems Engineering student, Backend developer,
							Studying Data Science on my free time. Looking for a
							remote backend developer job. Junior/mid. Born and
							currently living in Argentina, German citizenship,
							looking forward to moving abroad
						</p>
						<div className='flex justify-center'></div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;

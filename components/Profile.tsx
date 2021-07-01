const Profile = () => {
	return (
		<div>
			<div className='text-center w-4/5  m-auto bg-gray-900 rounded-md shadow-lg mt-6 p-3 mb-10'>
				<img
					alt='testimonial'
					className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-green-600 bg-gray-100'
					src='/small_me.jpg'
				/>
				<p className='leading-relaxed text-gray-200 px-3'>
					Systems Engineering student, Backend developer, Studying
					Data Science on my free time. Looking for a remote backend
					developer job.
				</p>
				<span className='inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4' />
				<h2 className='text-gray-200 font-medium title-font tracking-wider text-sm'>
					Tomas Solano Sanchez
				</h2>
				<p className='text-gray-500'>Backend Developer</p>
			</div>
		</div>
	);
};

export default Profile;

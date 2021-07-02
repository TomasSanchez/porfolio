const Navbar = () => {
	return (
		<div>
			<header className='text-gray-400 bg-gray-900 body-font'>
				<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
					<a
						href='/'
						className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
						<span className=' text-xl'>Home</span>
					</a>
					<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
						<a href='/about' className='mr-7 hover:text-white'>
							About Me
						</a>
						<a href='/contact' className='mr-5 hover:text-white'>
							Contact Me
						</a>
					</nav>
				</div>
			</header>
			<div className='bg-gray-900'>
				<div className='border-b-2 border-green-700 w-10/12 relative m-auto'></div>
				{/* <div className='border-b-2 border-gray-500 w-10/12 relative m-auto'></div> */}
			</div>
		</div>
	);
};

export default Navbar;

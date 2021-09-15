import Head from "next/head";

const About = () => {
	return (
		<div>
			<Head>
				<title>About</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<section className='text-gray-400 bg-gray-800 body-font'>
				<div className='container mx-auto flex px-5 py-5 pt-14 items-center justify-center flex-col'>
					<img
						className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded h-auto border border-black shadow-lg'
						src='/big_me.jpeg'
					/>
					<div className='text-center lg:w-2/3 w-full'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
							Tomas Solano Sanchez
						</h1>
						<p className='leading-relaxed mb-8 text-gray-300'>
							Hi! Im Tomas Sanchez, currently based in Argentina. Im a Systems Engineer student, currently
							working as a freelancer on my free time building full stack web applications. I've been
							programming for the past 2 years with a focus on python and backend development and for the
							past year integrating frontend technologies. As a freelancer I have the ability not only to
							code but to be in a group project, focus on all the areas of a full stack application such
							as Ci/Cd, Cloud Technologies, backend, frontend, UX/UI design and to be focused on what the
							client wants. Although im currently working on my own, im looking for a full-time remote
							job.
						</p>
						<div className='flex justify-center'></div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;

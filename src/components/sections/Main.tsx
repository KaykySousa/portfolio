export default function Main() {
	return (
		<section className="relative flex min-h-screen w-full snap-start items-start justify-start bg-neutral-50 p-6 sm:p-20 lg:h-screen">
			<div className="flex h-full w-full max-w-2xl flex-col items-start justify-start lg:max-w-none lg:flex-row lg:items-center lg:justify-end">
				<div className="left-20 right-28 justify-self-start lg:absolute lg:mb-10">
					<h1 className="text-6xl font-bold min-[288px]:text-7xl min-[384px]:text-8xl lg:text-[160px] min-[1200px]:text-[192px]">
						KAYKY <br />
						DE SOUSA
					</h1>
					<p className="mt-2 mb-2 text-2xl font-bold min-[384px]:text-4xl lg:hidden">
						DESENVOLVEDOR FRONT-END JR.
					</p>
				</div>
				<img
					src="/profile_picture.jpg"
					alt="Foto de perfil de Kayky de Sousa"
					className="relative mt-4 block aspect-square w-full bg-neutral-400 object-cover object-[100%_30%] shadow-[8px_8px_0px_0px_#171717] grayscale lg:m-0 lg:h-full lg:max-h-[36rem] lg:w-auto min-[1200px]:max-h-[42rem]"
				/>
				<div className="absolute left-20 right-28 hidden justify-self-start lg:block">
					<h1 className="text-stroke justify-self-start text-6xl font-bold text-transparent min-[288px]:text-7xl min-[384px]:text-8xl lg:text-[160px] min-[1200px]:text-[192px]">
						KAYKY <br />
						DE SOUSA
					</h1>
					<p className="ml-2.5 text-4xl font-bold">FRONT-END JR.</p>
				</div>
			</div>
		</section>
	)
}

import ProfilePicture from "@/assets/profile_picture.jpg"
import Image from "next/image"

export default function Main() {
	return (
		<section className="relative flex min-h-screen w-full snap-start items-start justify-start bg-neutral-50 p-8 sm:p-16 md:h-screen">
			<div className="flex h-full w-full max-w-2xl flex-col items-start justify-start md:max-w-none md:flex-row md:items-center md:justify-end">
				<div className="left-16 right-28 justify-self-start md:absolute md:mb-10">
					<h1 className="text-[clamp(60px,20vw,96px)] font-bold leading-none sm:text-[clamp(60px,15vw,192px)]">
						KAYKY <br />
						DE SOUSA
					</h1>
					<p className="mt-2 mb-2 text-2xl font-bold min-[384px]:text-4xl md:hidden">
						DESENVOLVEDOR FRONT-END JR.
					</p>
				</div>
				<Image
					src={ProfilePicture}
					alt="Foto de perfil de Kayky de Sousa"
					className="relative mt-4 block aspect-square w-full border border-neutral-900 bg-neutral-400 object-cover shadow-[8px_8px_0px_0px_#171717] md:m-0 md:w-1/2 md:max-w-[36rem]"
					priority
				/>
				<div className="absolute left-16 right-28 hidden justify-self-start md:block">
					<h1 className="text-stroke justify-self-start text-[clamp(60px,20vw,96px)] font-bold leading-none text-transparent sm:text-[clamp(60px,15vw,192px)]">
						KAYKY <br />
						DE SOUSA
					</h1>
					<p className="ml-2.5 text-4xl font-bold">FRONT-END JR.</p>
				</div>
			</div>
		</section>
	)
}

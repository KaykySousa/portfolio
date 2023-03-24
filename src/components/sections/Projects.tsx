import ProjectImage1 from "@/assets/30-projects-30-days.png"
import Link from "next/link"
import ProjectCard from "../ProjectCard"

export default function Projects() {
	return (
		<section className="relative flex w-full snap-start flex-col items-start justify-start bg-neutral-50 p-6 text-neutral-900 sm:p-20 lg:min-h-screen">
			<h1 className="text-5xl font-bold min-[384px]:text-6xl lg:text-7xl">
				PROJETOS
			</h1>
			<div className="mt-6 grid w-full flex-1 grid-cols-1 gap-2 md:grid-cols-2">
				<ProjectCard
					title="Desafio - 30 Projetos em 30 Dias"
					image={ProjectImage1}
					projectUrl="https://day30-all-projects-kaykysousa.vercel.app/"
					description="Desafio pessoal com o objetivo de criar um novo projeto
						web a cada dia, por um período de 30 dias consecutivos.
						Durante esse desafio, compartilhei diariamente meu
						progresso no LinkedIn, a fim de documentar todo o meu
						processo de aprendizado."
				/>
			</div>
			<Link
				href="https://github.com/KaykySousa"
				className="mt-6 text-xl text-neutral-900 underline hover:bg-neutral-900 hover:text-white"
			>
				MAIS PROJETOS NO GITHUB
			</Link>
		</section>
	)
}

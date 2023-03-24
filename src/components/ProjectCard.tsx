import ButtonLink from "./ButtonLink"

interface ProjectCardProps {
	image: string
	title: string
	description: string
	projectUrl: string
	githubUrl?: string
}

export default function ProjectCard({
	image,
	description,
	projectUrl,
	title,
	githubUrl,
}: ProjectCardProps) {
	return (
		<div className="group relative aspect-square w-full border border-neutral-900 bg-neutral-300">
			<img
				src={image}
				alt={title}
				className="h-full w-full object-cover transition group-hover:grayscale"
			/>
			<div className="absolute top-0 left-0 flex h-full w-full flex-col items-start justify-between bg-neutral-900 bg-opacity-90 p-6 text-white opacity-0 transition group-hover:opacity-100 lg:p-12">
				<div>
					<p className="mb-4 text-xl font-bold uppercase lg:text-3xl">
						{title}
					</p>
					<p className="lg:text-lg">{description}</p>
				</div>
				<ButtonLink
					href={projectUrl}
					className="!bg-white !text-neutral-900 hover:!bg-neutral-900 hover:!text-white"
				>
					VER PROJETO
				</ButtonLink>
			</div>
		</div>
	)
}

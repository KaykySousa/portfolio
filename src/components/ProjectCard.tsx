import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
	image: StaticImageData
	title: string
	description: string
	projectUrl: string
	githubUrl?: string
	tags?: string[]
}

export default function ProjectCard({
	image,
	description,
	projectUrl,
	title,
	githubUrl,
	tags,
}: ProjectCardProps) {
	return (
		<Link href={projectUrl} className="group w-full max-w-sm">
			<Image
				src={image}
				alt={title}
				className="aspect-square w-full border border-neutral-900 object-cover grayscale transition group-hover:grayscale-0"
			/>
			<div className="mt-2">
				<h1 className="text-lg font-semibold">{title}</h1>
				<p className="mt-1 text-justify">{description}</p>
				<div className="mt-2 flex w-full flex-wrap gap-1">
					{tags?.map((tag, index) => (
						<div
							key={index}
							className="rounded bg-neutral-900 px-2 py-0.5 text-sm text-white"
						>
							{tag}
						</div>
					))}
				</div>
			</div>
		</Link>
	)
}

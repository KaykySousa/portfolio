import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Contact() {
	return (
		<section className="relative flex w-full snap-start flex-col items-start justify-start bg-white p-8 text-neutral-900 sm:p-16">
			<p className="text-xl text-neutral-900">GOSTOU DO MEU PERFIL?</p>
			<h1 className="text-5xl font-bold min-[384px]:text-6xl lg:text-7xl">
				ENTRE EM CONTATO!
			</h1>
			<div className="mt-8 flex gap-x-4">
				<a href="https://www.linkedin.com/in/kayky-de-sousa/">
					<FontAwesomeIcon
						icon={faLinkedin}
						className="h-10 w-10 hover:opacity-80"
					/>
				</a>
				<a href="https://github.com/KaykySousa">
					<FontAwesomeIcon
						icon={faGithub}
						className="h-10 w-10 hover:opacity-80"
					/>
				</a>
				<a href="mailto:kayky.sousa.dev@gmail.com">
					<FontAwesomeIcon
						icon={faEnvelope}
						className="h-10 w-10 hover:opacity-80"
					/>
				</a>
			</div>
			<p className="mb-8 mt-2 text-xl text-neutral-900">
				kayky.sousa.dev@gmail.com
			</p>
			<a
				href="/kayky_de_sousa_curriculo.pdf"
				download
				className="flex h-12 items-center justify-center border border-neutral-900 bg-neutral-900 px-3 text-center font-bold text-white hover:bg-white hover:text-neutral-900"
			>
				BAIXE MEU CURRÍCULO
			</a>
		</section>
	)
}

export default function About() {
	return (
		<section
			className="relative flex w-full snap-start flex-col items-start justify-start bg-white p-8 text-neutral-900 sm:p-16"
			id="about"
		>
			<h1 className="text-5xl font-bold min-[384px]:text-6xl lg:text-7xl">
				SOBRE
			</h1>
			<div className="mt-8 mb-8 flex max-w-3xl flex-1 flex-col justify-center gap-y-4 text-justify lg:text-lg">
				<p>
					Programador, entusiasta da tecnologia, em constante
					aprendizado e buscando uma primeira oportunidade
					profissional.
				</p>
				<p>
					Iniciei meus estudos de programação através do curso de
					Python 3 do canal Curso em Vídeo no Youtube. Lá, adquiri
					conhecimentos fundamentais como lógica de programação e
					estruturas de controle, além de desenvolver mais de 100
					exercícios em Python.
				</p>
				<p>
					Buscando me aperfeiçoar, matriculei-me no curso técnico
					integrado ao ensino médio em Desenvolvimento de Sistemas na
					ETEC da Zona Leste. Durante esse período, me interessei pelo
					desenvolvimento web e aprofundei meus estudos em outros
					frameworks e bibliotecas Javascript, como React, Next.js e
					Typescript.
				</p>
				<p>
					Atualmente, estou cursando o primeiro semestre em
					Desenvolvimento de Software Multiplataforma pela FATEC da
					Zona Leste, no qual obtive a primeira colocação. Estou
					ansioso para iniciar minha carreira na área como programador
					júnior ou estagiário e estou em busca da minha primeira
					oportunidade.
				</p>
			</div>
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

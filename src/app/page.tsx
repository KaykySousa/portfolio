import Footer from "@/components/Footer"
import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Main from "@/components/sections/Main"
import Projects from "@/components/sections/Projects"

export default function Home() {
	return (
		<div className="min-h-screen w-full bg-neutral-900 text-neutral-900">
			<div className="my-0 mx-auto flex w-full max-w-[1366px] flex-col divide-y divide-neutral-200">
				<Main />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
	)
}

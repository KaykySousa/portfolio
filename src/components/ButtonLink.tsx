import type { LinkProps } from "next/link"
import Link from "next/link"
import { AnchorHTMLAttributes } from "react"

interface ButtonLinkProps
	extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
		LinkProps {}

export default function ButtonLink({ className, ...props }: ButtonLinkProps) {
	return (
		<Link
			className={`flex h-12 items-center justify-center border border-neutral-900 bg-neutral-900 px-3 text-center font-bold text-white hover:bg-white hover:text-neutral-900 ${className}`}
			{...props}
		/>
	)
}

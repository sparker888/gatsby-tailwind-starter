import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
	return (
		<main className="bg-neutral-300">
			<title>Home Page</title>
			<section className="text-center">
				<div className="py-12 font-sans font-black text-7xl tracking-tighter">
					Gravital Digital Branding
				</div>

				{/* Divider */}
				<div className="relative">
					<div
						className="absolute inset-0 flex items-center"
						aria-hidden="true"
					>
						<div className="w-full border-t border-neutral-500" />
					</div>
					<div className="relative flex justify-center">
						<span className="py-3 px-3 bg-white text-lg font-medium text-neutral-900">
							FONTS
						</span>
					</div>
				</div>

				<div className="mb-10 pb-6 bg-white overflow-hidden shadow rounded-lg divide-y divide-neutral-200">
					<div className="px-4 py-5 sm:px-6">
						<h1 className="font-sans font-medium text-4xl">
							Sans: Interstate medium 4xl h1
						</h1>
					</div>
					<div className="px-4 py-5 sm:p-6">
						<div className="font-sans font-medium text-base">
							font-sans font-medium (500) text-base
						</div>
						<div className="font-sans font-bold text-2xl">
							font-sans font-bold (700) text-2xl
						</div>
						<div className="font-sans font-black text-5xl tracking-tight">
							font-sans font-black (900) text-5xl tracking-tight
						</div>
					</div>
				</div>

				<div className="mb-10 pb-6 bg-white overflow-hidden shadow rounded-lg divide-y divide-neutral-200">
					<div className="px-4 py-5 sm:px-6">
						<h1 className="font-serif font-bold text-4xl">
							Serif: FF Meta Serif Pro bold 4xl h1
						</h1>
					</div>
					<div className="px-4 py-5 sm:p-6">
						<div className="font-serif font-book text-base">
							font-serif font-book (500) text-base
						</div>
						<div className="font-serif font-book text-base italic">
							font-serif font-book (500) text-2xl italic
						</div>
						<div className="font-serif font-bold text-5xl tracking-tight italic">
							font-serif font-bold (700) text-5xl tracking-tight italic
						</div>
					</div>
				</div>

				<div className="mb-10 pb-6 bg-white overflow-hidden shadow rounded-lg divide-y divide-neutral-200">
					<div className="px-4 py-5 sm:px-6">
						<h1 className="font-Container font-bold text-4xl">
							Body: Open Sans bold (700) 4xl h1
						</h1>
					</div>
					<div className="px-4 py-5 sm:p-6">
						<div className="font-body font-normal text-base">
							font-body font-normal (400) text-base
						</div>
						<div className="font-body font-normal text-base italic">
							font-body font-normal (400) text-2xl italic
						</div>
						<div className="font-body font-bold text-5xl tracking-tight italic">
							font-body font-bold (700) text-5xl tracking-tight italic
						</div>
					</div>
				</div>

				<div className="mb-10 pb-6 bg-white overflow-hidden shadow rounded-lg divide-y divide-neutral-200">
					<div className="px-4 py-5 sm:px-6">
						<h1 className="font-mono font-regular text-4xl">
							Mono: Regular (400) 4xl h1
						</h1>
					</div>
					<div className="px-4 py-5 sm:p-6">
						<div className="font-mono font-regular text-base tracking-tight">
							font-mono font-regular (400) text-base tracking-tight
						</div>
					</div>
				</div>
			</section>

			{/* Divider */}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-neutral-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-neutral-900">
						FONTS
					</span>
				</div>
			</div>

			{/* Color Palette */}
			<section className="text-center">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-neutral-500">
					<p>1. Full-width on mobile, constrained with padded content above.</p>
					<div className="w-16 shrink-0">
						<div className="h-10 flex flex-col justify-center">
							<div className="text-sm font-semibold text-slate-900 dark:text-slate-200">
								Neutral
							</div>
						</div>
					</div>
					<div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
						<div className="space-y-1.5">
							<div className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10 bg-neutral-50"></div>
							<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div className="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">
									50
								</div>
								<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
									#FAFAFA
								</div>
							</div>
						</div>
						<div className="space-y-1.5">
							<div className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10 bg-neutral-100"></div>
							<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div className="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">
									100
								</div>
								<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
									#F5F5F5
								</div>
							</div>
						</div>
						<div className="space-y-1.5">
							<div className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10 bg-neutral-200"></div>
							<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div className="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">
									200
								</div>
								<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
									#E5E5E5
								</div>
							</div>
						</div>
						<div className="space-y-1.5">
							<div className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10 bg-neutral-300"></div>
							<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div className="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">
									300
								</div>
								<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
									#D4D4D4
								</div>
							</div>
						</div>
						<div className="space-y-1.5">
							<div className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10 bg-neutral-400"></div>
							<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div className="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">
									400
								</div>
								<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
									#A3A3A3
								</div>
							</div>
						</div>
						<div className="space-y-1.5">
							<div className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10 bg-neutral-500"></div>
							<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div className="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">
									500
								</div>
								<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
									#737373
								</div>
							</div>
						</div>
						<div className="space-y-1.5">
							<div className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10 bg-neutral-600"></div>
							<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div className="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">
									600
								</div>
								<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
									#525252
								</div>
							</div>
						</div>
						<div className="space-y-1.5">
							<div className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10 bg-neutral-700"></div>
							<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div className="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">
									700
								</div>
								<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
									#404040
								</div>
							</div>
						</div>
						<div className="space-y-1.5">
							<div className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10 bg-neutral-800"></div>
							<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div className="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">
									800
								</div>
								<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
									#262626
								</div>
							</div>
						</div>
						<div className="space-y-1.5">
							<div className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10 bg-neutral-900"></div>
							<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
								<div className="w-6 font-medium text-slate-900 2xl:w-full dark:text-white">
									900
								</div>
								<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
									#171717
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default IndexPage

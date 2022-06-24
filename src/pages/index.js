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

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
				</div>
			</section>

			{/* Subtitle */}
			<div className="py-12 text-center font-sans font-black text-5xl tracking-tighter">
				Color Palette
			</div>

			{/* Divider */}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-neutral-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-neutral-900">
						Neutrals
					</span>
				</div>
			</div>

			{/* Color Palette - Neutrals */}
			<div className="bg-white max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
				<p>
					1. Full-width on mobile, constrained with padded content above.
					"max-w-7xl mx-auto sm:px-6 lg:px-8" NOTE: Added py-12
				</p>
				<div className="w-16 shrink-0">
					<div className="h-10 flex flex-col justify-center">
						<div className="text-sm font-semibold text-slate-900 ">Neutral</div>
					</div>
				</div>
				<div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-neutral-50"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								50
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FAFAFA</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-neutral-100"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								100
							</div>
							<div className="text-slate-500 font-mono lowercase ">#F5F5F5</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-neutral-200"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								200
							</div>
							<div className="text-slate-500 font-mono lowercase ">#E5E5E5</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-neutral-300"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								300
							</div>
							<div className="text-slate-500 font-mono lowercase ">#D4D4D4</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-neutral-400"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								400
							</div>
							<div className="text-slate-500 font-mono lowercase ">#A3A3A3</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-neutral-500"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								500
							</div>
							<div className="text-slate-500 font-mono lowercase ">#737373</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-neutral-600"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								600
							</div>
							<div className="text-slate-500 font-mono lowercase ">#525252</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-neutral-700"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								700
							</div>
							<div className="text-slate-500 font-mono lowercase ">#404040</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-neutral-800"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								800
							</div>
							<div className="text-slate-500 font-mono lowercase ">#262626</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-neutral-900"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								900
							</div>
							<div className="text-slate-500 font-mono lowercase ">#171717</div>
						</div>
					</div>
				</div>
			</div>

			{/* Divider - Primary Yellows*/}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-neutral-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-neutral-900">
						Yellows
					</span>
				</div>
			</div>

			{/* Color Palette - Primary Yellows */}
			<div className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<p>
					2. Full-width on mobile, constrained to breakpoint with padded content
					above. This keeps everything to the same width at each breakpoint vs.
					smoothly increasing and decreasing the size of elements enclosed by
					the container. "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" NOTE: Added
					pt-12
				</p>
				<div className="w-16 shrink-0">
					<div className="h-10 flex flex-col justify-center">
						<div className="text-sm font-semibold text-slate-900">Yellow</div>
					</div>
				</div>
				<div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-yellow-50"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								50
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FEFCE8</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-yellow-100"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								100
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FEF9C3</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-yellow-200"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								200
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FEF08A</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-yellow-300"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								300
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FDE047</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-yellow-400"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								400
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FACC15</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-yellow-500"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full text-white">
								500
							</div>
							<div className="text-slate-500 font-mono lowercase ">#EAB308</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-yellow-600"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								600
							</div>
							<div className="text-slate-500 font-mono lowercase ">#CA8A04</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-yellow-700"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								700
							</div>
							<div className="text-slate-500 font-mono lowercase ">#A16207</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-yellow-800"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								800
							</div>
							<div className="text-slate-500 font-mono lowercase ">#854D0E</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-yellow-900"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								900
							</div>
							<div className="text-slate-500 font-mono lowercase ">#713F12</div>
						</div>
					</div>
				</div>
			</div>

			{/* Divider - Primary Sky Blues*/}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-neutral-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-neutral-900">
						Blues
					</span>
				</div>
			</div>

			{/* Color Palette - Primary Sky Blues */}
			<div className="bg-white container mx-auto py-12 sm:px-6 lg:px-8">
				<p>
					3. Full-width on mobile, constrained to breakpoint with padded content
					above mobile. "container mx-auto sm:px-6 lg:px-8" NOTE: Added py-12
				</p>
				<div className="w-16 shrink-0">
					<div className="h-10 flex flex-col justify-center">
						<div className="text-sm font-semibold text-slate-900">Yellow</div>
					</div>
				</div>
				<div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-sky-50"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								50
							</div>
							<div className="text-slate-500 font-mono lowercase ">#F0F9FF</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-sky-100"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								100
							</div>
							<div className="text-slate-500 font-mono lowercase ">#E0F2FE</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-sky-200"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								200
							</div>
							<div className="text-slate-500 font-mono lowercase ">#BAE6FD</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-sky-300"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								300
							</div>
							<div className="text-slate-500 font-mono lowercase ">#7DD3FC</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-sky-400"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								400
							</div>
							<div className="text-slate-500 font-mono lowercase ">#38BDF8</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-sky-500"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full text-white">
								500
							</div>
							<div className="text-slate-500 font-mono lowercase ">#0EA5E9</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-sky-600"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								600
							</div>
							<div className="text-slate-500 font-mono lowercase ">#0284C7</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-sky-700"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								700
							</div>
							<div className="text-slate-500 font-mono lowercase ">#0369A1</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-sky-800"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								800
							</div>
							<div className="text-slate-500 font-mono lowercase ">#075985</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-sky-900"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								900
							</div>
							<div className="text-slate-500 font-mono lowercase ">#0C4A6E</div>
						</div>
					</div>
				</div>
			</div>

			{/* Divider - Supporting Reds*/}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-neutral-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-neutral-900">
						Reds
					</span>
				</div>
			</div>

			{/* Color Palette - Supporting Reds */}
			<div className="bg-white container mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<p>
					4. Constrained to breakpoint with padded content. See notes above. Just adds padding to mobile. "container mx-auto px-4 sm:px-6 lg:px-8" NOTE: Added py-12
				</p>
				<div className="w-16 shrink-0">
					<div className="h-10 flex flex-col justify-center">
						<div className="text-sm font-semibold text-slate-900">Reds</div>
					</div>
				</div>
				<div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-red-50"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								50
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FEF2F2</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-red-100"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								100
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FEE2E2</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-red-200"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								200
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FECACA</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-red-300"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								300
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FCA5A5</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-red-400"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								400
							</div>
							<div className="text-slate-500 font-mono lowercase ">#F87171</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-red-500"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full text-white">
								500
							</div>
							<div className="text-slate-500 font-mono lowercase ">#EF4444</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-red-600"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								600
							</div>
							<div className="text-slate-500 font-mono lowercase ">#DC2626</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-red-700"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								700
							</div>
							<div className="text-slate-500 font-mono lowercase ">#B91C1C</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-red-800"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								800
							</div>
							<div className="text-slate-500 font-mono lowercase ">#991B1B</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-red-900"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								900
							</div>
							<div className="text-slate-500 font-mono lowercase ">#7F1D1D</div>
						</div>
					</div>
				</div>
			</div>

			{/* Divider - Supporting Teals*/}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-neutral-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-neutral-900">
						Teals
					</span>
				</div>
			</div>

			{/* Color Palette - Supporting Teals */}
			<div className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<p>
					5. Narrow constrained with padded content. Not a container, so goes down to mobile smoothly from what looks like iPad size "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" NOTE: Added py-12
				</p>
				<div className="w-16 shrink-0">
					<div className="h-10 flex flex-col justify-center">
						<div className="text-sm font-semibold text-slate-900">Teals</div>
					</div>
				</div>
				<div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-teal-50"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								50
							</div>
							<div className="text-slate-500 font-mono lowercase ">#F0FDFA</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-teal-100"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								100
							</div>
							<div className="text-slate-500 font-mono lowercase ">#CCFBF1</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-teal-200"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								200
							</div>
							<div className="text-slate-500 font-mono lowercase ">#99F6E4</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-teal-300"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								300
							</div>
							<div className="text-slate-500 font-mono lowercase ">#5EEAD4</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-teal-400"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								400
							</div>
							<div className="text-slate-500 font-mono lowercase ">#2DD4BF</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-teal-500"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full text-white">
								500
							</div>
							<div className="text-slate-500 font-mono lowercase ">#14B8A6</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-teal-600"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								600
							</div>
							<div className="text-slate-500 font-mono lowercase ">#0D9488</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-teal-700"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								700
							</div>
							<div className="text-slate-500 font-mono lowercase ">#0F766E</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-teal-800"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								800
							</div>
							<div className="text-slate-500 font-mono lowercase ">#115E59</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-teal-900"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								900
							</div>
							<div className="text-slate-500 font-mono lowercase ">#134E4A</div>
						</div>
					</div>
				</div>
			</div>

		</main>
	)
}

export default IndexPage

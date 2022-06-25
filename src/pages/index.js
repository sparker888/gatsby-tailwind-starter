import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
	return (
		<main className="bg-slate-300">
			<title>Home Page</title>
			<Header className="z-index-10"/>
			<section className="text-center">
				<div>
					<img
						className="mx-auto pt-12 max-h-60"
						src="https://res.cloudinary.com/gravital-digital/image/upload/v1654201551/gravital-icon-transparent_gjk8o7.png"
						alt="Gravital Digital Logo"
					/>
				</div>
				<div className="pt-6 pb-12 font-sans font-black text-7xl tracking-tighter">
					<span className="text-blue-500">Gravital</span>{" "}
					<span className="text-orange-500">Digital</span>{" "}
					<span className="text-blue-500">Branding</span>
				</div>

				{/* Divider */}
				<div className="relative">
					<div
						className="absolute inset-0 flex items-center"
						aria-hidden="true"
					>
						<div className="w-full border-t border-slate-500" />
					</div>
					<div className="relative flex justify-center">
						<span className="py-3 px-3 bg-white text-lg font-medium text-slate-900">
							FONTS
						</span>
					</div>
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-10 pb-6 bg-white overflow-hidden shadow rounded-lg divide-y divide-neutral-200">
						<div className="px-4 py-5 sm:px-6">
							<h1 className="font-sans font-medium text-4xl">
								<span className="font-bold underline underline-offset-4">
									Sans
								</span>
								: Interstate medium 4xl h1
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
								<span className="font-bold underline underline-offset-4">
									Serif
								</span>
								: FF Meta Serif Pro bold 4xl h1
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
								<span className="font-bold underline underline-offset-4">
									Body
								</span>
								: Open Sans bold (700) 4xl h1
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
								<span className="font-bold underline underline-offset-4">
									Mono
								</span>
								: Regular (400) 4xl h1
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
					<div className="w-full border-t border-slate-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-slate-900">
						Neutrals
					</span>
				</div>
			</div>

			{/* Color Palette - Slate */}
			<div className="bg-white max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
				<p className="text-center mx-24 font-serif text-2xl">
					These are the colors you will use the most and will make up the
					majority of your UI. Use them for most of your text, backgrounds, and
					borders, as well as for things like secondary buttons and links.
				</p>

				<div className="shrink-0">
					<div className="h-10 flex flex-col justify-center">
						<div className="text-xl font-semibold text-slate-900">
							Slate-[number]
						</div>
					</div>
				</div>
				<div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-slate-50"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								50
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FAFAFA</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-slate-100"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								100
							</div>
							<div className="text-slate-500 font-mono lowercase ">#F5F5F5</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-slate-200"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								200
							</div>
							<div className="text-slate-500 font-mono lowercase ">#E5E5E5</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-slate-300"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								300
							</div>
							<div className="text-slate-500 font-mono lowercase ">#D4D4D4</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-slate-400"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								400
							</div>
							<div className="text-slate-500 font-mono lowercase ">#A3A3A3</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-slate-500"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								500
							</div>
							<div className="text-slate-500 font-mono lowercase ">#737373</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-slate-600"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								600
							</div>
							<div className="text-slate-500 font-mono lowercase ">#525252</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-slate-700"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								700
							</div>
							<div className="text-slate-500 font-mono lowercase ">#404040</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-slate-800"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								800
							</div>
							<div className="text-slate-500 font-mono lowercase ">#262626</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-slate-900"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								900
							</div>
							<div className="text-slate-500 font-mono lowercase ">#171717</div>
						</div>
					</div>
				</div>
				<p className="text-center mt-12 mx-48 font-mono text-xl">
					<span className="font-bold underline underline-offset-4">
						Section Container 1.
					</span>{" "}
					Full-width on mobile, constrained with padded content above.
					"max-w-7xl mx-auto sm:px-6 lg:px-8" NOTE: Added py-12'
				</p>
			</div>

			{/* Divider - Primary Amber*/}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-slate-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-slate-900">
						Amber Primary
					</span>
				</div>
			</div>

			{/* Color Palette - Primary Amber */}
			<div className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<p className="text-center mx-24 font-serif text-2xl">
					These are the splashes of color that should appear the most in your
					UI, and are the ones that determine the overall "look" of the site.
					Use these for things like primary actions, links, navigation items,
					icons, accent borders, or text you want to emphasize.
				</p>

				<div className="shrink-0">
					<div className="h-10 flex flex-col justify-center">
						<div className="text-xl font-semibold text-slate-900">
							Amber-[number]
						</div>
					</div>
				</div>
				<div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-amber-50"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								50
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FEFCE8</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-amber-100"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								100
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FEF9C3</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-amber-200"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								200
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FEF08A</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-amber-300"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								300
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FDE047</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-amber-400"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								400
							</div>
							<div className="text-slate-500 font-mono lowercase ">#FACC15</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-amber-500"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full text-white">
								500
							</div>
							<div className="text-slate-500 font-mono lowercase ">#EAB308</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-amber-600"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								600
							</div>
							<div className="text-slate-500 font-mono lowercase ">#CA8A04</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-amber-700"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								700
							</div>
							<div className="text-slate-500 font-mono lowercase ">#A16207</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-amber-800"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								800
							</div>
							<div className="text-slate-500 font-mono lowercase ">#854D0E</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-amber-900"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								900
							</div>
							<div className="text-slate-500 font-mono lowercase ">#713F12</div>
						</div>
					</div>
				</div>
				<p className="text-center mt-12 mx-48 font-mono text-xl">
					<span className="font-bold underline underline-offset-4">
						Section Container 2.
					</span>{" "}
					Constrained with padded content. "max-w-7xl mx-auto px-4 sm:px-6
					lg:px-8" NOTE: Added py-12.
				</p>
			</div>

			{/* Divider - Primary Sky Blues*/}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-slate-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-slate-900">
						Blue Primary
					</span>
				</div>
			</div>

			{/* Color Palette - Primary Sky Blues */}
			<div className="bg-white container mx-auto py-12 sm:px-6 lg:px-8">
				<p className="text-center mx-24 font-serif text-2xl">
					These are the splashes of color that should appear the most in your
					UI, and are the ones that determine the overall "look" of the site.
					Use these for things like primary actions, links, navigation items,
					icons, accent borders, or text you want to emphasize.
				</p>

				<div className="w-16 shrink-0">
					<div className="h-10 flex flex-col justify-center">
						<div className="text-xl font-semibold text-slate-900">
							Sky-[number]
						</div>
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
				<p className="text-center mt-12 mx-48 font-mono text-xl">
					<span className="font-bold underline underline-offset-4">
						Section Container 3.
					</span>{" "}
					Full-width on mobile, constrained to breakpoint with padded content
					above mobile. This keeps everything to the same width at each
					breakpoint vs. smoothly increasing and decreasing the size of elements
					enclosed by the container. "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
					NOTE: Added pt-12.
				</p>
			</div>

			{/* Divider - Supporting Reds */}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-slate-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-slate-900">
						Supporting Reds
					</span>
				</div>
			</div>

			{/* Color Palette - Supporting Reds */}
			<div className="bg-white container mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<p className="text-center mx-24 font-serif text-2xl">
					These colors should be used fairly conservatively throughout your UI
					to avoid overpowering your primary colors. Use them when you need an
					element to stand out, or to reinforce things like error states or
					positive trends with the appropriate semantic color.
				</p>
				<div className="shrink-0">
					<div className="h-10 flex flex-col justify-center">
						<div className="text-xl font-semibold text-slate-900">
							Red-[number]
						</div>
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
				<p className="text-center mt-12 mx-48 font-mono text-xl">
					<span className="font-bold underline underline-offset-4">
						Section Container 4.
					</span>{" "}
					Constrained to breakpoint with padded content. See notes above. Just
					adds padding to mobile. "container mx-auto px-4 sm:px-6 lg:px-8" NOTE:
					Added py-12
				</p>
			</div>

			{/* Divider - Supporting Purples*/}
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="w-full border-t border-slate-500" />
				</div>
				<div className="relative flex justify-center">
					<span className="py-3 px-3 bg-white text-lg font-medium text-slate-900">
						Supporting Purples
					</span>
				</div>
			</div>

			{/* Color Palette - Supporting Purples */}
			<div className="bg-white max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<p className="text-center mx-24 font-serif text-2xl">
					These colors should be used fairly conservatively throughout your UI
					to avoid overpowering your primary colors. Use them when you need an
					element to stand out, or to reinforce things like error states or
					positive trends with the appropriate semantic color.
				</p>

				<div className="shrink-0">
					<div className="h-10 flex flex-col justify-center">
						<div className="text-xl font-semibold text-slate-900">
							Purple-[number]
						</div>
					</div>
				</div>
				<div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-purple-50"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								50
							</div>
							<div className="text-slate-500 font-mono lowercase ">#F0FDFA</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-purple-100"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								100
							</div>
							<div className="text-slate-500 font-mono lowercase ">#CCFBF1</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-purple-200"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								200
							</div>
							<div className="text-slate-500 font-mono lowercase ">#99F6E4</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-purple-300"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								300
							</div>
							<div className="text-slate-500 font-mono lowercase ">#5EEAD4</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-purple-400"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								400
							</div>
							<div className="text-slate-500 font-mono lowercase ">#2DD4BF</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-purple-500"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full text-white">
								500
							</div>
							<div className="text-slate-500 font-mono lowercase ">#14B8A6</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-purple-600"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								600
							</div>
							<div className="text-slate-500 font-mono lowercase ">#0D9488</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-purple-700"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								700
							</div>
							<div className="text-slate-500 font-mono lowercase ">#0F766E</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-purple-800"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								800
							</div>
							<div className="text-slate-500 font-mono lowercase ">#115E59</div>
						</div>
					</div>
					<div className="space-y-1.5">
						<div className="h-10 w-full rounded bg-purple-900"></div>
						<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
							<div className="w-6 font-medium text-slate-900 2xl:w-full ">
								900
							</div>
							<div className="text-slate-500 font-mono lowercase ">#134E4A</div>
						</div>
					</div>
				</div>
				<p className="text-center mt-12 mx-48 font-mono text-xl">
					<span className="font-bold underline underline-offset-4">
						Section Container 5.
					</span>{" "}
					Narrow constrained with padded content. Not a container, so goes down
					to mobile smoothly from what looks like iPad size "max-w-7xl mx-auto
					px-4 sm:px-6 lg:px-8" NOTE: Added py-12
				</p>
			</div>
			<Footer />
		</main>
	)
}

export default IndexPage

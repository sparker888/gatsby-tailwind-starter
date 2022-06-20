import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
	return (
		<main>
			<title>Home Page</title>
			<body>

			<div className="mt-12 font-sans font-black text-7xl tracking-tighter">
        Gravital Fonts
				</div>

        <h1 className="mt-12 font-sans font-medium text-4xl">Sans: Interstate medium 4xl h1</h1>
				<div className="font-sans font-medium text-base">
        font-sans font-medium (500) text-base
				</div>
				<div className="font-sans font-bold text-2xl">
        font-sans font-bold (700) text-2xl
				</div>
				<div className="font-sans font-black text-5xl tracking-tight">
        font-sans font-black (900) text-5xl tracking-tight
				</div>

        <h1 className="mt-12 font-serif font-bold text-4xl">Serif: FF Meta Serif Pro bold 4xl h1</h1>
				<div className="font-serif font-book text-base">
        font-serif font-book (500) text-base
				</div>
				<div className="font-serif font-book text-base italic">
        font-serif font-book (500) text-2xl italic
				</div>
				<div className="font-serif font-bold text-5xl tracking-tight italic">
        font-serif font-bold (700) text-5xl tracking-tight italic
				</div>

				<h1 className="mt-12 font-body font-bold text-4xl">Body: Open Sans bold (700) 4xl h1</h1>
				<div className="font-body font-normal text-base">
        font-body font-normal (400) text-base
				</div>
				<div className="font-body font-normal text-base italic">
        font-body font-normal (400) text-2xl italic
				</div>
				<div className="font-body font-bold text-5xl tracking-tight italic">
        font-body font-bold (700) text-5xl tracking-tight italic
				</div>

				<h1 className="mt-12 font-mono font-regular text-4xl">Mono: Regular (400) 4xl h1</h1>
				<div className="font-mono font-regular text-base tracking-tight">
        font-mono font-regular (400) text-base tracking-tight
				</div>
			</body>
		</main>
	)
}

export default IndexPage

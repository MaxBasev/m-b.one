import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Public Offer Agreement - Max Basev Software Development Services',
	description: 'Public offer agreement for software development services provided by PE Basev Maksim Igorevich. Terms and conditions for custom software development, web applications, and technical consulting.',
	keywords: 'public offer agreement, software development services, contract terms, Max Basev, PE Basev, programming services, Kyrgyzstan',
	authors: [{ name: 'Max Basev', url: 'https://m-b.one' }],
	creator: 'Max Basev',
	publisher: 'Max Basev',
	robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

	// OpenGraph
	openGraph: {
		type: 'website',
		locale: 'en_US',
		alternateLocale: ['ru_RU'],
		url: 'https://m-b.one/en/offer',
		siteName: 'Max Basev Portfolio',
		title: 'Public Offer Agreement - Software Development Services',
		description: 'Terms and conditions for software development services provided by PE Basev Maksim Igorevich.',
		images: [
			{
				url: 'https://m-b.one/img/profile-img.webp',
				width: 400,
				height: 400,
				alt: 'Max Basev - Software Developer',
			},
		],
	},

	// Twitter
	twitter: {
		card: 'summary_large_image',
		title: 'Public Offer Agreement - Max Basev',
		description: 'Terms and conditions for software development services.',
		images: ['https://m-b.one/img/profile-img.webp'],
		creator: '@maxbasev',
	},

	// Alternate URLs
	alternates: {
		canonical: 'https://m-b.one/en/offer',
		languages: {
			'en': 'https://m-b.one/en/offer',
			'ru': 'https://m-b.one/ru/offer',
			'x-default': 'https://m-b.one/en/offer',
		},
	},

	// Other
	category: 'business',
	classification: 'Legal Document',
}

export default function EnglishOfferLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
} 
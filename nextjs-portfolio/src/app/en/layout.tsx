import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Max Basev - Software Developer | Custom Development Services',
	description: 'Professional software developer Max Basev (PE Basev Maksim Igorevich) based in Bishkek, Kyrgyzstan. Custom software development, web applications, optimization, and technical consulting services.',
	keywords: 'software developer, web development, programming, custom software, Kyrgyzstan, Bishkek, Max Basev, Maksim Basev, freelance developer, PE Basev',
	authors: [{ name: 'Max Basev', url: 'https://m-b.one' }],
	creator: 'Max Basev',
	publisher: 'Max Basev',
	robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

	// OpenGraph
	openGraph: {
		type: 'website',
		locale: 'en_US',
		alternateLocale: ['ru_RU'],
		url: 'https://m-b.one/en',
		siteName: 'Max Basev Portfolio',
		title: 'Max Basev - Professional Software Developer',
		description: 'Custom software development, web applications, and technical consulting services. Based in Bishkek, Kyrgyzstan.',
		images: [
			{
				url: 'https://m-b.one/img/profile-img.jpg',
				width: 400,
				height: 400,
				alt: 'Max Basev - Software Developer',
			},
		],
	},

	// Twitter
	twitter: {
		card: 'summary_large_image',
		title: 'Max Basev - Software Developer',
		description: 'Professional software developer offering custom software solutions and web development services.',
		images: ['https://m-b.one/img/profile-img.jpg'],
		creator: '@maxbasev',
	},

	// Alternate URLs
	alternates: {
		canonical: 'https://m-b.one/en',
		languages: {
			'en': 'https://m-b.one/en',
			'ru': 'https://m-b.one/ru',
			'x-default': 'https://m-b.one/en',
		},
	},

	// Other
	category: 'technology',
	classification: 'Business',
}

export default function EnglishLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
} 
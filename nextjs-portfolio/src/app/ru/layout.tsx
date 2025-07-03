import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Максим Басев - Программист | Разработка ПО на заказ',
	description: 'Профессиональный программист Максим Басев (ИП Басев Максим Игоревич) из Бишкека, Кыргызстан. Разработка программного обеспечения на заказ, веб-приложения, оптимизация и техническое консультирование.',
	keywords: 'программист, разработка ПО, программирование, заказная разработка, Кыргызстан, Бишкек, Максим Басев, фрилансер программист, ИП Басев',
	authors: [{ name: 'Максим Басев', url: 'https://m-b.one' }],
	creator: 'Максим Басев',
	publisher: 'Максим Басев',
	robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

	// OpenGraph
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		alternateLocale: ['en_US'],
		url: 'https://m-b.one/ru',
		siteName: 'Максим Басев - Портфолио',
		title: 'Максим Басев - Профессиональный Программист',
		description: 'Разработка программного обеспечения на заказ, веб-приложения и техническое консультирование. Базируется в Бишкеке, Кыргызстан.',
		images: [
			{
				url: 'https://m-b.one/img/profile-img.jpg',
				width: 400,
				height: 400,
				alt: 'Максим Басев - Программист',
			},
		],
	},

	// Twitter
	twitter: {
		card: 'summary_large_image',
		title: 'Максим Басев - Программист',
		description: 'Профессиональный программист, предлагающий решения для разработки ПО и веб-приложений.',
		images: ['https://m-b.one/img/profile-img.jpg'],
		creator: '@maxbasev',
	},

	// Alternate URLs
	alternates: {
		canonical: 'https://m-b.one/ru',
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

export default function RussianLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
} 
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Договор оферты - Максим Басев Разработка ПО',
	description: 'Договор публичной оферты на услуги разработки программного обеспечения от ИП Басев Максим Игоревич. Условия и правила заказной разработки ПО, веб-приложений и технического консультирования.',
	keywords: 'договор оферты, услуги разработки ПО, условия договора, Максим Басев, ИП Басев, программные услуги, Кыргызстан',
	authors: [{ name: 'Максим Басев', url: 'https://m-b.one' }],
	creator: 'Максим Басев',
	publisher: 'Максим Басев',
	robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

	// OpenGraph
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		alternateLocale: ['en_US'],
		url: 'https://m-b.one/ru/offer',
		siteName: 'Максим Басев - Портфолио',
		title: 'Договор оферты - Услуги разработки ПО',
		description: 'Условия и правила оказания услуг разработки программного обеспечения от ИП Басев Максим Игоревич.',
		images: [
			{
				url: 'https://m-b.one/img/profile-img.webp',
				width: 400,
				height: 400,
				alt: 'Максим Басев - Программист',
			},
		],
	},

	// Twitter
	twitter: {
		card: 'summary_large_image',
		title: 'Договор оферты - Максим Басев',
		description: 'Условия и правила оказания услуг разработки ПО.',
		images: ['https://m-b.one/img/profile-img.webp'],
		creator: '@maxbasev',
	},

	// Alternate URLs
	alternates: {
		canonical: 'https://m-b.one/ru/offer',
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

export default function RussianOfferLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
} 
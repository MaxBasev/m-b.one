import type { Metadata } from 'next'
import './globals.css'

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
		url: 'https://m-b.one',
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

	// Verification
	verification: {
		google: 'your-google-site-verification',
		yandex: 'your-yandex-verification',
	},

	// Other
	category: 'technology',
	classification: 'Business',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				{/* Google Tag Manager */}
				<script dangerouslySetInnerHTML={{
					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-TF8WVR6Q');`
				}} />

				{/* Favicons */}
				<link rel="icon" href="/MB_Logo.png" type="image/png" />
				<link rel="apple-touch-icon" href="/MB_Logo.png" />
				<link rel="shortcut icon" href="/MB_Logo.png" />
				<link rel="manifest" href="/manifest.json" />

				{/* Meta tags */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#149ddd" />
				<meta name="msapplication-TileColor" content="#149ddd" />
				<meta name="format-detection" content="telephone=no" />

				{/* Alternate languages - moved to individual layouts */}

				{/* DNS prefetch for external domains */}
				<link rel="dns-prefetch" href="//fonts.googleapis.com" />
				<link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
				<link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
				<link rel="dns-prefetch" href="//unpkg.com" />

				{/* Preconnect for fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

				{/* Preload critical images */}
				<link rel="preload" as="image" href="/img/profile-img.jpg" />

				{/* Optimized CSS loading with font-display fallback */}
				<link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Raleway:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" as="style" />
				<link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.grid.min.css" as="style" />
				<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/fontawesome.min.css" as="style" />
				<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/solid.min.css" as="style" />
				<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/brands.min.css" as="style" />
				<link rel="preload" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" as="style" />

				{/* Font fallback for FOIT prevention */}
				<style dangerouslySetInnerHTML={{
					__html: `
						body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; }
						@font-face { font-family: 'Open Sans'; font-display: swap; }
						@font-face { font-family: 'Raleway'; font-display: swap; }
						@font-face { font-family: 'Poppins'; font-display: swap; }
					`
				}} />

				{/* Load optimized CSS stylesheets */}
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Raleway:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.grid.min.css" rel="stylesheet" />
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/fontawesome.min.css" rel="stylesheet" />
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/solid.min.css" rel="stylesheet" />
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/brands.min.css" rel="stylesheet" />
				<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />



				{/* Structured Data - Person Schema */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							"name": "Max Basev",
							"alternateName": "Maksim Basev",
							"description": "Professional software developer specializing in custom software development and web applications",
							"url": "https://m-b.one",
							"image": "https://m-b.one/img/profile-img.jpg",
							"sameAs": [
								"https://t.me/maxbasev",
								"https://github.com/maxbasev"
							],
							"jobTitle": "Software Developer",
							"worksFor": {
								"@type": "Organization",
								"name": "PE Basev Maksim Igorevich"
							},
							"address": {
								"@type": "PostalAddress",
								"addressLocality": "Bishkek",
								"addressCountry": "Kyrgyzstan"
							},
							"contactPoint": {
								"@type": "ContactPoint",
								"telephone": "+996502560036",
								"contactType": "customer service",
								"email": "connect@m-b.one"
							}
						})
					}}
				/>

				{/* Structured Data - Organization Schema */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							"name": "PE Basev Maksim Igorevich",
							"alternateName": "Max Basev Software Development",
							"url": "https://m-b.one",
							"logo": "https://m-b.one/MB_Logo.png",
							"image": "https://m-b.one/img/profile-img.jpg",
							"description": "Professional software development services including custom software, web applications, optimization and technical consulting",
							"address": {
								"@type": "PostalAddress",
								"addressLocality": "Bishkek",
								"addressCountry": "Kyrgyzstan"
							},
							"contactPoint": {
								"@type": "ContactPoint",
								"telephone": "+996502560036",
								"contactType": "customer service",
								"email": "connect@m-b.one"
							},
							"founder": {
								"@type": "Person",
								"name": "Max Basev"
							},
							"sameAs": [
								"https://t.me/maxbasev"
							]
						})
					}}
				/>

				{/* Security headers */}
				<meta httpEquiv="X-Content-Type-Options" content="nosniff" />
				<meta httpEquiv="X-Frame-Options" content="DENY" />
				<meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

				{/* Google Analytics - replace with your GA4 ID */}
				{/*
				<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
				<script dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'GA_TRACKING_ID');
					`
				}} />
				*/}
			</head>
			<body>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-TF8WVR6Q"
						height="0"
						width="0"
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				{children}
			</body>
		</html>
	)
}

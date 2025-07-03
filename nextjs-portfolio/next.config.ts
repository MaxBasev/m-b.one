/** @type {import('next').NextConfig} */
const nextConfig = {
	// Production optimizations
	compress: true,
	poweredByHeader: false,

	// Performance optimizations
	swcMinify: true,

	// Static asset optimization
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
			{
				source: '/img/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			{
				source: '/(favicon.ico|manifest.json|robots.txt|sitemap.xml)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400, must-revalidate',
					},
				],
			},
		];
	},

	// Bundle optimization
	experimental: {
		optimizePackageImports: ['react-icons'],
	},

	// Image optimization
	images: {
		formats: ['image/webp', 'image/avif'],
		minimumCacheTTL: 31536000,
	},
};

export default nextConfig;

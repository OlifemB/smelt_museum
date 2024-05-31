const path = require('path')

module.exports = {
	output: 'export',
	images: {
		formats: ['image/webp'],
	},
	webpack(config) {
		const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'))

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
				use: ['@svgr/webpack'],
			},
		)
		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/shares/styles')],
	},
	reactStrictMode: false,
	// i18n: {
	//     locales: ['en-US', 'fr', 'nl-NL', 'ru-RU'],
	//     defaultLocale: 'en-US',
	//     domains: [
	//         {
	//             domain: 'example.com',
	//             defaultLocale: 'en-US',
	//         },
	//         {
	//             domain: 'example.nl',
	//             defaultLocale: 'nl-NL',
	//         },
	//         {
	//             domain: 'example.fr',
	//             defaultLocale: 'fr',
	//             http: true,
	//         },
	//     ],
	// },
}

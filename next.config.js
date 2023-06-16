/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: {not: /url/},
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							svgProps: {
								width: '28px',
								height: '28px',
								fill: 'currentColor',
								class: 'svg-icon',
								viewBox: '0 0 32 32',
							},
						},
					},
				],
			}
		)

		return config
	},
}

module.exports = nextConfig

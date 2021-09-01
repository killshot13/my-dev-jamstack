const siteMetadata = require('./site-metadata.json')

module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		siteUrl: `https://rehnert.co`,
	},
	flags: {
		PRESERVE_WEBPACK_CACHE: true,
		DEV_SSR: true,
		PRESERVE_FILE_DOWNLOAD_CACHE: true,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-remove-fingerprints`,
		`gatsby-source-data`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				implementation: require('node-sass'),
			},
		},
		{
			resolve: `gatsby-remark-page-creator`,
			options: {},
		},
		{
			resolve: `@stackbit/gatsby-plugin-menus`,
			options: {
				sourceUrlPath: `fields.url`,
				pageContextProperty: `menus`,
			},
		},
	],
}

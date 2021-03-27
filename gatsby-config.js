const siteMetadata = require('./site-metadata.json')

module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		siteUrl: `https://rehnert.co`,
	},
	plugins: [
		`gatsby-plugin-advanced-sitemap`,
		`gatsby-plugin-react-helmet`,
		`gatsby-source-data`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {},
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

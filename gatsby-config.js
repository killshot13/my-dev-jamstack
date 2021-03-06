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
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 1200,
						},
					},
				],
			},
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

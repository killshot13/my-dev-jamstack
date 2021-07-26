const siteMetadata = require('./site-metadata.json')

module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		siteUrl: `https://rehnert.co`,
	},
	plugins: [
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
				path: `${__dirname}/src/pages/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`,
				ignore: [`**/\.*`], // ignore files starting with a dot
			},
		},
		{
			resolve: `gatsby-plugin-react-helmet`,
			options: {},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {},
		},
		{
			resolve: `gatsby-plugin-advanced-sitemap`,
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

// In your gatsby-config.js
module.exports = {
	plugins: [
		// You can have multiple instances of this plugin
		// to read source nodes from different locations on your
		// filesystem.
		//
		// The following sets up the Jekyll pattern of having a
		// "pages" directory for Markdown files and a "data" directory
		// for `.json`, `.yaml`, `.csv`.
	],
}

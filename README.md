# ✨ my-dev-jamstack ✨

[![Netlify Status](https://api.netlify.com/api/v1/badges/58e2b3cb-13d2-4937-9c44-681fb76c7cce/deploy-status)](https://app.netlify.com/sites/rehnert/deploys)

<img src="https://github.com/killshot13/my-dev-jamstack/blob/master/static/images/rehnert.co-twitter-card.png?raw=true" width="600">

This is a second-generation JAMSTACK, with better performance than even its visionaries could have imagined.

This is a [Gatsby](https://gatsbyjs.com) site using Git as a [CMS](https://en.wikipedia.org/wiki/Content_management_system). It was created with [Stackbit](https://www.stackbit.com?utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes) in under a minute.

You can [create a site](https://app.stackbit.com/create?theme=https://github.com/stackbit/stackbit-theme-fresh&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes) just like this one, or explore some variations. How about a different:

<details>
        <summary>🎨 &nbsp;<strong>Look</strong></summary>
        <ul>
                <li><a href="https://app.stackbit.com/create?theme=https://github.com/stackbit/stackbit-theme-ampersand&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Medium inspired blogging theme</a></li>
                <li><a href="https://app.stackbit.com/create?theme=https://github.com/stackbit/stackbit-theme-book&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Book Stackbit theme</a></li>
                <li><a href="https://app.stackbit.com/create?theme=https://github.com/stackbit/stackbit-theme-startup&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Stackbit Startup theme</a></li>
                </ul>
</details>

<details>
        <summary>✏️ &nbsp;<strong>CMS</strong></summary>
        <ul>
                <li><a href="https://app.stackbit.com/create?cms=netlifycms&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Netlify CMS</a></li>
                <li><a href="https://app.stackbit.com/create?cms=contentful&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Contentful</a></li>
                <li><a href="https://app.stackbit.com/create?cms=forestry&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Forestry</a></li>
                </ul>
</details>

<details>
        <summary>⚙️ &nbsp;<strong>Static site generator</strong></summary>
        <ul>
                <li><a href="https://app.stackbit.com/create?ssg=nextjs&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Next.js</a></li>
                <li><a href="https://app.stackbit.com/create?ssg=hugo&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Hugo</a></li>
                <li><a href="https://app.stackbit.com/create?ssg=jekyll&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Jekyll</a></li>
                </ul>
</details>

## Develop Locally

1. Install [Node.js and npm](https://nodejs.org/en/)

1. Install npm dependencies:

        npm install

1. Get "stackbit-api-key" from project menu in [Stackbit dashboard](https://app.stackbit.com/dashboard)

1. Run the following command to assign this key to `STACKBIT_API_KEY` environment variable:

        export STACKBIT_API_KEY=""

1. Run the following command to fetch additional site contents from Stackbit if needed:

        npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/60323df295aa610015b59f66 --stackbit-api-key=STACKBIT_API_KEY

1. Start the Gatsby local development server:

        npm run develop

1. Open [http://localhost:8000/](http://localhost:8000/) in the browser

1. 🎉

## Editing Content

To start editing your site, you can edit the included Markdown files.

Alternatively, you can use the free on-page editing experience provided by the [Stackbit Studio](https://stackbit.com?utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes).

[![reference video](https://i3.ytimg.com/vi/zd9lGRLVDm4/hqdefault.jpg)](https://stackbit.link/project-readme-lead-video)

Here's a few resources to get you started:

- 📺 &nbsp; [Editing Content](https://stackbit.link/project-readme-editing-video)
- 📺 &nbsp; [Adding, Reordering and Deleting Items](https://stackbit.link/project-readme-adding-video)
- 📺 &nbsp; [Collaboration](https://stackbit.link/project-readme-collaboration-video)
- 📺 &nbsp; [Publishing](https://stackbit.link/project-readme-publishing-video)
- 📚 &nbsp; [Stackbit Documentation](https://stackbit.link/project-readme-documentation)

If you need a hand, make sure to check the [Stackbit support page](https://stackbit.link/project-readme-support).

## Colophon

Generated at `2021-02-21T11:05:31.973Z` by Stackbit version `0.3.49`.

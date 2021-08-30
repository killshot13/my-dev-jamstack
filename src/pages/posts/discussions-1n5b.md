---
stackbit_url_path: posts/discussions-1n5b
title: '"Discussions"'
date: '2021-03-17T20:17:34.665Z'
excerpt: >-
  A THOROUGH REVIEW OF GITHUB'S LATEST BRAINCHILD               Overview   After
  nearly a year...
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--mS00IFfr--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/73suok4xhx023jic9t21.jpg
comments_count: 3
positive_reactions_count: 5
tags:
  - github
  - news
  - productivity
canonical_url: 'https://sth13.medium.com/discussions-d216ce8bba6e'
template: post
---
#### **A THOROUGH REVIEW OF GITHUB'S LATEST BRAINCHILD**

---

## Overview

After nearly a year of private beta testing, GitHub confirmed last month in a blog post that its new [Discussions](https://docs.github.com/en/discussions) feature is now available as a public beta.

First revealed during the live stream of GitHub's [Satellite Virtual 2020](https://githubsatellite.com/), this latest addition to the GitHub platform seeks to provide a way for software communities to collaborate outside the codebase.

---

![View of a "GitHub Discussion"](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3oud35r5wy6wjbrwoe7v.jpeg) <figcaption>View of a "GitHub Discussion"</figcaption>

---

In theory, the new feature will improve collective participation for open-source projects while smoothing communication lines between project managers, developers, beta testers, and end-users.

> _"Discussions is a collaborative communication forum for the community around an open-source project."_ — [GitHub Docs](https://docs.github.com/en/discussions)

Some prominent repositories, such as [Node.js](https://github.com/nodejs/node/discussions), [Laravel](https://github.com/laravel/framework/discussions), [Next.js](https://github.com/vercel/next.js/discussions), and [Prisma](https://github.com/prisma/prisma/discussions), participated in the first round of beta testing and have already successfully integrated Discussions. Based on current trends, **it appears that Discussions is poised to reshape the existing structure of most GitHub repositories**.

---

[![A view of "Discussions" from the Next.js repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p57qxyax6vzculdnu5th.jpeg)](https://github.com/vercel/next.js/discussions) <figcaption>[View of a "GitHub Discussion"](https://github.com/vercel/next.js/discussions)</figcaption>

---

## Features

By default, **four categories** are created to help Discussions stay organized.

> 1. 💬 General
> 2. 💡 Idea
> 3. 🙏 Q&A
> 4. 🙌 Show and tell

Aside from these templated options, repository owners can author unlimited custom threads. **Users are encouraged to mark quality answers as helpful**, similar to the familiar layout of Stack Overflow.

Discussions also attempts to establish content moderation by **allowing top contributors to achieve higher privileges**. This option should help relieve some stress for the developer(s), who would otherwise be forced to keep a constant eye on the conversations.

---


<iframe class="liquidTag" src="https://dev.to/embed/youtube?args=DbTWBP3_RbM" style="border: 0; width: 100%;"></iframe>
 <figcaption>Video provided courtesy of [Github](https://www.youtube.com/channel/UC7c3Kb6jYCRj4JO) and [Michelle Mannering](https://www.mishmanners.com/)</figcaption>

---

## Configuration

Anyone can configure Discussions quite easily; it took me about **5–10 minutes per repository** on average.

The layout is almost identical to GitHub issues, allowing for creating any number of topics linked to a single repository, each with a unique title and URL. While this is conducive in most scenarios, the setup could intimidate some developers who maintain an extensive library of source code.

Fortunately, **most of the configuration is already provided by a boilerplate template**. I found the default options to be well-balanced, sparing precious design time while still allowing customization.

---

[![Getting Started with Discussions](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iayo2uvy9x6l4top9lp4.jpeg)](https://docs.github.com/en/discussions/quickstart) <figcaption>[Getting Started with Discussions](https://docs.github.com/en/discussions/quickstart)</figcaption>

---

As shown above, the option to enable Discussions is now available for every repository. To access, open the settings tab and scroll to the bottom of the features section.

You are now presented with a template containing several options to personalize if you so desire. Styling with Markdown is supported, so once you are satisfied, preview and publish just like a 
`README`
.

A new menu tab should appear in the navbar of the repository. Here, members of the software community who utilize your code can now gather to converse and collaborate.

---

## Outlook

Some developers contend that Discussions shares too much similarity with existing features to be worth the hassle. Others fear that management will pile more expectations onto an already overwhelming workload.

As it stands, Discussions admittedly leaves room for improvement and likely will not be suitable for every situation. That being said, the latest metrics released by GitHub in a new report are nothing short of impressive.*

Since January 2020 —

> * **3000 discussions** have been created.
> * **50% of active Discussions users** contributed or pushed code.
> * **34% more pull requests** were merged.
> * **18% less time** was required to accomplish a merge.

All figures were derived from beta testing conducted after the addition of Discussions to the Next.js repository, which produced a marked overall improvement in **user participation and developer productivity**.

*If you wish to read the entire report, visit [octoverse.github.com](octoverse.github.com), where you can also download a PDF copy for later reference.

---

![Customization options for pinned Discussions](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fo3ashle60qa848i1gi4.jpeg) <figcaption>Customization options for pinned Discussions</figcaption>

---

## Conclusion

Every developer knows that data from a test environment cannot be used conclusively to predict future performance.

However, if the benchmarks established last year hold steady, we can safely assume that Discussions' popularity and usage will continue to increase across GitHub. So here is my personal opinion on the matter.

**Provided as users, we treat Discussions like a tool and not a social media platform; and as project managers, we gradually and tactfully integrate the feature; I believe many benefits can be realized.**

I would love to hear perspectives from all of you, so please leave your thoughts in the comments.

Don't forget to 💖 this article and leave a 💭. If you're feeling extra generous, please click my name below to 🎆subscribe🎇!

  -- killshot13

---


<iframe class="liquidTag" src="https://dev.to/embed/user?args=killshot13" style="border: 0; width: 100%;"></iframe>


---

*[This post is also available on DEV.](https://dev.to/killshot13/discussions-1n5b)*


<script>
const parent = document.getElementsByTagName('head')[0];
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js';
script.charset = 'utf-8';
script.onload = function() {
    window.iFrameResize({}, '.liquidTag');
};
parent.appendChild(script);
</script>    

---
stackbit_url_path: posts/npm-publish-29g1
title: npm-publish
date: '2020-10-24T09:16:25.000Z'
excerpt: "a guide to releasing your first npm\_package               Introduction   npm (node package..."
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--aGL9eipc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jwut6pn4vr6qfi5lno74.png
comments_count: 0
positive_reactions_count: 5
tags:
  - npm
  - tutorial
  - productivity
canonical_url: 'https://medium.com/@sth13/npm-publish-a8a879938eaf'
template: post
---
## a guide to releasing your first npm package

---

#### Introduction

npm (node package manager) is the world's largest software registry. According to [the documentation](https://docs.npmjs.com/about-npm), npm consists of three distinct components:

* the registry
* the website
* the CLI

The registry is an immense database containing all the node packages & modules ever published, complete with version info and metadata.

On the website, you can search for and view packages, create an npm profile, and manage user settings.

The CLI provides the primary means of interacting with npm, including the publishing of packages & modules, which we will now cover in-depth.

---

### Prerequisites:

(1). an [npm](https://www.npmjs.com) account
(2). a [GitHub](https://github.com) account
(3). the [current version](https://nodejs.org) of Node.js
(4). the [current stable version](https://github.com/npm/cli/releases/latest) of npm


```shell
    npm install npm@latest -g
```


---

### Package vs Module

It is important to understand the two types of objects you can publish to the registry.

#### How is a package defined?

* a). A folder containing a program described by a 
`package.json`
 file.
* b). A g-zipped tarball containing (a).
* c). A URL that resolves to (b).
* d). A 
`<name>@<version>`
 that is published on the registry with (c).
* e). A 
`<name>@<tag>`
 that points to (d).
* f). A 
`<name>`
 that has a 
`latest`
 tag satisfying (e).
* g). A 
`git`
 URL that, when cloned, results in (a).

#### How is a module defined?

Any file or directory within 
`node_modules`
 that can be loaded by the Node.js 
`require()`
 function. To comply, at least one of these formats must be used.

* A folder with a 
`package.json file`
 containing a 
`"main"`
 field.
* A folder with an 
`index.js`
 file in it.
* A JavaScript file.

A module can also be a package, but not all modules are packages by default.

---

### Private vs Public

This parameter determines the visibility of your new npm package. For this article, it is assumed that you will elect to create a public package, but you may always reference the [documentation](https://docs.npmjs.com/creating-and-publishing-private-packages# publishing-private-packages) for more details.

#### Scoped vs Unscoped

Here you will define whether you want to release your code completely to the public domain (unscoped) or publish the code within a retained namespace (scoped).

* [Unscoped packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages) are always public.

* [Private packages](https://docs.npmjs.com/about-private-packages) are always scoped.

* [Scoped packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages) are private by default; you must pass a command-line flag when publishing to make them public.

The command line interprets your decision by how your package is named. I'll create examples based on my own npm account username.


```shell
    PUBLIC/UNSCOPED: npm publish my-package
    PUBLIC/SCOPED: npm publish @killshot13_npm/my-package --access public
    PRIVATE/SCOPED: npm publish @killshot13_npm/my-package
```


To avoid confusing the reader, I shall refrain from much discussion about teams, organizations, and enterprise accounts. 

Since this article is about publishing our first npm package, I doubt these factors will be of much concern at present. Just be aware of the concepts for future knowledge.

---

### Create | Review | Test | Publish

At last, the moment you have been waiting for! These four simple steps are what you will be using to publish your package or module to the registry.

> WARNING: If you deviate from this path or omit one of these steps, chances are you will encounter errors and spend a considerable amount of time debugging your files.

#### Create


```shell
    mkdir my-package
    cd my-package
```


Now that you have a root directory, initiate git and npm.


```shell
    git init
    git remote add origin git://YOUR URL HERE
    npm init
    // Follow the prompts to create a package.json file. 
    // Consider the conventions listed above when naming your package.
```


Now open the directory in your favorite code editor and add a 
`README.md`
 file and the rest of your package code files.

#### Review

In this step, use whatever means are at your disposal to double-check your code for environmental variables, including passwords, API keys, and other sensitive data.

If necessary, create the appropriate files and replace your existing code with default variables as needed to protect your secrets.


```shell
    .gitignore | .npmignore | .env | PROCESS.ENV
```


#### Test

Almost there! Just one more quick (hopefully) thing to wrap up before you publish. To keep bugs out of the registry, especially when publishing publicly, you should first test your package in your own environment.

Since you are already using the npm CLI, you can just run this command.


```shell
    // Use the full path to your project directory.
    npm install my-package
```


If everything functions as designed, congratulations, you are ready to publish your first package!

#### Publish

This is the simplest and most satisfying step. Navigate back to the root directory of your npm package.


```shell
    cd /path/to/package
```


*Are you ready?*


```shell
    npm publish my-package
```


If npm prints something that looks like this, you are golden!

![screenshot of successful publish to npm action](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qxvns1m1cm6wwx8se0go.png) <figcaption>Photo courtesy [Dev Community](https://dev.to/uf4no/npm-behind-the-scenes-and-publish-guide-4gi8)</figcaption>

---

### Tips & Tricks

Once you 
`npm publish`
, you *CANNOT* change your package name! Take a moment to solidify your choice of words. Try to keep package names short and descriptive. For an example of what not to do, imagine installing this npm package.

>I pity the fool!


```shell
    npm install --save @teambit/staged-components.component-status-resolver
```


Sometimes, even with an unscoped public package, npm refuses to publish unless you include a flag. Add <code>--access public</code> to your command and try again.


```shell
    npm publish my-package --access public
```


If you enabled 2FA when creating your npm account, you will have to provide the one-time token in your publish command.


```shell
    npm publish my-package --otp=811486
```


### Conclusion

I hope you enjoyed this article. Feel free to add suggestions or ask questions in the comments below, and I will get back to you. Thank you for reading, and happy coding!

Don't forget to 💖 this article and leave a 💭. If you're feeling extra generous, please click my name below to 🎆subscribe🎇!

  -- killshot13

---


<iframe class="liquidTag" src="https://dev.to/embed/user?args=killshot13" style="border: 0; width: 100%;"></iframe>


---

*[This post is also available on DEV.](https://dev.to/killshot13/npm-publish-29g1)*


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

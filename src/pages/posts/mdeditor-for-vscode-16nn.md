---
stackbit_url_path: posts/mdeditor-for-vscode-16nn
title: mdEditor (for VSCode)
date: '2021-06-28T16:12:41.414Z'
excerpt: >-
  Table of Contents    Overview Features Prerequisites Installation Usage
  Credits             ...
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--4OnHOVW_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/guqx0sw882p4q2bxyiq5.png
comments_count: 0
positive_reactions_count: 2
tags:
  - markdown
  - news
  - opensource
  - showdev
canonical_url: 'https://dev.to/killshot13/mdeditor-for-vscode-16nn'
template: post
---
## Table of Contents

- [Overview](# overview)
- [Features](# features)
- [Prerequisites](# prerequisites)
- [Installation](# installation)
- [Usage](# usage)
- [Credits](# references)

---

## Overview (TL;DR) <a name = "overview"></a>

In a nutshell, mdEditor is a VS Code Workspace that can be installed from GitHub. It creates a sort of self-contained Markdown environment on your local machine. 

mdEditor provides the configuration guidelines and creates the structure for an awesome VSCode Markdown editor. By creating a reusable Code-Workspace, the main portion of your IDE environment is protected from rule conflicts.

---

## Features <a name = "features"></a>

1. The Code-Workspace, once opened with VS Code, loads everything you need for importing, exporting, linting, custom rulesets, automatic styling, and file conversion --> PDF, DOCX, and HTML.

2. The syntax rules allow for the enforcement of any markdown flavor with a simple on/off option for each rule.

3. The linter looks for errors/problems and immediately flags them. A detailed explanation and reference link will appear on hover.

4. The auto-fix feature is enabled by default to run each time a file is saved. This formats your Markdown using the enabled rules, which corrects most errors automatically with no manual edits needed.

5. The file conversion tool uses an extension to integrate Pandoc with VS Code. With a simple key-binding (
`CTRL + K`
, 
`P`
), you can create 
`.pdf`
, 
`.docx`
, and 
`.html`
 files from Markdown, after which the new files can be viewed immediately and/or exported elsewhere.

6. The default stylesheet is applied during file conversion, ensuring  uniformity and consistency in the output. You can apply custom styles using CSS to achieve the desired appearance of the converted files.

---

## Prerequisites <a name = "prerequisites"></a>

**[Visual Studio Code](https://code.visualstudio.com/Download)**
This should be self-explanatory.

**[Pandoc](http://pandoc.org/installing.html)**
This may require some guidance if you don't currently use Pandoc. I wrote a gist to help first-time users; here is [the link](https://gist.github.com/killshot13/5b379355d275e79a5cb1f03c841c7d53).

---

### Installation <a name = "installation"></a>

mdEditor can be installed using the simple guide you are reading now, which paraphrases the README.md file from the [main repository](https://github.com/killshot13/mdEditor).


<iframe class="liquidTag" src="https://dev.to/embed/github?args=killshot13%2FmdEditor%20no-readme" style="border: 0; width: 100%;"></iframe>


Decide where the root directory of the editor is going to live on your local drive (reference [Overview](# overview) for details), then clone [mdEditor](https://github.com/killshot13/mdEditor.git) to that location.

Now, open mdEditor at the base directory using VSCode. Your IDE will auto-discover the 
`.code-workspace`
 file and prompt you to reopen the folder as a workspace. 

Confirm this choice, unless you want a different configuration. If so, there is a blank 
`settings.json`
 in the 
`.vscode`
 folder for you. Otherwise, just delete that file to avoid confusion.

Once open, you should receive another prompt to install the recommended VS Code extensions. Once again, choose confirm to install, and leave the default settings in place. 

The extensions will power the linting rules and Pandoc style guide within the workspace. Here are the links in case you encounter any issues.

--> [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
--> [vscode-pandoc](https://marketplace.visualstudio.com/items?itemName=DougFinke.vscode-pandoc)

Now, using this diagram, verify the file structure of your local installation of mdEditor is a rough match.


```shell
    **Tree View**
    _mdEditor_
    \+---.vscode
         |       `
settings.json
`
         |
         +---md
         |       `
project1.md
`
         |       `
project2.md
`
         |
         +---styles
         |       `
style.css
`
         |       `
syntax.md
`
         |
         |`
.markdownlint.json
`
         |`
mdEditor.code-workspace
`
         |`
README.md
`
         |`
LICENSE
`
         \---
```


**NOTE: On Linux you must uncomment the 
`pandoc.htmlOptString`
 in the 
`mdEditor.code-workspace`
 file. The current version, which uses Windows OS file separators, must be replaced with the Linux version; otherwise, the css styles will not be applied correctly.**

Installation is complete.
Nice job!

---

## Usage <a name = "usage"></a>

To test linting & formatting, click the 
`test.txt`
 file (in the 
`md`
 folder); it should open in the main editor window.

In the sidebar, keeping the 
`test.txt`
 tab in focus, change the filetype from 
`txt`
 to 
`md`
 and save.

Check the output in the PROBLEMS tab of your lower (terminal) panel. Several formatting violations should appear. Now make a tiny edit and save again. Most of the errors should be gone, having been corrected automatically.

To test the filetype output, enter the key combination 
`CTRL + K`
, then press 
`P`
. Options to create 
`.pdf`
, 
`.docx`
, or 
`.html`
 file should appear in the dropdown. Click each option in turn and confirm the desired result was produced.

Workspace setup is now complete and mdEditor is ready to use.

>NOTE: The 
`syntax.md`
 file in the 
`styles`
 folder contains a detailed description of the linting rules available within the editor workspace. Any rule can be toggled on/off by editing the 
`.markdownlint.json`
 file using this syntax. 
`"ruleID" : bool`


Happy markdown'ing! :)

Don't forget to 💖 this article and leave a 💭. If you're feeling extra generous, please click my name below to 🎆subscribe🎇!

  -- killshot13

---


<iframe class="liquidTag" src="https://dev.to/embed/user?args=killshot13" style="border: 0; width: 100%;"></iframe>


---

## Credits <a name = "references"></a>

_Extensive credit is owed to [Dave](https://twitter.com/thisDaveJ) for indirectly inspiring me to create mdEditor after reading [this guide](https://thisdavej.com/build-an-amazing-markdown-editor-using-visual-studio-code-and-pandoc/) he authored._

[mdEditor](https://github.com/killshot13/mdEditor) is free software released under the [MIT license](https://github.com/killshot13/mdEditor/blob/main/LICENSE). Copyright 2020-2021 Michael Rehnert

All software programs, extensions, plugins, and digital content referenced and/or used in the documentation and/or installation guide of mdEditor is the respective intellectual property of the creators, developers, and owners thereof and is entitled to the protections granted under U.S. Copyright law.

*[This post is also available on DEV.](https://dev.to/killshot13/mdeditor-for-vscode-16nn)*


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

---
stackbit_url_path: posts/what-is-pandoc-1hbc
title: What is Pandoc?
date: '2021-05-07T11:04:16.428Z'
excerpt: >-
  Cover Image Credit: RFC: Designing Logo of Pandoc            Introduction  
  Most developers have pro...
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--jSMlLual--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7sb7honevh3jssa6m5bv.png
comments_count: 0
positive_reactions_count: 8
tags:
  - markdown
  - productivity
  - tutorial
canonical_url: 'https://dev.to/killshot13/what-is-pandoc-1hbc'
template: post
---
>Cover Image Credit: _[RFC: Designing Logo of Pandoc](https://groups.google.com/g/pandoc-discuss/c/1bKIuyBnWaQ/discussion)_

## Introduction

Most developers have probably wondered or even asked the question at some point, "What exactly is [Pandoc](http://pandoc.org/installing.html)?" or "What do people use Pandoc for?"

I certainly did! So, I have written a short article to help answer that question. Much of the information in this article is sourced from [a gist I had put together](https://gist.github.com/killshot13/5b379355d275e79a5cb1f03c841c7d53) over the course of several months.

---


<iframe class="liquidTag" src="https://dev.to/embed/gist?args=https%3A%2F%2Fgist.github.com%2Fkillshot13%2F5b379355d275e79a5cb1f03c841c7d53%20file%3Dpandoc-install-intro.md" style="border: 0; width: 100%;"></iframe>


---

Defined as a universal [document converter](https://en.wikipedia.org/w/index.php?title=Pandoc&oldid=1018572588), Pandoc is an open-source software program for file conversion. Pandoc is not a markup language, nor is it a CLI, although it is used from one. 🙃

If you need to convert files from any conceivable format to another, Pandoc is your best friend. It has become popular across multiple industry and technology sectors. 

The value of Pandoc shines brightest when used to transform file types like Markdown, Microsoft Word (.docx), and XML into more user-friendly documents and markup languages, including PDF and HTML.

---

## Installing Pandoc

I will assume at this point, if you are still reading, you likely want to try Pandoc out for yourself.

Listed below are the steps I took to install and configure Pandoc on Windows (10 Pro Edition) and Linux (Ubuntu 20.04 Focal) for Markdown to PDF document conversion.

Please note all disclaimers remain flapping in the breeze. Pandoc is open-source software that carries no warranty of any kind. Likewise, I make no guarantee that you will achieve a favorable result simply by following the steps below. 🙃

>_Your Mileage Might Vary_

### --> Pandoc on Windows

I have been using the [Chocolately](https://community.chocolatey.org/) package manager for Windows for several years now. So for me, the simplest way to get Pandoc up and running was first to install it with this command.


```bash
choco install pandoc
```


Then I grabbed the Windows installer for MikTex (one of many Pandoc engines) from the [official downloads page](https://miktex.org/download) and ran the 
`.exe`
 file to install.

---

![markdown-to-pdf-pandoc-sample](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f2h5leq7n045ucq11kgp.jpg)
<iframe class="liquidTag" src="https://dev.to/embed/collapsible?args=caption" style="border: 0; width: 100%;"></iframe>
 Before-and-after view when running the markdown-to-pdf command in Pandoc 
<iframe class="liquidTag" src="https://dev.to/embed/endcollapsible?args=" style="border: 0; width: 100%;"></iframe>


No further configuration was necessary, at least not from a functional point of view. However, Pandoc will let you customize certain behaviors at quite a granular level.

There is a [configuration section](https://dev.to/killshot13/what-is-pandoc-1hbc# configuring-pandoc) toward the end of this article offers a good starting place for those wishing to take a deeper dive.

---

### --> Pandoc on Linux

Getting Pandoc setup with 
`.pdf`
 capabilities on Linux proved a bit more challenging.

After navigating a good deal of noise encountered while researching different packages, I found [the consensus](https://askubuntu.com/a/1219144/1153800) seemed to favor a Pandoc/TexLive setup.

Since I am running Ubuntu Linux on WSL2, I opted to build from scratch to avoid conflicts with my local Windows environment.

---

![markdown-to-html-pandoc.jpg](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pexrjudjth3ixhwq0bq7.jpg)
<iframe class="liquidTag" src="https://dev.to/embed/collapsible?args=caption" style="border: 0; width: 100%;"></iframe>
 Before-and-after view when running the markdown-to-html command in Pandoc 
<iframe class="liquidTag" src="https://dev.to/embed/endcollapsible?args=" style="border: 0; width: 100%;"></iframe>


---

First, I pulled the latest tarball from the [release page](https://github.com/jgm/pandoc/releases/).

>There are multiple assets available with each release, so check your OS architecture first rather than blindly copying the snippets. This way, you can ensure you are requesting the correct package for your machine.


```bash
wget https://github.com/jgm/pandoc/releases/download/2.13/pandoc-2.13-linux-amd64.tar.gz
```


Then, without switching directories, I used a two-step installation process.


```bash
sudo tar xvzf $TGZ --strip-components 1 -C '/usr/local'
```


Note that $TGZ and the destination folder in the snippet above are generic, and substitutions must be made to reflect your home directory.


```bash
sudo apt-get install texlive texlive-latex-extra
```


And with that, Pandoc was installed on Linux to convert markdown files to PDF documents!

---

## Configuring Pandoc

These configuration options are just examples and may not apply in every situation.

One should always consult the [official Pandoc documentation](https://pandoc.org/MANUAL.html) for complete details and the latest changes.


```bash
--pdf-engine=PROGRAM
```


- Specifies which engine Pandoc should use when producing PDF output.

- Valid values are pdflatex, lualatex, xelatex, latexmk, tectonic, wkhtmltopdf, weasyprint, prince, context, and pdfroff.

- If the engine is not in your PATH, you can specify the full path of the engine here.

- If this option is not specified, pandoc uses the following defaults depending on the output format specified.


```bash
> -t latex or none
```


- defaults to pdflatex (other options: xelatex, lualatex, tectonic, latexmk)


```bash
> -t context:
```


- defaults to context


```bash
> -t html:
```


- defaults to wkhtmltopdf (other options: prince, weasyprint; visit [Print-CSS](https://print-css.rocks/) for a good introduction to PDF generation from HTML/CSS.)


```bash
> -t ms:
```


- defaults to pdfroff

---

![markdown-rendered-as-html-pandoc.jpg](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8nk2jw6wrh63f1k3jgth.jpg)
<iframe class="liquidTag" src="https://dev.to/embed/collapsible?args=caption" style="border: 0; width: 100%;"></iframe>
 Pandoc can even apply custom styling when rendering HTML from Markdown 
<iframe class="liquidTag" src="https://dev.to/embed/endcollapsible?args=" style="border: 0; width: 100%;"></iframe>



```bash
--pdf-engine-opt=STRING
```


- Use the given string as a command-line argument to the pdf-engine. For example, to use a persistent directory 
`foo`
 for [Latexmk](https://ctan.org/pkg/latexmk/)’s auxiliary files, use 
`--pdf-engine-opt=-outdir=foo`
.

- Note that no check for duplicate options is done.

#### Credit: _[Pandoc User's Guide](https://pandoc.org/MANUAL.html)_

---

## Conclusion

On a related note, if you find yourself working with markdown, HTML, PDF, or XML files quite often, you should check out a little project of mine called mdEditor for VS Code.

The frameworks installed by mdEditor automate the configurations we just covered in such detail. Now you can generate file conversion with a simple keybinding or click in the command palette!


<iframe class="liquidTag" src="https://dev.to/embed/github?args=killshot13%2FmdEditor%20no-readme" style="border: 0; width: 100%;"></iframe>


I hope you have found this tutorial useful, and thank you for taking the time to follow along!

Don't forget to 💖 this article and leave a 💭. If you're feeling extra generous, please click my name below to 🎆subscribe🎇!

-- killshot13


<iframe class="liquidTag" src="https://dev.to/embed/user?args=killshot13" style="border: 0; width: 100%;"></iframe>


---

**A Note on Pandoc**
>Copyright 2006–2021 [John MacFarlane](mailto:jgm@berkeley.edu). Released under the [GPL](https://www.gnu.org/copyleft/gpl.html), version 2 or greater. This software carries no warranty of any kind. (See COPYRIGHT for full copyright and warranty notices.) For a full list of contributors, see the file AUTHORS.md in the [Pandoc source code](https://github.com/jgm/pandoc).


*[This post is also available on DEV.](https://dev.to/killshot13/what-is-pandoc-1hbc)*


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

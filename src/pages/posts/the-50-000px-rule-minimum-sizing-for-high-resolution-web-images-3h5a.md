---
stackbit_url_path: posts/the-50-000px-rule-minimum-sizing-for-high-resolution-web-images-3h5a
title: 'The 50,000px Rule: Sizing High-Resolution Web Images'
date: '2021-05-31T13:04:51.551Z'
excerpt: >-
  Introduction   Today, like most other days in any given month, I learned
  something new. But...
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--2TEXaWBW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/62918eo623co4ypnpepw.jpg
comments_count: 0
positive_reactions_count: 1
tags:
  - webdev
  - design
  - performance
  - ux
canonical_url: >-
  https://dev.to/killshot13/the-50-000px-rule-minimum-sizing-for-high-resolution-web-images-3h5a
template: post
---
### Introduction

Today, like most other days in any given month, I learned something new. But this tidbit of knowledge was particularly intriguing and, in my experience, not something that is well-known among web devs and SEO experts. 

So I thought to myself, on the off chance that I haven't been living under a rock this whole time, why not pen a short piece and spread the word? 

Hopefully, by now, I've piqued your curiosity a bit. So without further ado, let's explore what I have christened, the 50,000px Rule. 

### High-Level Overview

I recently became aware of this information while completing a [Google Codelab](https://codelabs.developers.google.com/) on JSON-LD structured data. While a bit off-topic from my objective, some of the related verbiages caught my attention. Let's have a look! 

>
> _"For best results, provide multiple high-resolution images (minimum of 50K pixels when multiplying width and height) with the following aspect ratios: 16x9, 4x3, and 1x1."_ 
>--[Google Search Central](https://developers.google.com/search/docs/data-types/recipe?authuser=1# recipe-properties)
>

So basically, what Google is trying to say here is this. If this expression doesn't return true after plugging in the dimensions of your photos, then your site isn't serving high-resolution imagery. 


<iframe class="liquidTag" src="https://dev.to/embed/katex?args=" style="border: 0; width: 100%;"></iframe>

 imgW * imgL >= sqrt(50,000)

<iframe class="liquidTag" src="https://dev.to/embed/endkatex?args=" style="border: 0; width: 100%;"></iframe>


Let's simplify the math just a tad. We know that (2 x2 =4), so let's assign these values to a simple square.  Using the formula for a given square area, we can determine a 2in x2in square has a surface area of...surprise! Four square inches. 

---

![oh-no-not-math-startled-cat](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4mqbpb6wo47181abydhs.jpg)

---

Now we must realize this calculation does not change based on the unit of measurement. If we instead had a 2-foot square or a 2-cm square, the unit of measure being used won't alter the actual values. 

So then, is a pixel also a unit of measure? Of course! Pixels, abbreviated as "px," are a tiny unit of measure; one pixel is about 1⁄96 inch (0.26 mm). 

While small, these specks do play an essential role in web design. Pixels are used to make sure a given element will render no matter what screen resolution is used for viewing. 

### Practical Application

Getting back to the 50,000px Rule, we should find the concept seems much simpler now. To meet the minimum requirements for a  high-resolution image, a photograph just needs to have a square area of at least 50K pixels. 

Let's calculate what this means using three aspect ratios widely recommended as variants of any image we might serve on a webpage.  

- 1:1 - the basic square or thumbnail image

We should be familiar by now with this type of calculation. After taking the square root of 50,000, we discover the minimum size for a high-resolution photo with a 1:1 ratio. 

![244x244px](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xy31440930kyq6u43jbb.png)<figcaption>1:1 aspect ratio</figcaption>

---

- 4:3 - the nostalgic "[Academy ratio](https://nofilmschool.com/2018/10/creative-weight-43-aspect-ratio)" used in older films

Once the shape changes from a square to a rectangle, the calculation process becomes less granular and involves ratios and fractions. 

![260x195px](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oal3mnzoshl83atypjx0.png)<figcaption>4:3 aspect ratio</figcaption>

---

- 16:9 - the current "widescreen" cinematic standard

As you might assume, the larger the base ratio, the larger the gap between 50,000 and the actual size of our image. With a 16:9 aspect ratio, we cannot get closer than 51,984 square pixels without using decimal numbers. 

![340x171px](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fhojuzzc8oxvvrcnew3m.png)<figcaption>16:9 aspect ratio</figcaption>

### Conclusion

So there you have it, folks, the 50,000 Rule demystified. Now I do not anticipate any developer, not even myself, will need to reference this information very often. 

Still, it was fun to research and it also sets a concrete baseline for high-resolution imagery. I hope that you enjoyed reading this article and perhaps you have also learned something new today! 

> *"For an image to be considered high-resolution when served on the Web, it must satisfy the 50,000px Rule."* 

---

Don't forget to 💖 this article and leave a 💭; I look forward to reading your thoughts and opinions in the comments below. If you're feeling extra generous, please click my name below to 🎆subscribe🎇! 

-- killshot13


<iframe class="liquidTag" src="https://dev.to/embed/user?args=killshot13" style="border: 0; width: 100%;"></iframe>




*[This post is also available on DEV.](https://dev.to/killshot13/the-50-000px-rule-minimum-sizing-for-high-resolution-web-images-3h5a)*


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

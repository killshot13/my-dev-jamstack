---
stackbit_url_path: posts/best-practices-sign-in-forms-d8e
title: 'Best Practices: Sign-In Forms'
date: '2021-07-30T10:18:48.528Z'
excerpt: >-
  This is not a conclusive listing; it rather seeks to provide a general
  guideline that is both...
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--yJdB-BrS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vkgwk64iq98gw2hnnrnw.jpg
comments_count: 2
positive_reactions_count: 87
tags:
  - webdev
  - productivity
  - html
  - css
canonical_url: 'https://dev.to/killshot13/best-practices-sign-in-forms-d8e'
template: post
---
>This is not a conclusive listing; it rather seeks to provide a general guideline that is both accurate and useful.
>
>It should be treated as a point of reference rather than a directive from an authority or subject matter expert.

---

## <strong>HTML:</strong>

- Use the 
`<label>`
 element, and prefer them to 
`<placeholder>`
 tags.
- Place the 
`<label>`
 element above the 
`<input>`
 element.
- While 
`<placeholder>`
 tags can be useful, DON'T use them to replace 
`<label>`
 element.
- Don't force users to input information twice, and yes, this extends to emails and passwords. Instead, have them confirm ownership of their account by sending a confirmation email and just make it simple for them to reset their own password. 

>"Strive to enforce the password quality over the password quantity"

- Use 
`<button>`
 tags for buttons, and make the 
`<label>`
 of SUBMIT buttons more descriptive. Consider using "Sign In" or "Subscribe" so the user knows what to expect on click.
- A basic sign-in form should use the applicable HTML elements for each part instead of a cluster of 
`<div>`
 elements rendered with countless extra lines of JavaScript.

---

### Example Web Form HTML


```html

    <form>

    <section>
        <label for="email">Email</label>
        <input id="email">
    </section>

    <section>
	<label for="password">Password</label>
	<input id="password">
    </section>

    <button>Sign In</button>

    </form>

```


---

## <strong>CSS:</strong>

- Use approximately 15px padding for mobile as a general rule of thumb.
- Same as above, but only 10px padding on desktop.
- All inputs and buttons should be clearly visible and give enough room to tap each individual element in mobile view.
- Design for thumbs, not fingers.
- Increase 
`"font-size"`
 on mobile by at least 2px. Even 4px will be necessary with certain fonts.
- Add the 
`"autofocus"`
 attribute to the first input box.
- Password input should always be declared as 
`<input type=password>`
. This informs the browser to render the text hidden by default.
- Add the 
`"required"`
 attribute to email and password fields.
- Leverage the browser's built-in ability to detect invalid input. You don't need JavaScript for that; simply render the 
`:invalid`
 attribute with 
`<color: red>`
 in the CSS.

---

### Example Invalid Input CSS


```css

    /** GOOD */
    input[type=email]:invalid {
	color: red;
    }

    /** EVEN BETTER */
    input[type=email]:not(:placeholder-shown):invalid {
	color: red;
    }

```


---

### Optional Input Attributes ⬇



```html

    <input type="tel"> 
    <input type="number">

    <!-- Gives the browser context so it can prompt to save new 
    password or else autocomplete the password block assuming 
    the user has that feature enabled -->
    <input type="current-password">
    <input type="password" autocomplete="new-password"> 
    <input type="password" autocomplete="current-password">

```


---

## <strong>JS:</strong>

- Use JavaScript to render a "SHOW PASSWORD" icon or text button.
- Make sure the sign-in button stays visible on mobile and doesn't get covered by the keyboard. One nearly fail-safe way to accomplish this is to only request the email on the initial screen, then defer to a second screen before requiring the password input.
- IMPORTANT: Provide additional form validation to further sanitize user input before sending it to the server side by checking against the expected REGEX cases and MIME types.

---

## References

[Use cross-platform browser features to build a sign-in form](https://web.dev/codelab-sign-in-form-best-practices/)

[Decoding password security: Six key password tips for 2021](https://safethishome.com/decoding-password-security-six-key-password-tips-for-2021/)

*[This post is also available on DEV.](https://dev.to/killshot13/best-practices-sign-in-forms-d8e)*


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

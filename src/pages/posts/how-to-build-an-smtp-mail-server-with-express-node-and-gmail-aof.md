---
stackbit_url_path: posts/how-to-build-an-smtp-mail-server-with-express-node-and-gmail-aof
title: 'How To Build an SMTP Mail Server with Express, Node, and Gmail'
date: '2021-02-26T12:07:36.005Z'
excerpt: >-
  Overview   Recently I had the opportunity to develop and integrate an SMTP
  Email Server into...
thumb_img_path: >-
  https://res.cloudinary.com/practicaldev/image/fetch/s--U2LLP4Iw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/de3p75v2w0yfb2sxcgpy.jpg
comments_count: 5
positive_reactions_count: 227
tags:
  - tutorial
  - node
  - javascript
  - webdev
canonical_url: >-
  https://daily.dev/blog/how-to-build-an-smtp-mail-server-with-express-node-and-gmail
template: post
---
## Overview

Recently I had the opportunity to develop and integrate an SMTP Email Server into a more extensive full-stack application. Today we will reference the code from my solution for this tutorial. 

We'll primarily be using Express and Node to create this server. We’ll also integrate Nodemailer to construct a mailable object and Gmail SMTP Server to deliver our emails free of charge.

The full codebase can be viewed here:

---


<iframe class="liquidTag" src="https://dev.to/embed/github?args=killshot13%2Fexpress-smtp-mailer%20no-readme" style="border: 0; width: 100%;"></iframe>


---

## Features

Before we start coding, we should quantify the expected functionality of our Express mail server. We can always refer back to this list later if confusion develops.

1. *Establish API routes* to a contact form on the frontend.

2. *Receive user data* from these routes upon form submission.

3. *Format a mailable JSON object* with the data received.

4. *Construct a transport function* with Nodemailer in preparation for delivery.

5. *Obtain authorization* from Gmail using credentials stored in the server.

6. *Call the transport function*, prompting Nodemailer to handoff the email object to the Gmail SMTP Server for delivery.

7. *Request confirmation* of successful delivery and return an error message if not received.

Upon completion, we will have the perfect backend for processing contact forms. Alternatively, our server will also provide a solid base to build a full-stack MERN app with plenty of functionality.

The production version of the server we are building today powers the backend of [Ormica](https://ormica.com), a real estate investment firm in S. Florida.

---

![Screenshot of the source code on GitHub](https://dev-to-uploads.s3.amazonaws.com/i/6lgbz7trbzbw34ris8jb.jpg)

---

## Prerequisites

* A basic understanding of fundamental programming concepts and familiarity with at least one server-side programming language such as [
`Node`
, 
`Python`
, 
`Ruby`
, 
`PHP`
].

* A code editor such as [Visual Studio](https://code.visualstudio.com/)

* [Node.js](https://nodejs.org/en/download) and [npm](https://www.npmjs.com/get-npm) locally installed. (Current LTS version preferred)

>Some developers, including myself, prefer to use [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to simplify Node version management, which is perfectly fine.
>
>For further reference you can check out also [How To Use Multiple Node Versions With NVM On MacOS - Node Version Manager](https://daily.dev/posts/how-to-use-multiple-node-versions-with-nvm-on-macos-node-version-manager)

---

## Development
### _Part 1. Dependencies_

#### *The moment has arrived! Time to write some code.*
Begin with these terminal commands to make an empty directory wherever you wish to store your server's local version and create the first file using npm.

---

```shell
mkdir smtp-email-server
cd smtp-email-server
npm init
```

---

Follow the terminal prompts from npm to create a package.json file. In most cases, the default values will suffice, but be sure to change the entry point to 
`server.js`
 instead of the proposed 
`index.js`
.

Now we need to add the required dependencies (npm packages) to our project. Run the following command and notice that npm automatically creates a new directory called 
`node_modules`
. This is normal, so don't change or configure anything in this folder.

---

```bash
npm install express nodemailer morgan dotenv
```

---

Let's glance at a brief overview of each package.

* **Express** is a minimal and flexible Node.js web application framework that provides a robust set of features.

* **Nodemailer** is a module designed to allow Node.js applications to send emails securely and efficiently.

* **Morgan** is named after Dexter (a show you should not watch until completion) and provides HTTP request logger middleware for Node.js.

* **dotenv** is a zero-dependency module that loads environment variables from a 
`.env`
 file into 
`process.env`
.

---

### _Part 2. Routes_
Let's begin by creating a 
`routes`
 folder containing 
`routes.js`
.

---

```bash
mkdir routes && cd routes && touch routes.js
```

---

Open 
`routes.js`
 in your code editor and establish a baseline by requiring the dependencies at the top of the file.

---

```javascript
require("dotenv").config();
// routes.js
const router = require("express").Router();
const path = require("path");
const nodemailer = require("nodemailer");
```

---

As you can see, Express has its own built-in router. I have opted to use this option instead of a separate npm package. This helps keep our application lightweight and efficient.

Our next order of work will involve setting up authentication using our Gmail account credentials. Don't forget to add the 
`.env`
 file in the root directory rather than our current location.

---

```javascript
const transport = {
    //this is the authentication for sending email.
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    /* create a .env file and define your credentials. */
    auth: {
        user: process.env.SMTP_TO_EMAIL,
        pass: process.env.SMTP_TO_PASSWORD,
    },
};
```

---

Remember the transport function we mentioned earlier? In this step, we will construct that same function. Let's have a look!

---

```javascript
// call the transport function
const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        //if error happened code ends here
        console.error(error);
    } else {
        //this means success
        console.log("Ready to send mail!");
    }
})
```

---

Now let's build the API routes. We will simultaneously define the schema for our JSON object (email).

In simple terms, we are telling Nodemailer about the form data it will be receiving from the front-end and how it should translate said data into a structured email.

Finally, we call the 
`transporter.sendMail`
 function, Nodemailer works its magic, and the email goes on its merry way to the recipient's inbox.

---

```javascript
router.get('/', (req, res, next) => {
    res.status(200).json({ msg: 'Working' })
})
router.post('/', (req, res, next) => {
    //make mailable object
    const mail = {
	from: process.env.SMTP_FROM_EMAIL,
	to: process.env.SMTP_TO_EMAIL,
	subject: 'New Contact Form Submission',
	text: `
from: ${req.body.name} contact details email: ${req.body.email} phone: ${req.body.tel} message: ${req.body.message}
`,
    }
    transporter.sendMail(mail, (err, data) => {
	if (err) {
	    res.json({
	        status: 'fail',
	    })
	    } else {
	    res.json({
	        status: 'success',
	    })
	}
    })
})
```

---

The last block of code in this file instructs Express to use the routes we have established; finally, we export the entire router to the Node server.

---

```javascript
// Answer API requests.
router.use('/api', function (req, res) {
    res.set('Content-Type', 'application/json')
    res.send('{"message":"Hello from the custom server!"}')
})
/* All remaining requests return the React app, so it can 
handle routing. */
router.use('*', function (request, response) { 
    response.sendFile(path.resolve(__dirname, '/react- 
    ui/build', 'index.html'))
})
module.exports = router
```

---

>NOTE: _If you are unfamiliar with 
`process.env`
 or merely need a refresher, this Codeburst article provides a splendid reference point._ 


<iframe class="liquidTag" src="https://dev.to/embed/medium?args=https%3A%2F%2Fcodeburst.io%2Fprocess-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7" style="border: 0; width: 100%;"></iframe>


---

### Part 3. _Server_
Let's create a 
`server.js`
 file in the root directory and open it with the editor.

Here we are just ensuring everything runs smoothly. I could write an entire article about each of the parameters defined here, but the template is pretty standard. 

Let's start by defining some initial requirements.

---

```javascript
const express = require('express')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length
```

---

Now we should check the environment to see if we are running in production. If so, we use a [cluster of Node processes](https://nodejs.org/api/cluster.html) to distribute the stress of running the application as evenly as possible across the server cores.

---

```javascript
const isDev = process.env.NODE_ENV !== 'production'
/* Multi-process to utilize all CPU cores. */
if (!isDev && cluster.isMaster) {
    console.error(`
Node cluster master ${process.pid} is running
`)
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
	cluster.fork()
    }
cluster.on('exit', (worker, code, signal) => {
    console.error(`
Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}
`)
    })
}
```

---

We will then connect to the frontend, priority serve our static HTML files, define some middleware for AJAX parsing, and finally call the routes we are importing from the 
`routes.js`
 file, all in that order.

We wrap it up with some error logging for the development environment, and voila! Our Express mail server is humming along.

---

```javascript
else {
     const app = express()
     const morgan = require('morgan')
     const path = require('path')
     const PORT = process.env.PORT || 5000
     /* Priority serve any static files. */
     /* Replace the example to connect to your frontend. */
     app.use(express.static(path.join(__dirname, 
     '/example/frontend.js')))
     // dev middleware
     app.use(morgan('dev'))
     /* configure body parser for AJAX requests */
     app.use(express.urlencoded({ extended: false }))
     app.use(express.json())
     const routes = require('./routes/routes')
     /* after all middleware functions */
     app.use('/', routes)
     app.listen(PORT, function () { 
     console.error(`
Node ${isDev ? 'dev server' : 'cluster worker' 
     + process.pid}:
     listening on port ${PORT}
`)
})
```

---

### *SMTP Email Server is complete! Congratulations!*

>NOTE: _If you encounter difficulty with the authentication process, read this Google Support documentation! It will save you hours of debugging and Excedrin._

---


<iframe class="liquidTag" src="https://dev.to/embed/twitter?args=1350970875835777026" style="border: 0; width: 100%;"></iframe>


---

## Conclusion

We’ve successfully created an SMTP Email Server using Express and Node. We also learned how to integrate Nodemailer and Gmail to streamline the mailing process.

---


<iframe class="liquidTag" src="https://dev.to/embed/github?args=killshot13%2Fexpress-smtp-mailer%20no-readme" style="border: 0; width: 100%;"></iframe>


---

Feel free to clone the source code and explore your own methods of implementation. I hope you have found this tutorial useful, and thank you for taking the time to follow along!

Don't forget to 💖 this article and leave a 💭. If you're feeling extra generous, please click my name below to 🎆subscribe🎇!

-- killshot13

---


<iframe class="liquidTag" src="https://dev.to/embed/user?args=killshot13" style="border: 0; width: 100%;"></iframe>


---




*[This post is also available on DEV.](https://dev.to/killshot13/how-to-build-an-smtp-mail-server-with-express-node-and-gmail-aof)*


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

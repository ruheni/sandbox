---
title: Introduction to the Notification API
draft: true
description: this is a simple introduction to the browser's Notification API with no use of external APIs
cover_image: https://apps4u.com/wp-content/uploads/2017/08/notifications.png
date: 2019-04-09T21:57:37+03:00
tags: #javascript, #browser_apis, #beginner
---

The Notifications API enables a website to send notifications outside the user’s browser, like system notifications. This allows the website or webapp to send information to the user in the background.

We are going to brush through the basics on how to set up and get started using this API.

This article is meant to be beginner friendly and only the basics knowledge of programming should be sufficient. 


# Step one: Checking current permission status.
You can check the status of the permission on your browser console using Notification.permission. It has three possible values: “default”, “denied” and “granted”.
```javascript 
Notification.permission
```

# Step two: Granting permission.
If the website or webapp has not been granted permission to start displaying notifications 
```javascript
Notification.requestPermission().then(function(res) {
  console.log(res);
});
```
# Step three: Create new notification.
Once permission has been granted to the user, you can use the constructor function to initialize a new notification and pass a string in a `Notification` constructor as the parameter, i.e. 

```javascript
let notification = new Notification('Hello there');
```

Now that we have known how to request for permission from the user, we can clean it up a little, and create a function called `notifyMe()` that will contain the code for checking permission, and sending the notifications from the website or web application.

```javascript
function notifyMe() {
	let img = 'https://img.icons8.com/color/48/000000/task.png';

	// check for browser support
	if (!('Notification' in window)) {
		alert('This browser does not support system notifications.');
	}
	// check whether notification permissions have already been granted
	else if (Notification.permission === 'granted') {
		// if ok, create notification
		let text = `Hey there, pick up groceries is now overdue`;

		let notification = new Notification('To Do list', {
			body: text,
			icon: img
		});
	}
	// otherwise, ask user for permission
	else if (
		Notification.permission === 'denied' ||
		Notification.permission === 'default'
	) {
		Notification.requestPermission(permission => {
			// if user accepts, let's create notification
			if (permission === 'granted') {
				let notification = new Notification('To Do list', {
					body: text,
					icon: img
				});
			}
		});
	}
}

// call the function
notifyMe();
```

As you might have noticed, the `Notification` constructor is able to take in a second argument, `options`, which is an object containing details such as the icon and text to be used in the body of the notification to enhance the content.

The image used is a clipboard to signify a given task. You can view it [here](https://img.icons8.com/color/48/000000/task.png) 

Here's the link to the Github repo with the code used in this article: 
{% github https://github.com/ruheni/sandbox/ %}

_This is my first technical article, if you have any suggestions on how to help improve my writing or what kind of content you would like me to write, feel free to send me a direct message_ 🙂 🙃

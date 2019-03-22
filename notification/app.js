// grant application to send notification
(function notifyMe() {
	let title = 'pick up groceries';
	let img = 'https://img.icons8.com/color/48/000000/task.png';

	// check if the browser supports notifications
	if (!('Notification' in window)) {
		alert('This browser does not support system notifications.');
	}
	// check whether notification permissions have already been grandted
	else if (Notification.permission === 'granted') {
		// if ok, create notification
		let text = `Hey there${title} is now overdue`;

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
				let notification = new Notification('Hello there');
			}
		});
	}
})();

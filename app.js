window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(async (res) => {
                console.log('service worker register',res)
                const permission = await window.Notification.requestPermission();
                if (permission !== 'granted') {
                    console.log('Permission not granted for Notification');
                }
                const options = {
                    body: "hello this is push notification",
                    icon: "https://images.vexels.com/media/users/3/151869/isolated/preview/767ca771755f4675d4063c03e17c8595-medical-checklist-icon-by-vexels.png",
                };
                res.showNotification("title", options)
            })
    }
})


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        for (var i = 0; i < json.length; i++) {
            var todo = document.getElementById('todo')
            var div = document.createElement("div");
            var h2 = document.createElement('h2');
            h2.setAttribute('class', 'todos')
            h2.innerHTML = json[i].title
            div.appendChild(h2)
            todo.appendChild(div);
        }
    })


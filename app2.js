let serviceWorkerRegister = async () => {
    const serviceWorker = await navigator.serviceWorker.register('service-worker.js')
    return serviceWorker
}


let pushNoti = async () => {
    const serviceWorker = await serviceWorkerRegister();
    const permission = await window.Notification.requestPermission();
    const title = "Saylani"
    const options = {
        body: "Mass Training"
    }
    serviceWorker.showNotification(title, options)
}
pushNoti()



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

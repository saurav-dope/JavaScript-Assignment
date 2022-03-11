console.log("-------------------Welcome-------------------");


let data;
fetchData();
let button = document.getElementById('btn');
button.addEventListener('click', fetchData);
function fetchData(e) {

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the Object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            data = JSON.parse(this.responseText);
            html = ""
            data.forEach(function (val) {
                if (val.completed === true) {
                    html += `<div style="width: 20vw; height: 35vh; border: solid; margin: 5px; display: inline-block; vertical-align: top; padding: 2.5%; background-color: 1AA7EC; color: black;" > <h5>${val.title}</h5>
            <p>id = ${val.id}</p>
            <p>userId = ${val.userId}</p>
            <p>status = completed</p> </div>`
                }
                else {
                    html += `<div style="width: 20vw; height: 35vh; border: solid; margin: 5px; display: inline-block; vertical-align: top; padding: 2.5%; background-color: 1AA7EC; color: black;" > <h5>${val.title}</h5>
            <p>id = ${val.id}</p>
            <p>userId = ${val.userId}</p>
            <p>status = pending</p> </div>`
                }

            });

            document.querySelector('.todos').innerHTML = html;
        }
        else {
            console.log("Some Error Has Occured!!! Please Try Again");
        }
    }

    // send the request
    xhr.send();



};

document.getElementById('completed').addEventListener('click', function (e) {

    let data1 = data.filter(x => x.completed);
    html = ""
    data1.forEach(function (val) {
        html += `<div style="width: 20vw; height: 35vh; border: solid; margin: 5px; display: inline-block; vertical-align: top; padding: 2.5%; background-color: #3EE200; color: black;" > <h5>${val.title}</h5>
        <p>id = ${val.id}</p>
        <p>userId = ${val.userId}</p>
        <p>status = Completed</p> </div>`
    });

    document.querySelector('.todos').innerHTML = html;
});


document.getElementById('pending').addEventListener('click', function (e) {

    let data1 = data.filter(x => !x.completed);
    html = ""
    data1.forEach(function (val) {
        html += `<div style="width: 20vw; height: 35vh; border: solid; margin: 5px; display: inline-block; vertical-align: top; padding: 2.5%; background-color: #FF3632; color: black;" > <h5>${val.title}</h5>
        <p>id = ${val.id}</p>
        <p>userId = ${val.userId}</p>
        <p>status = Pending</p> </div>`
    });

    document.querySelector('.todos').innerHTML = html;
});
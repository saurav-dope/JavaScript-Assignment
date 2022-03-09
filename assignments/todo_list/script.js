
let count = 0;
let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", function (e) {
    let todo = document.getElementsByTagName("input")[0].value;
    let tag = document.createElement("p");
    tag.setAttribute("key", count);
    let element = document.createTextNode(todo);
    tag.appendChild(element);
    

    let parent = document.getElementsByClassName("todos")[0];
    parent.appendChild(tag);
    
    document.querySelector(`p[key="${count}"]`).addEventListener("click", function (e) {
        
        parent.removeChild(this);
    })
    count += 1;
});


require("file-loader?name=index.html!./index.html")

let hello = document.getElementById("main")  
hello.innerHTML = "Hello World!"  

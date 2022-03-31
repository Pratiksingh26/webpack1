import "./index.css"

let data = JSON.parse(localStorage.getItem("todo_task")) || [];
console.log(data);

document.querySelector("#myform").addEventListener("submit",gettask)





function gettask(p){

    p.preventDefault();

    let task = document.querySelector(".task").value;
    let time = document.querySelector(".time").value;

    var obj = {

        task:task,
        time:time
    }
    data.push(obj)

    localStorage.setItem("todo_task", JSON.stringify(data))
    append(data);
}

function append(data){

    document.querySelector("tbody").innerHTML = null;

    data.map((elem)=>{

     
        let rows = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.classList.add("task")
        td1.textContent = elem.task

        let td2 = document.createElement("td")
        td2.classList.add("time")
        td2.textContent = elem.time

        rows.append(td1, td2)
        document.querySelector("tbody").append(rows)

    });

    
     
}
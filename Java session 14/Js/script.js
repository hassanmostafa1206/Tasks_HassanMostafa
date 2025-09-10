/*var span = document.querySelector(".text-primary span")
var spanElements = document.querySelectorAll('.text-primary span')

console.log(span)
console.log(spanElements)

function changeImg(){
    //console.log(ele)
    var img = document.querySelector('#img')
    console.log(img.src)
    if (img.src.includes("images/car.avif")) {
        img.src = "images/cin.png";
    } else {
        img.src = "images/car.avif";
    }
}
*/
var userName = document.getElementById('userName')
var userEmail = document.getElementById('userEmail') 
var userForm = document.getElementById('userForm')
var users = []

userForm.addEventListener("submit" , (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.target.elements.userName.value)
    console.log(e.target.elements.userEmail.value)

    var user = {
        name : e.target.elements.userName.value,
        email : e.target.elements.userEmail.value
    }

    users.push(user)
    console.log(users)

    showUser()
})

var showUser = () => {
    var tBody = document.getElementById('tableBody')
    console.log(users)
    tBody.innerText = ""

    users.forEach((item , i) => {
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerText = item.name
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        td2.innerText = item.email

        var editBtn = document.createElement('button')
        editBtn.innerText = "Edit user"
        editBtn.classList.add('btn' , 'btn-success' , 'btn-sm')
        editBtn.addEventListener('click' , ()=>{
            userName.value = item.name
            userEmail.value = item.email
            users.splice(i , 1)
        })

        var deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Remove user"
        deleteBtn.classList.add('btn' , 'btn-danger' , 'btn-sm' , 'ms-2')
        deleteBtn.addEventListener('click' , ()=>{
            users.splice(i , 1)
            showUser()
        })

        td3.append(editBtn)
        td3.append(deleteBtn)
        tr.append(td)
        tr.append(td2)
        tr.append(td3)
        tBody.append(tr)
    })
}
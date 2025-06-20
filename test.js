
let button;
button = document.getElementById("catbutton")
let r, g, b;
let color;

function clrimgchg() {


    if (button.style.backgroundColor == "black") {
        button.style.backgroundColor = "red"
        button.style.color = "black";
        document.getElementById("dog").src = "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"
    }
    else {

        button.style.backgroundColor = "black"
        button.style.color = "red";

        document.getElementById("dog").src = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
    // console.log(`the value is ${Math.floor(Math.random()*255)}`);


}

//arrow function

(() => { console.log("arrow fn"); })

    ()

function getName(e) {

    r = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    color = `rgb(${r},${g},${g})`
    document.getElementById("bg").style.backgroundColor = color




}

// function sum(n1,n2,p)
// {
//     p(n1+n2)
// }
// function p(res)
// {
//     console.log(res);
// }

// sum(1,2,p);

let student1 ={
    age:22,
    phone:6767676767,
    name:"davis",
    address:{
        home:{place:"kozhikode"},
        college:{place:"ernakulam"}
    }
}
let students=[student1]
console.log(student1.address.college.place);

function checkname(e){
    let name = e.target.value;
    console.log(name.length);
    if(name.length<3 || name.length>11)
    {
        console.log("error");
        document.getElementById("nameError").innerHTML="name bust be 3 to 12 characters"
         document.getElementById("nameError").style.color = "red";
    }
    else{
        console.log("valid");
          document.getElementById("nameError").innerHTML="valid";
          document.getElementById("nameError").style.color = "green";
    }

    
}
function checkemail(e){
    let email = e.target.value;
    const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(emailRegex.test(email));
    if(emailRegex.test(email)){
        document.getElementById("emailError").innerHTML="valid";
        document.getElementById("emailError").style.color = "green";
    }
    else{
        document.getElementById("emailError").innerHTML="not valid";
         document.getElementById("emailError").style.color = "red";
    }
}
function checkpass(e){
    let pass = e.target.value;
    const passRegex = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    console.log(passRegex.test(pass));
    if(passRegex.test(pass)){
        document.getElementById("passError").innerHTML="valid";
        document.getElementById("passError").style.color = "green";
    }
    else{
        document.getElementById("passError").innerHTML="not valid";
         document.getElementById("passError").style.color = "red";
    }
    
}

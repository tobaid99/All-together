
// choose the course 
function myFunction(){
    document.getElementById("myweb").value ="Codeacademy";
}


// more details click button
const elemetnt =document.getElementById("evntbutton");
elemetnt.addEventListener("click" ,pFunction);

function pFunction(){
    document.getElementById("details").innerHTML = "  Hello and a warm welcome to all the aspiring programmers joining our website";
    
}



//welcome message when choose course
const elemetnt1 =document.getElementById("book");
document.getElementById("book").addEventListener("click", cFunction);

function cFunction(){
    alert("Welcome in Your Course");
}



for(let i=0 ; i<book.elemetnt ; i++){
    if(i==="HTML"){
        alert("Welcome in HTML");
    }
    if(i==="CSS"){
        alert("Welcome in CSS");
    } if(i==="JSCRIPT"){
        alert("Welcome in JSCRIPT");
    }

}
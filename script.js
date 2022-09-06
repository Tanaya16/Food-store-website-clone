// PIZZA MENU FUNCTION
function myFunctionPizza(){
    var x = document.getElementById("pizza-menu")

    if (x.style.display == "block")
    {
     x.style.display = "none";
    }
    else{
     x.style.display = "block";
    }
}

// PASTA MENU FUNCTION
function myFunctionPasta(){
    var y = document.getElementById("pasta-menu")

    if(y.style.display == "none"){
        y.style.display = "block";
    }
    else{
        y.style.display = "none";
    }
} 

// function myFunction(){
//     var x = document.getElementById("menu");

//     if (x.style.display == "block"){

//         x.style.display = "none";

//     } else{

//         x.style.display = "block";

//     }
// }
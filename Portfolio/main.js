window.onload = work4;
function work4() {
    document.getElementById("assing").innerHTML='<object type="text/html" data="assignment3/assignment3/recipe.html" style="width: 100vw; height: 100vh;"></object>';
    document.getElementById("work4").className = "active";
    document.getElementById("work5").className = "";
    document.getElementById("work6").className = "";
    document.getElementById("work7").className = "";
}
function work5() {
    document.getElementById("assing").innerHTML='<object type="text/html" data="java/index.html" style="width: 100vw; height: 100vh;"></object>';
    document.getElementById("work4").className = "";
    document.getElementById("work5").className = "active";
    document.getElementById("work6").className = "";
    document.getElementById("work7").className = "";
}
function work6() {
    document.getElementById("assing").innerHTML='<object type="text/html" data="assignment6/assignment6/register.html" style="width: 100vw; height: 100vh;"></object>';
    document.getElementById("work4").className = "";
    document.getElementById("work5").className = "";
    document.getElementById("work6").className = "active";
    document.getElementById("work7").className = "";
}
function work7() {
    document.getElementById("assing").innerHTML='<object type="text/html" data="assignment7/assignment7/index.html" style="width: 100vw; height: 100vh;"></object>';
    document.getElementById("work4").className = "";
    document.getElementById("work5").className = "";
    document.getElementById("work6").className = "";
    document.getElementById("work7").className = "active";
}

//"Load HTML page in div" ref: https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascriptv
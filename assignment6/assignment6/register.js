window.onload = pageLoad;
function pageLoad()
{
	let Regisuser = document.getElementById("myForm");
	Regisuser.onsubmit = validateForm;
}

function validateForm() 
{
    var Password = document.forms['myForm']['password'].value;
    var RePassword = document.forms['myForm']['Retype Password'].value;

    if(Password != RePassword){
        alert("Password ไม่ตรงกัน")
        return false;
    }
    else{

    }
    

    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}
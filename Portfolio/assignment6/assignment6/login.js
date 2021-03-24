window.onload = loginLoad;
function loginLoad()
{
	let checkuser = document.getElementById("myLogin");
	checkuser.onsubmit = checkLogin;
}

function checkLogin()
{
	const checkurl = new URLSearchParams(window.location.search);
	const Username = checkurl.get('username');
	const Password = checkurl.get('password');

	var Usernamelogin = document.forms['myLogin']['username'].value;
    var Passwordlogin = document.forms['myLogin']['password'].value;

	if(Username == Usernamelogin && Password == Passwordlogin )
	{
		alert("Welcome")	
	}
	else
	{
		alert("Username or Password ไม่ถูกต้องนะจ้ะ")
		return false;

	}
	
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			
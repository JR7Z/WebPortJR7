var timer = null;
var gamestart = false;
window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;

}

function startGame(){
	if (gamestart == false)
	{
		gamestart = true;
		alert("Ready");
		addBox();
		timeStart();
	}
	
}

function timeStart()
{
	var TIMER_TICK = 1000;	
	var min = 0.5; // 0.5 minute
	var second = 10; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK) ;
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		x.innerHTML = "Timer: " + second;
			console.log(second);
			second--;
		

		if (x.innerHTML == "Timer: 0") //ถ้าเวลายังไม่หมด
		{
			alert("Time out!")			
			clearInterval(timer);//เคลียการจับเวลา
			timer = null; //reset timer
			clearScreen();	
			gamestart = false;
			second = 10;
		}
		
		
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("game-layer");
    var colorDrop = document.getElementById("color").value;
    for (var i =0; i<numbox;i++){       
        var tempbox = document.createElement("div");
        tempbox.className = "square";
        tempbox.id = "box"+i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
        //add element to HTML node
        gameLayer.appendChild(tempbox) ;        
        bindBox(tempbox);
	}
}

function bindBox(playbox){
	//เมื่อกดแล้ว กล่องจะหายไป
	playbox.onclick = function(){
		console.log("click" + playbox.id);
        document.getElementById(playbox.id).remove();
		checkGame();
	}
}

function checkGame() {
	var allbox = document.getElementById("game-layer");
	if (allbox.childElementCount == 0) {
		alert("Win!");
		clearInterval(timer);
		clearScreen();
		gamestart = false;
		second = 10;
	}
}

function clearScreen() {
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	gameplay=false;
	var allbox = document.getElementById("game-layer");
	console.log(allbox.childElementCount);
	while (allbox.firstChild) {
		allbox.removeChild(allbox.lastChild);
	}
	
}


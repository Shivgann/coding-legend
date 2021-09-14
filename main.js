canvas = document.getElementById('myCanvas');
ctx = canvas.getcontext("2d");

img_width = 300;
img_height = 100;

var img_image = new Image();

img_x = 100;
img_y = 100;

function add() {
	var img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_image, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122) || (keyPressed >=65 && keyPressed<=90))
		{
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed Aplhabet  Key";
		console.log("alphabetkey");
		
		
		}
		
		if((keyPressed >=48 && keypressed<=57))
		{
			numberkey();
			document.getElementById("d1").innerHTML="You pressed Number  Key";
				console.log("numberkey");
		}
		if((keyPressed >=37 && keypressed<=40))
		{
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow other Key";
				console.log("arrowkey");
		}

		if((keyPressed >=48 && keypressed<=57))
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed Special  Key";
				console.log("specialkey");
		}
		if((keypressed<=0))
		{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed Other Key";
				console.log("otherkey");
		}

}


function aplhabetkey()
{
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	

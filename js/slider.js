var index=1;
function nextBody(){
	var image = document.getElementById("ibody");
	index++;
	if(index==3){
		index=1;
	}
	image.src="img/t-shirt-"+index+".png";
	console.log(image);
}
function prevBody(){
	var image = document.getElementById("ibody");
	index--;
	if(index==0){
		index=2;
	}
	image.src="img/t-shirt-"+index+".png";
	console.log(image);
}
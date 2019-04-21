var index=1;
function nextLegs(){
	var image = document.getElementById("ilegs");
	index++;
	if(index==4){
		index=1;
	}
	image.src="img/mjeans_"+index+".png";
	console.log(image);
}
function prevLegs(){
	var image = document.getElementById("ilegs");
	index--;
	if(index==0){
		index=3;
	}
	image.src="img/mjeans_"+index+".png";
	console.log(image);
}
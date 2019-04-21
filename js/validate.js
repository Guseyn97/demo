function validate(){

	var name = document.getElementById("name");
	var email = document.getElementById("email");

	if(!name.value  ){
		name.style.border = "1px solid red";
		name.style.boxShadow=" 0 0 10px red inset";
		name.placeholder="Поле обязательно для заполнения";
		return false;
	}
 //    if(!password.value){
	// 	password.style.border= "1px solid red";
	// 	password.style.boxShadow="0 0 10px red inset";
	// 	password.placeholder="Поле обязательно для заполнения";
	// 	return false;
	// }
 	if(!email.value){
		email.style.border="1px solid red";
		email.style.boxShadow="0 0 10px red inset";
		email.placeholder="Поле обязательно для заполнения";
		return false;
	}
	return true;
}
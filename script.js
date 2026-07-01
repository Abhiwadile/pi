function sendMessage(){

let message=document.getElementById("message").value;

if(message.trim()==""){

alert("Please write something ❤️");
return;

}

// Replace with your WhatsApp number
let phone="918208007095";

let finalMessage=
"Message from Piu ❤️\n\n"+message;

window.open(
"https://wa.me/"+918208007095+"?text="+encodeURIComponent(finalMessage),
"_blank"
);

}
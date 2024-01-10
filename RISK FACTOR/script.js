
document.getElementById("bttn").addEventListener("click", calculate);  


function calculate(){
  var bpd = document.getElementById('dsbp').value;
  var bps = document.getElementById('sbp').value;
  var temp = document.getElementById('bt').value;
  var age = document.getElementById('mother').value;
  
 if(bpd>135){
  prompt("RISK❗" + " " + "YOU SHOULD CONSULT A DOCTOR.\n\n\n" + "Give Your Valuable Feedback :");
  alert("THANKS FOR YOUR VALUABLE TIME!");

 }
 else if(bps<70){
  prompt("RISK❗" + " " + "YOU SHOULD CONSULT A DOCTOR.\n\n\n" + "Give Your Valuable Feedback :");
  alert("THANKS FOR YOUR VALUABLE TIME!");
 }
 else if(temp>=103){
  prompt("RISK❗" + " " + "YOU SHOULD CONSULT A DOCTOR.\n\n\n" + "Give Your Valuable Feedback :");
  alert("THANKS FOR YOUR VALUABLE TIME!");
 }
 else if(age>35){
  prompt("RISK❗" + " " + "YOU SHOULD CONSULT A DOCTOR.\n\n\n" + "Give Your Valuable Feedback :");
  alert("THANKS FOR YOUR VALUABLE TIME!");
 }
 else{
  prompt("NO RISK!\n 👍" + " " + "You Should Consult a Doctor.\n" + "GIVE YOUR VALUABLE FEEDBACK :");
  alert("THANKS FOR YOUR VALUABLE TIME!");
 }

}


function doForm () {
  // (B1) FORM DATA OBJECT
  var data = new FormData();

  // (B2) APPEND FIELDS
  var pw = document.getElementById("user_name").value
  console.log(pw)
  if (pw === '3442'){
    window.location.replace("home.html");
  }
  else{
    window.alert("WROOONGG");
  }
  

  // (B3) WHATEVER YOU WANT TO DO NEXT
  

  return false;
  
}
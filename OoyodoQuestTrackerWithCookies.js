$(function () {

  //  *********   GLOBAL VARIABLES   ************

  //default color object
 
    // load the user quest cookie or create an empty one
    var questCookie = getCookie('user_quests'); || "coucou";
    //TODO change it it to cookie time
   
  console.log(JSON.stringify(questCookie));
 setCookie('user_quests',"saved",1);
  


});

//create a cookie
function setCookie(cname, cvalue, exdays) {
  if(getCookie("acceptCookies")){
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}

//get cookie data
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

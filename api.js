$.ajax({

  // The 'type' property sets the HTTP method.
  // A value of 'PUT' or 'DELETE' will trigger a preflight request.
  type: 'GET',

  // The URL to make the request to.
  url: 'https://swapi.co/api/people/',

  // The 'contentType' property sets the 'Content-Type' header.
  // The JQuery default for this property is
  // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
  // a preflight. If you set this value to anything other than
  // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
  // you will trigger a preflight request.
  contentType: 'text/plain',

  xhrFields: {
    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    // This can be used to set the 'withCredentials' property.
    // Set the value to 'true' if you'd like to pass cookies to the server.
    // If this is enabled, your server must respond with the header
    // 'Access-Control-Allow-Credentials: true'.
    withCredentials: false
  },

  headers: {
    // Set any custom headers here.
    // If you set any non-simple headers, your server must include these
    // headers in the 'Access-Control-Allow-Headers' response header.
  },

  success: function() {
    // Here's where you handle a successful response.
  },

  error: function() {
    // Here's where you handle an error response.
    // Note that if the error was due to a CORS issue,
    // this function will still fire, but there won't be any additional
    // information about the error.
  }
});



function otherName()
{
var input = document.getElementById("userInput"); // $("#userInput") - samma sak
alert(input);
}

var sender = document.getElementById("sub");

sender.addEventListener("click", setInputText, false);
var rand = ['Luke', 'Kenobi', 'Leia Organa' ,'Darth Vader','R2-D2' ,'Owen Lars','C-3PO'][Math.floor(Math.random() * 7)] //random array

var inpTxt = rand;

function setInputText (){
    inpTxt = document.getElementById("prompt").value;
    //document.getElementById("usertxt").innerHTML = inpTxt;
    getData();
}; //get name 



$(document).ready(function(){
    getData();

});

function getData() {
  // do jQuery
   var starwars;
  $.get('https://swapi.co/api/people/', function(response) {
   starwars = response.results;
   console.log(inpTxt);
   var query = inpTxt; //replace this with input if you get it to work.
   var found;
   for (var i = 0; i <= starwars.length; i++) {
    if (starwars[i] && starwars[i].name.indexOf(query) > -1) {
      found = starwars[i];
    }
   }

   
   console.log(found);
   document.getElementById('output1').innerHTML = ("Name: "+ found.name +
    "<br>Height: " +found.height+"<br>Eye color: "+found.eye_color+
    "<br>Weight: "+found.mass+"<br>Birth year: "+found.birth_year+"<br>Gender: "+found.gender);
  
  });
}

/*
Random Image Script- By JavaScript Kit (http://www.javascriptkit.com) 
Over 400+ free JavaScripts here!
Keep this notice intact please
*/

function random_imglink(){
var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="http://67.media.tumblr.com/7c53a0454aa607ef4cec820972961e69/tumblr_o5fiynvcm41rlapeio1_540.gif"
myimages[2]="http://bestanimations.com/Sci-Fi/StarWars/yoda-sat-wars-animated-gif-3.gif"
myimages[3]="http://i.imgur.com/Fpkz2Va.gif"
myimages[4]="https://media.giphy.com/media/vt4gALQsxCDmM/giphy.gif"
myimages[5]="https://media.giphy.com/media/EXwLWGViGKevm/giphy.gif"
myimages[6]="http://i4.photobucket.com/albums/y145/MoonlightStorm/gifs/gifleiashutup.gif"

var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.write('<img src="'+myimages[ry]+'" border=0>')
}
random_imglink()
//-->

/*$(document).ready(function(){
   // do jQuery
   var entry = "";
   var starwars2;
	$.get('http://swapi.co/ap/planets', function(response) {
	 starwars2 = response.results;
	 var query = entry;
	 var found;
	 for (var i = 0; i <= starwars2.length; i++) {
	 	if (starwars2[i] && starwars2[i].name.indexOf(query) > -1) {
	 		found = starwars2[i];
	 	}
	 }
	 
	 
	 console.log(found);
	 document.write("Name: "+ found.name +"<br>Climate: " +found.climate);
	});
});*/



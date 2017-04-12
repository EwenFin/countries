var app = function(){
  var url = "https://restcountries.eu/rest/v2";
  var button = document.querySelector("button")
  button.onclick = function(){
    makeRequest(url, requestComplete); 
  }
}

var requestComplete = function(){
  if(this.status !== 200) return;
  //grab the response text
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  populateList(countries);
}

var populateList = function(countries){
  var ul = document.querySelector("#country-list");
  countries.forEach(function(country){
    var li = document.createElement("li");
    li.innerText = country.name
    var flag = document.createElement("img")
    flag.width = 200
    flag.src = country.flag;
    li.appendChild(document.createElement("br"));
    li.appendChild(flag);
    ul.appendChild(li);
  })
}

var makeRequest = function(url, callback){
  //create a new XMLHttpRequest object
  var request = new XMLHttpRequest();
  request.open("GET", url);
  //tell it what function to run once complete
  request.onload = callback;
  //send the request
  request.send();
}


   


window.onload = app;
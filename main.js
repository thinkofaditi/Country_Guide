



function myFunction(search) {

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data,search))
.catch(err => console.log("Error:", err));
}
function initialize(countriesData,search) {
  var countries = countriesData;
  var temp;
 // var display = document.createElement('display');
document.write('<a href="' + document.referrer + '">Go Back</a>');

 //     display.innerHTML = '';
  for(var i=0;i<countries.length;++i)
   {
   	
   	// console.log(search);
   	 if(countries[i].name.toLowerCase()==search.toLowerCase()){
   		 // display.innerHTML +=
      //    '<span style="display:inline;"><img src="'+countries[i].flag+'"></span>';

      document.write("<div style=\"card\"><img src="+countries[i].flag+" style=\"width:50%;height:50%;\"><div class=\"container\"><h4><b>"+countries[i].name+"</b></h4></div></div>");
    // document.querySelector("#display").src = "countries[i].flag;
    document.write("<div class=\"container\"><p><b>Capital: </b>"+countries[i].capital+"</p></div>");
    document.write("<div class=\"container\"><p><b>Population: </b>"+countries[i].population+"</p></div>");
    document.write("<div class=\"container\"><p><b>Region: </b>"+countries[i].region+"</p></div>");
    document.write("<div class=\"container\"><p><b>SubRegion: </b>"+countries[i].subregion+"</p></div>");
    
    document.write("<div class=\"container\"><p><b>Calling Codes: </b>"+countries[i].callingCodes[0]+"</p></div>");
   }
   }
    // console.log(display);
    //     document.getElementById('search').appendChild(display);

}


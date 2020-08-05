async function getCountries()           ////Async await function to fetch the countries data
{
    try {
        var url='https://restcountries.eu/rest/v2/all';
        var response=await fetch(url);
        console.log(response);
        var result= await response.json();
        ShowCountries(result);
        
    } catch (error) {
        console.log(error);
    }
   

}
getCountries();

function ShowCountries(Countries)  ////////////Showing the countries in Page Dynamically
{
    var maindiv=document.createElement("div");
    maindiv.className="container";
    maindiv.id="ContainerDiv";

    var card=[],Countryname=[],CountryImage=[],capital=[],CountryCode=[],Region=[],weather=[],weathername=[];
    var column=[],row=[];
    for (var j = 0; j <1; j++) {    

     row[j]=document.createElement("div");
     row[j].className="row";
    for (let i = 0; i < Countries.length; i++) {

        column[i]=document.createElement("div");
        column[i].className="col-sm-3"

    card[i]=document.createElement("div");
    card[i].className="card";
  

    Countryname[i]=document.createElement("div");
    Countryname[i].className="Countryname";
    Countryname[i].innerHTML=i+1+"). "+Countries[i].name;
    card[i].appendChild(Countryname[i]);

    CountryImage[i]=document.createElement("img");
    CountryImage[i].src=Countries[i].flag;
    CountryImage[i].className="card-img-top";
    card[i].appendChild(CountryImage[i]);

    capital[i]=document.createElement("div");
    capital[i].className="CountryDetails";
    capital[i].innerHTML="Country Capital : "+Countries[i].capital;
    card[i].appendChild(capital[i]);

    
    CountryCode[i]=document.createElement("div");
    CountryCode[i].className="CountryDetails";
    CountryCode[i].innerHTML="Country Codes : "+Countries[i].alpha2Code+","+Countries[i].alpha3Code;
    card[i].appendChild(CountryCode[i]);

    
    Region[i]=document.createElement("div");
    Region[i].className="CountryDetails";
    Region[i].innerHTML="Region : "+Countries[i].region;
    card[i].appendChild(Region[i]);

    weather[i]=document.createElement("button");
    weather[i].className="weather";
    weathername[i]=document.createTextNode("Click here for weather");
    weather[i].appendChild(weathername[i]);
    card[i].appendChild(weather[i]);

    column[i].appendChild(card[i]);
    row[j].appendChild(column[i]);
    }
    
    maindiv.appendChild(row[j]);
}

    document.body.appendChild(maindiv);
    console.log(Countries);
    
    
    async function GetTemperature( cityname, countryname) { ///fetching the temperature fro the county caital using async await
        
        var apikey='d99e7c34bf6c24b2ea60e742ab8a93d8';
        var url="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+apikey;
        try {
            var tempfetch= await fetch(url);
            var response= await tempfetch.json();
            console.log(response);
            console.log(response.main.temp);
            let tempera=response.main.temp-273.15;
            alert("The temperature in "+ cityname+", Capital city of "+countryname+" is "+tempera+"⁰ Celsius.");

            
        } catch (error) {
            console.log(error);
        }
    }


    for (let i = 0; i < Countries.length; i++) {
            weather[i].addEventListener('click',()=>
            {
                GetTemperature(Countries[i].capital,Countries[i].name);
            })
            
        }
}




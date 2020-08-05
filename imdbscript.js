// api key https://omdbapi.com/?apikey=4c7fa3da&t=super%20man



var Firstdiv= document.createElement('div');
Firstdiv.className="maindiv";
var heading=document.createElement('h1');
heading.innerText="IMDB movie search with Async and await.";
Firstdiv.appendChild(heading);
var entermsg=document.createElement('h3');
entermsg.innerText="Enter the movie name.";
Firstdiv.appendChild(entermsg);

var searchbox=document.createElement('input');
searchbox.className="Moviesearch";
searchbox.placeholder="Enter movie name here.";
Firstdiv.appendChild(searchbox);

var searchbutton=document.createElement("button");
searchbutton.className="searchbutton";
var buttontxt=document.createTextNode("Search");
searchbutton.appendChild(buttontxt);
Firstdiv.appendChild(searchbutton);

var moviecard= document.createElement('div');
moviecard.className="card";

var movietitle=document.createElement('h4');
movietitle.className="moviename";
moviecard.appendChild(movietitle);
 var movieposter=document.createElement('img');
 movieposter.className="movieposter";
 moviecard.appendChild(movieposter);


 var IMDBrating=document.createElement("div");
 IMDBrating.className="moviedetails";
 moviecard.appendChild(IMDBrating);
var Genre =document.createElement("div");
Genre.className="moviedetails";
moviecard.appendChild(Genre);
var Language=document.createElement("div");
Language.className="moviedetails";
moviecard.appendChild(Language);

searchbutton.addEventListener('click',()=>
{
    GetMovieDateils(searchbox.value)
})
searchbox.addEventListener("keyup",()=>
{
    if (event.keyCode===13) {
        searchbutton.click();
    }
})

async function GetMovieDateils(moviename)
{
    console.log(moviename);
    var url= 'https://omdbapi.com/?apikey=4c7fa3da&t='+moviename;
    try {
        var request= await fetch(url);
    var response = await request.json();
    console.log(response);
    if (response.Response=="True")
    {
        console.log(response.Response);
        movietitle.innerText=response.Title;
        movieposter.setAttribute("src",response.Poster);
        IMDBrating.innerHTML="IMDB rating : "+response.imdbRating;
        Genre.innerHTML="Genre :"+response.Genre;
        Language.innerHTML="Language :"+response.Language;
    }
    else{
        alert("Incorrect Movie name entered.")
    }
    } catch (error) {
        console.log(error);
        alert("error occured");
    }


}
Firstdiv.appendChild(moviecard);
document.body.appendChild(Firstdiv);
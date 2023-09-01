let library=[];
library.push({
    title:"Harry potter",
    author:"J k rowlin",
    yearpublished:1965,
    readstatus:"Yes"

})
library.push({
    title:"Making India Awesome",
    author:"Chetan Bhagat",
    yearpublished:1975,
    readstatus:"Yes"

})
library.push({
    title:"A Million Mutinies Now ",
    author:"V.S. Naipaul",
    yearpublished:1977,
    readstatus:"No"

})
library.push({
    title:"A Brush with Life",
    author:"V.S. Naipaul",
    yearpublished:1987,
    readstatus:"Yes"

})
let ale=document.getElementById("ale")
function addbook(){
    // let title=document.getElementById('title').value;
    let author=document.getElementById('author').value;
    let yearpublished=document.getElementById('year').value;
    let status=document.getElementById('status').value;
    library.push( {
        title:document.getElementById('title').value,
        author:author,
        yearpublished:yearpublished,
        readstatus:status

    }
    );
    console.log(library);
    document.getElementById('message').innerHTML="<b>New BOOK</b> added to your library"
    ale.removeAttribute('hidden');

}
document.querySelector('#sumbit').addEventListener('click',addbook);

function addBookToFront(){
    library.unshift({
        title:document.getElementById('title').value,
        author:document.getElementById('author').value,
        yearpublished:document.getElementById('year').value,
        readstatus:document.getElementById('status').value

    });
    console.log(library);
    document.getElementById('message').innerHTML="<b>New BOOK</b> added to front of  your library"
    ale.removeAttribute('hidden');
}
document.querySelector("#addfront").addEventListener('click',addBookToFront);

function removeFirstBook(){
    library.shift();
    console.log(library);
    document.getElementById('message').innerHTML="<b>FIRST BOOK </b>has been removed from your library"
    ale.removeAttribute('hidden');
}

document.querySelector("#removefront").addEventListener('click',removeFirstBook);
function removeLastBook(){
    library.pop();
    console.log(library);
    document.getElementById('message').innerHTML="<b>OLD BOOK</b> has been removed from  your library"
    ale.removeAttribute('hidden');
}
document.querySelector("#removelast").addEventListener('click',removeLastBook);

function getAlltitles(){
    let arr=library.map((book)=>book.title);
    document.getElementById("titles").innerHTML="\n"+arr+"\n";

}
document.querySelector("#Onlytitle").addEventListener('click',getAlltitles);

function getbooksbyauthor(){
    const name = prompt("Author name");
    let author1=library.filter((book)=>(book.author == name)).map((book)=>(book.title));
   
    document.getElementById('Author').innerHTML= author1 ;

}

function getBookbyReadstatus(){
    const name = prompt("Read status !! ");
    let bookread=library.filter((book)=>(book.readstatus==name)) .map ((book) => (book.title + ""));
    document.getElementById('result').innerHTML='Search Results';
    document.getElementById("results").innerHTML=bookread; 

}

function getbookbyyear(){
    const year = parseInt(prompt("Enter the Year"));
    let booksByYear=library.filter((book)=>(book.yearpublished<year));
    document.getElementById('result').innerHTML='Search Results';
    document.getElementById("results").innerHTML="The no of books present before given year :<br>"+booksByYear.length; 
    

}
function getSublibrary(){
    const value1=  parseInt(prompt("Enter the start value (the value starts at 1)"));
    const value2=  parseInt(prompt("Enter the end value"));
    let result=library.slice(value1-1,value2-1).map((book)=>("("+book.title+":"+book.author+":"+book.yearpublished+":"+book.readstatus+")"));

    document.getElementById('result').innerHTML='Search Results';
    document.getElementById("results").innerHTML=`The Sublibrary :<br>${result}`; 



}
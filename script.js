const container=document.createElement('div')
container.setAttribute('class','containerid')
document.body.append(container)
container.innerHTML=`
<h1 class="heading">FIND LINKS OF YOUR FAVOURITE TV SHOW</h1>
<input class="textinput" placeholder ="Type the show name"type="text"/>
<button class="button">search</button>
`
const onsearch=document.querySelector('.button')
onsearch.addEventListener('click',(event)=>{
  const showname =document.querySelector('.textinput').value;
  displaydataonscreen(showname)
})
async function displaydataonscreen(showname){
  try{
    let url=`https://api.tvmaze.com/search/shows?q=${showname}`
     const response=await fetch(url)
    const data= await response.json();
    const result = data.map(ele=> ele.show.url);
    const resultcontainer=document.createElement('div')
     resultcontainer.setAttribute('class','resultid')
    document.body.append(resultcontainer);
    
    const divtamil=document.createElement('div') 
    divtamil.innerHTML=`<p>LINK 1:${result[0]}</p>
    <p>LINK 2:${result[1]}</p>
    <p>LINK 3:${result[2]}</p>
    <p>LINK 4:${result[3]}</p>
    <p>LINK 5:${result[4]}</p>
    <p>LINK 6:${result[5]}</p>`      
    resultcontainer.append(divtamil)
  }
  catch(error){
    console.log(error.message)
  }
}


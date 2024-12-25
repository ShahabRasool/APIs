let output = document.querySelector('.output');
let details = document.querySelector('.details');
// let inputdiv = document.querySelector('.inputdiv')
let mainurl = 'https://pokeapi.co/api/v2/generation/';
let search = document.querySelector('#search');
let input = document.querySelector('#searchid');

search.addEventListener('submit', function(event){
    event.preventDefault();
    let gitid = input.value;
    outputdata(gitid); 
});

async function outputdata(id){
    let step1 = await fetch(mainurl + id);
    let step2 = await step1.json();
    let alldata = step2.moves;

    output.innerHTML = ''; // Clear previous results

    alldata.map(function(data){
        let displayName = data.name;
        let nameurl = data.url;
        // console.log(nameurl);
        let html = `
        <div class="record">
            <li><a href="${nameurl}" class="data-link" data-url="${nameurl}">${displayName}</a></li>
        </div>`;
        output.insertAdjacentHTML('afterbegin', html);
    });
}

outputdata(2);

document.addEventListener('click', function(e){
    if(e.target.classList.contains('data-link')){
        e.preventDefault();
        let url = e.target.getAttribute('data-url');
        getDetails(url);

    }
});
console.log(getDetails);

async function getDetails(url){
    let data = await fetch(url);
    let response = await data.json();
    // console.log(response);
    let html = `
       <div class="details-content">  
          <h2>${response.name}</h2>
          <p>${response.effect_entries[0].effect}</p>
                 </div>
    `; 
    setTimeout(function(){
        details.innerHTML = html;

    },3000)
}


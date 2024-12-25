let output = document.querySelector('.output')
let baseurl = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';

async function fulldata(){
    let step1 = await fetch(baseurl);
    let step2 = await step1.json();
  
    let alldata =step2.departments;
  alldata.map(function(data){
        let html =`
        <div class=record>
        <li>${data.departmentId} ${data.displayName}</li>
        </div> `
        setTimeout(function() {
            output.insertAdjacentHTML("afterbegin", html);
        },2000);
    }).join(' ');
}
fulldata();



let objectend = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
let inputhtml =document.querySelector('.input')
let search = document.querySelector('#search');
let input = document.querySelector('#searchid');

search.addEventListener('submit', function(event){
    event.preventDefault();
    let gitid = input.value;
    
   
    fetchobj(gitid); 
});

function fetchobj(id) {
    fetch(objectend + id)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let html =`
            <div class=depertment>
            <li>${data.department} ${data.title}</li>
            <img src='${data.primaryImage}'/>
            </div>
            `
            inputhtml.insertAdjacentHTML("beforeend", html);
        })
        
}
fetchobj(437156);









// document.querySelectorAll('.hidden-link').forEach(function(link){
//     link.addEventListener('click', function(event){
//         event.preventDefault();
//         window.open(event.target.getAttribute('data-url'), '_blank');
//     });
// });




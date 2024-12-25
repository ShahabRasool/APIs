
let output = document.querySelector('.output')
let outpcontent = document.querySelector('.outpcontent')
let search = document.querySelector('#search');
let input =document.querySelector('#searchid')


search.addEventListener('submit',function(event){
    event.preventDefault();
    let gitid= input.value.trim();
    // getitem(gitid);
    if(gitid){

        getitem(gitid)
    }else{
        outpcontent.innerHTML='<strong>Recipe empty</strong>'

    }

    
})
// output.innerHTML ='Loading....'
// not working the quary
async function getitem(query){
    try{
    let getmain= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    let getclone =await getmain.json()
    console.log(getclone);
    let alldata = getclone.meals;
    console.log(alldata);
    outpcontent.innerHTML = ''; // Clear previous results

    alldata.map(function(data){
        let html=`
          <div class="meal">
            <span>${data.strArea}</span>
            <h1>${data.strMeal}</h1>
            <img src="${data.strMealThumb}" alt="${data.strMeal}">
            <p>${data.strCategory}</p>
            <p>${data.strIngredient1}</p>
            <p>${data.strIngredient2}</p>
             <p><strong>Video:</strong> <a href="${data.strYoutube}" target="_blank">Watch</a></p>
        </div>
        `
        outpcontent.insertAdjacentHTML('afterbegin',html)
    }).join(',');
}
catch{
    outpcontent.innerHTML='<strong>Recipe did not find</strong>'
}
}

// export default meals;




var cafez=[
    {name:"Cafe Rum",
    Location: "Cuba",
    Phone:"12345678",
    id:"cafe1",
    price:"USD3",
    Image:"image/cafe1.jpg",
    Food:["North Indian", "South Indian","All","Street Food"],
    Food2:[{type:"American"},{type:"Australian"}]
    },
    {name:"Cafe Licia",
    Location: "French",
    Phone:"7911131517",
    price:"USD12",
    id:"cafe2",
    Image:"image/cafe2.jpg",
    Food:["North Indian", "Fast Food", "Street Food","All"],
    Food2:[{type:"Mexican"},{type:"Brazilian"}]
    },
    {name:"Cafe Tuccini",
    Location: "Italy",
    Phone:"369121518",
    id:"cafe3",
    price:"USD11",
    Image:"image/cafe3.jpg",
    Food:["South Indian", "Fast Food", "Chinese", "North Indian"],
    Food2:[{type:"Japanese"},{type:"Indonesian"}]
    },
    {name:"Cafe Ver",
    Location: "China",
    Phone:"930301003",
    id:"cafe4",
    price:"USD2",
    Image:"./image/cafe4.jpg",
    Food:["Chinese", "Fast Food", "Street Food", "South Indian"],
    Food2:[{type:"Morrocan"},{type:"Korean"}]
    
    },
    {name:"Cafe Lyne",
    Location: "Malaysia",
    Phone:"747747747",
    id:"cafe5",
    price:"USD0.8",
    Image:"./image/cafe5.jpg",
    Food:["Chinese", "Fast Food", "Street Food", "South African"],
    Food2:[{type:"Malaysian"},{type:"Indonesian"}]
    
    }
];

console.log(cafez[2].Location);

var x="elon";


cafez.forEach(cafeFunction=>{

    
    let cafecyril=document.createElement("button");
    cafecyril.phone=cafez.phone;
    cafecyril.innerHTML=`<div class="cafeImageContainer">
                            <img src=${cafeFunction.Image} class="cafeImage" id=${cafez.id}>
                        </div>
                        <div class="cafeInfoContainer">
                            <span>Cafe Name: ${cafeFunction.name}</span><br/>
                            <span>Cafe Location: ${cafeFunction.Location}</span><br/>
                            <span>Avg. Food Price: ${cafeFunction.price}</span><br/>
                            
                            <span id="foodType2">
                            <button>${cafeFunction.Food[0]}</button>
                            <button>${cafeFunction.Food[1]}</button>
                            <button>${cafeFunction.Food[2]}</button>
                            <button>${cafeFunction.Food[3]}</button>
                            </span><br/>
                        </div>`;

    document.getElementById("showCafe").appendChild(cafecyril);

    // for(i=0;i<cafeFunction.Food.length-1;i++) {
    //     var foodType=document.getElementById("foodType");
    //     var foodTypeButton=document.createElement("button");
    //     foodTypeButton.innerHTML=cafeFunction.Food[i];
    //     foodType.appendChild(foodTypeButton);

    // }
    // var foodType=document.getElementById("foodType");
    // var foodTypeButton=document.createElement("button");
    

    cafeFunction.Food2.forEach(cafeFoodFunction=>{

        var foodTypeButton=document.createElement("button");
        var foodTypeTextNode=cafeFunction.Food;
        // foodTypeButton.innerHTML=`${cafeFoodFunction.type}`;
        // foodType.appendChild(foodTypeButton);
        // foodTypeButton.appendChild(foodTypeTextNode);
        // foodType.appendChild(foodTypeButton);
        console.log(foodTypeTextNode);
    })









});



var filterContainerMobile = document.getElementById("filterContainerMobile");

var burger=document.getElementById("burger");

var XFilter=document.getElementById("XFilter");

var cafeOverview=document.getElementsByClassName("cafeOverview");

burger.addEventListener("click", changeDisplay);



function changeDisplay(){
    filterContainerMobile.classList.remove("filterNone");
}

XFilter.addEventListener("click", () =>{
    filterContainerMobile.classList.add("filterNone");

});




// cafez.Food.forEach(cafeFoodFunction=>{
//     let cafeBin=document.createElement("button");
//     // let cafeBin.innerHTML = `<span id="foodTypeButtonText">${cafeFoodFunction}</span>`;
//     // document.getElementById("foodType").appendChild(cafeBin);
// })



// var showCafe=document.getElementById("showCafe");

// function showCafeFunction(){
//     let newCafe=document.createElement("button");
//     newCafe.innerHTML=`<img src=${cafez.Image}><br/>
//                         Cafe Name: ${cafez.name}<br/>
//                         Cafe Location: ${cafez.Location}<br/>`;

//     showCafe.appendChild(newCafe);
// }


// cafez.forEach(showCafeFunction);


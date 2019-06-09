'use strict'

// let numOfDogs = document.getElementById('dogNum').value;
let breedOfDogs = document.getElementById('dogBreed').value;


// let url = `https://dog.ceo/api/breeds/image/random/${numOfDogs}` 


const dogSpace = document.getElementById('images')


function getDogImage(){
    let url = "https://dog.ceo/api/breed/"+breedOfDogs+"/images/random"
    fetch(url, {mode:'cors'})
    .then(function(response) {return response.json()})//turns what is returned from the fetch methd and turns it into a json object
    .then(function(data){
                                     
        let dogPictures = data.message; //get the results passed into the .then function and sets a variable for the json object. It is "resolving it to be a json object"
        console.log(data.message);
        // return dogPictures.map(function(currentValue,index){
        //     console.log(currentValue)
        //     let div = createNode('div') //create all the elements we need
        //     let img = createNode('img');
        //     img.src = currentValue; //add the source of the image to the created node
        //     img.alt = `Picture of random dog`
        //     img.setAttribute("class", "normImg")
        //     img.setAttribute("width", "150")
        //     img.setAttribute("height", "150")
        //     console.log(img)
        //     append(document.getElementById("images"), div);
        //     append(div, img);

            
                console.log(dogPictures)
                let div = createNode('div') //create all the elements we need
                let img = createNode('img');
                img.src = dogPictures; //add the source of the image to the created node
                img.alt = `Picture of random dog`
                img.setAttribute("class", "normImg")
                img.setAttribute("width", "150")
                img.setAttribute("height", "150")
                console.log(img)
                append(document.getElementById("images"), div);
                append(div, img);
            
        
    })
    .catch(error => alert(dogPictures)
    )
    
}

//Create the type of element you need by passing it in as a parmeter)

function createNode(element){
    return document.createElement(element);
}; 

//append the specified element to the parent by passing both in as parameters
function append(parent, el){
    return parent.appendChild(el)
}

function updateValue(){
    numOfDogs = document.getElementById('dogNum').value;
    if (numOfDogs == undefined){
        numofDogs = 3
    }
    return numOfDogs;
}

function updateBreed(){
    breedOfDogs = document.getElementById('dogBreed').value;
    return breedOfDogs;
}

function watchForm(){
    $('form').submit(event =>{
        event.preventDefault();
        getDogImage();
    })
};




watchForm();
const buttonArray = [];
const getApi = function () {
    axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
        })
        .then(function (response) {
            removeButtons();
            removebackground()
            // name
            const name = document.createElement("p");
            name.innerText = response.data.meals[0].strMeal;

            const newname = document.querySelector(".randomfood");
            newname.append(name);
            //img
            const img = document.createElement("img");
            img.setAttribute("src", response.data.meals[0].strMealThumb);
            const newImg = document.querySelector(".randomfood");
            newImg.append(img);
            // strInstructions
            const Instructions = document.createElement("p");
            Instructions.innerText = response.data.meals[0].strInstructions;
            const newInstructions = document.querySelector(".randomfood");
            newInstructions.append(Instructions);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });



}



const bycategories = function () {

    removeButtons();

    for (let i = 0; i <= 4; i++) {
        buttonArray[i] = document.createElement("button");
        buttonArray[i].setAttribute("class", "gatagoriesbuttons");
        const addbutton = document.querySelector(".categories")
        addbutton.append(buttonArray[i]);
    }

    buttonArray[0].setAttribute("onclick", "getDessert()");
    buttonArray[0].innerText = "Dessert";

    buttonArray[1].setAttribute("onclick", "getSeafood()");
    buttonArray[1].innerText = "Seafood";

    buttonArray[2].setAttribute("onclick", "getVegan()");
    buttonArray[2].innerText = "Vegan";

    buttonArray[3].setAttribute("onclick", "getBreakfast()");
    buttonArray[3].innerText = "Breakfast";

    buttonArray[4].setAttribute("onclick", "getPasta()");
    buttonArray[4].innerText = "Pasta";

}


const getDessert = function () {

    axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
        })
        .then(function (response) {
            const randoomNumber = Math.floor(Math.random() * 55);
            addInformation(randoomNumber, response);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

}


const getSeafood = function () {

    axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        })
        .then(function (response) {

            const randoomNumber = Math.floor(Math.random() * 20);
            addInformation(randoomNumber, response);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });


}


const getVegan = function () {
    axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan'
        })
        .then(function (response) {

            const randoomNumber = Math.floor(Math.random() * 3);
            addInformation(randoomNumber, response);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });




}


const getBreakfast = function () {

    axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast'
        })
        .then(function (response) {

            const randoomNumber = Math.floor(Math.random() * 7);
            addInformation(randoomNumber, response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });


}


const getPasta = function () {

    axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta'
        })
        .then(function (response) {

            const randoomNumber = Math.floor(Math.random() * 8);
            addInformation(randoomNumber, response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}


const removeButtons = function () {

    const button1 = document.querySelector("#button1");
    button1.remove();

    const button2 = document.querySelector("#button2");
    button2.remove();

    const removemargin = document.querySelector(".contener");
    removemargin.style.margin = "0";


}



const removeCatogresButtons = function () {


    buttonArray.forEach(element => {
        const removecatogres = document.querySelector(".gatagoriesbuttons");
        return removecatogres.remove();
    });

    const removemargin = document.querySelector(".categories");
    removemargin.style.margin = "0";



}


const removebackground = function () {

    const background = document.querySelector("body");
    background.style.backgroundImage = `url("")`;
    background.style.backgroundColor = "black";

}




const addInformation = function (randoomNumber, response) {

    removebackground();
    removeCatogresButtons();

    // name
    const name = document.createElement("p");
    name.innerText = response.data.meals[randoomNumber].strMeal;
    const newname = document.querySelector(".randomfood");
    newname.append(name);
    //img
    const img = document.createElement("img");
    img.setAttribute("src", response.data.meals[randoomNumber].strMealThumb);
    const newImg = document.querySelector(".randomfood");
    newImg.append(img);
    const id = response.data.meals[randoomNumber].idMeal;
    getdescripition(id);



}




const getdescripition = function (id) {

    axios({
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        })
        .then(function (response) {
            // strInstructions
            const Instructions = document.createElement("p");
            Instructions.innerText = response.data.meals[0].strInstructions;
            const newInstructions = document.querySelector(".randomfood");
            newInstructions.append(Instructions);


            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
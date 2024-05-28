// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


let containerRecipesBlock = document.getElementsByClassName('container-recipes')[0];
let buttonLoadMore = document.getElementById('load-more');


let baseURL = 'https://dummyjson.com';
let getRecipes = `${baseURL}/recipes`;

let page = 1;
const cartsPerPage = 10;

// const skip = (page - 1) * cartsPerPage;


function rendering () {
    const skip = (page - 1) * cartsPerPage;

    let url = new URL(getRecipes)
    url.searchParams.set('limit', cartsPerPage.toString())
    url.searchParams.set('skip', skip.toString())

    fetch(url)
        .then(res => res.json())
        .then(({recipes, total}) => {
            skip >= total - cartsPerPage ?  buttonLoadMore.disabled = true : buttonLoadMore.disabled = false;
            console.log(total);
            recipes.forEach(recipe => {
                const {name, image, ingredients, instructions, mealType, prepTimeMinutes, cookTimeMinutes, servings, cuisine} = recipe;
                let recipeBlock = document.createElement('div');
                recipeBlock.className = 'recipe';
                // block with image and title recipe
                let recipeTitleBlock = document.createElement('div');
                recipeTitleBlock.className = 'recipe-title';
                let imgBlock = document.createElement('div');
                imgBlock.className = 'recipe-image'
                let img = document.createElement('img');
                img.src = image;
                imgBlock.appendChild(img);

                let infoBlock = document.createElement('div');
                infoBlock.className = 'recipe-info';
                let titleH3 = document.createElement('h3');
                titleH3.innerText = name;
                let timeBlock = document.createElement('div');
                timeBlock.className = 'recipe-time';
                timeBlock.innerHTML = `
                    <p>Cuisine: <span>${cuisine}</span></p>
                    <p>Preparation time minutes: <span>${prepTimeMinutes}</span></p>
                    <p>Cook time minutes: <span>${cookTimeMinutes}</span></p>
                    <p>Servings: <span>${servings}</span></p>
                    <p>Meal type: <span>${mealType[0]}</span></p>
                `
                infoBlock.append(titleH3, timeBlock);
                recipeTitleBlock.append(imgBlock, infoBlock)

                //block ingredients and instructions
                let ingredientsBlock = document.createElement('div');

                let ingredientsUl = document.createElement('ul');
                ingredientsUl.innerText = 'Necessary ingredients:'
                ingredients.forEach(ingredient => {
                    let ingredientLi = document.createElement('li');
                    ingredientLi.innerText = ingredient;
                    ingredientsUl.append(ingredientLi)
                })
                let instructionsOl = document.createElement('ol');
                instructionsOl.innerText = 'Stages of cooking:'
                instructions.forEach(instruction => {
                    let instructionsLi = document.createElement('li');
                    instructionsLi.innerText = instruction;
                    instructionsOl.append(instructionsLi)
                })

                ingredientsBlock.append(ingredientsUl, instructionsOl);
                recipeBlock.append(recipeTitleBlock, ingredientsBlock);
                containerRecipesBlock.appendChild(recipeBlock);
            })
        })
}
buttonLoadMore.addEventListener('click', () => {
    page++;
    rendering();
})


rendering();



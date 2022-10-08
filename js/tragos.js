let tragosInternac = document.getElementById("tragosInternac");

//TRAEMOS LA LIBRERÍA DE LOS TRAGOS Y LOS MOSTRAMOS
Toastify({
    text: "Seleccione un trago para luego saborear nuestras pastas",
    duration: 4000,
    style: {
        background: "linear-gradient(to left, #ff8000, #ffd200)",
    },
}).showToast();

const listaTragos = async () => {
try {
    let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    let data = await response.json();
    let tragosElegidos = data.drinks;

    console.log(tragosElegidos);
    console.log(data);
    
    tragosElegidos.forEach(tragos => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h3 class= "color_marron_sm">Código: ${tragos.idDrink}</h3>
        <p><b>Categoría:</b> ${tragos.strCategory}</p>        
        <p><b>Nombre:</b> ${tragos.strDrink}</p>    
        <img class= "imagenTragos" src="${tragos.strDrinkThumb}">
        <p><b>Ingredientes:</b> ${tragos.strIngredient1}, ${tragos.strIngredient2}, ${tragos.strIngredient3} </p>
        <br>
        <hr/>
        `;
        tragosInternac.append(div);
        });
    } catch(error) {
        
        let div =document.createElement("div");
        div.innerHTML=`
        <h1>Ha ocurrido un error, por favor intentar luego!</h1>`;
        tragosInternac.append(div);
    }
};

listaTragos();
let recetasInternac = document.getElementById("recetasInternac");

//TRAEMOS LA LIBRERÍA DE LOS TRAGOS Y LOS MOSTRAMOS

const listaRecetasInt = async () => {
try {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    let data = await response.json();
    let recetasElegidos = data;

    console.log(recetasElegidos);

    recetasElegidos.forEach(rec => {
        console.log("1");
        const div = document.createElement("div");
        div.innerHTML = `
        <h3 class= "color_marron_sm">Código: ${rec.strMeal}</h3>
        <img class= "imagenTragos" src="${rec.strMealThumb}">
        <br>
        <hr/>
        `;
        recetasInternac.append(div);
        });
    } catch(error) {
        
        let div =document.createElement("div");
        div.innerHTML=`
        <h1>Ha ocurrido un error, por favor intentar luego!</h1>`;
        recetasInternac.append(div);
    }
};

listaRecetasInt();
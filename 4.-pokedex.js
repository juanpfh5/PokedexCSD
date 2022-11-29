var name = "";

const fetchPokemon = async() => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            const pokeAbilities = document.getElementById("abilities");
            //console.log(res);
            pokeImage("./pokemon-sad.gif")
            pokeAbilities.innerHTML = "<h2>No se encontró a ese pokémon</h2>";
            //Si el status no es 200 quiere decir que la consulta no fue exitosa, por lo que hubo un problema
            console.log(res.json());
        }
        else {
            return res.json();
            //console.log(res.json());
        }
    })

    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo = data.abilities;
        name = "<br><h2>"+data.name+"</h2>";
        name = name.toUpperCase();
        pokeImage(pokeImg);
        pokeData(pokeInfo);
        //console.log(pokeImg);
        //console.log(data.name);
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (abilities) => {
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map(item => item.ability.name);
    //console.log("abilities full", abilities);
    //console.log("abilities names", abilitiesName);
    
    //pokeAbilities.innerHTML = abilitiesName;
    let i=0;
    console.log("abilities full", abilities);
    let cadena = name+"<h4><br>";
    for(i; i<Object.keys(abilitiesName).length; i++){
        cadena += abilitiesName[i];
        if(abilitiesName[i] == abilitiesName[Object.keys(abilitiesName).length-1]){
            cadena += "</h4>";
        }else{
            cadena += "<br>";
        }
    }
    pokeAbilities.innerHTML = cadena;
}




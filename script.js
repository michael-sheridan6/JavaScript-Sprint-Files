fetch("characters.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {
            console.log(getFullName(character));
            console.log(getAge(character));
            console.log(getRace(character));
        });
    })

    .catch(error => {
        console.error(error);
    });

function getFullName(character) {
    return `${character.name}`;
}

function getAge(character) {
    return `${character.name} is ${character.age} years old.`;
}
function getRace(character) {
    return `${character.name} belongs to the ${character.race} race.`;
}

fetch("characters.json")
    .then(response => response.json())
    .then(data => {
        let charactersHTML = "";
        data.forEach(character => {
            charactersHTML += `
				<div>
					<h2>${character.name}</h2>
					<p>Age: ${character.age}</p>
					<p>Race: ${character.race}</p>
					<p>Height: ${character.height} meters</p>
				</div>
			`;
        });
        document.getElementById("characters").innerHTML = charactersHTML;
        console.log(data);
    });

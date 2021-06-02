document.getElementById("button1").addEventListener("click", loadCharacter);

document.getElementById("button2").addEventListener("click", loadCharacters);
function loadCharacter(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "character.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const character = JSON.parse(this.responseText); //creating an object
      const output = `
            <ul>
                <li>ID: ${character.id}</li>
                <li>Name: ${character.name}</li>
                <li>Show: ${character.show}</li>
            </ul>
            `;

      document.getElementById("character").innerHTML = output; //to display the content of json object
    }
  };
  xhr.send();
}

function loadCharacters(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "characters.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const characters = JSON.parse(this.responseText); //creating an object
      let output = "";
      characters.forEach(function (character) {
        output += `
            <ul>
                <li>ID: ${character.id}</li>
                <li>Name: ${character.name}</li>
                <li>Show: ${character.show}</li>
            </ul>
            `;
      });
      document.getElementById("characters").innerHTML = output; //to display the content of json object
    }
  };
  xhr.send();
}

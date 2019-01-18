import { Character } from './character';

export class Game {

  constructor(number) {
    this.characters = this.getCharacters(number);
  }

  getCharacters(number) {
    let randomNumbers = [];
    for(var i = 0; i < number; i++) {
      let randomNum = Math.floor((Math.random() * 493));
      randomNumbers.push(randomNum);
    }
    randomNumbers;
    let characters = [];

    randomNumbers.forEach(function(number) {
      let newCharacter = new Character(number);

      newCharacter.promise().then((resolve) => {
        let jason = JSON.parse(resolve);
        let characterName = jason.name;
        let characterImage = jason.image;
        let characterId = jason.id;
        characters.push([characterName, characterImage, characterId]);
      })
    })
    return characters;
  }

  returnNames() {
    let names = [];
    this.characters.forEach(function(arrayPos) {
      let name = arrayPos[0];
      let id = arrayPos[2];
      names.push([name, id]);
    });
    return names;
  }

  returnImages() {
    let images = [];
    this.characters.forEach(function(arrayPos) {
      let image = arrayPos[1];
      let id = arrayPos[2];
      images.push([image, id])
    });
    return images;
  }


}

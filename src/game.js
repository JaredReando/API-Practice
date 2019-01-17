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
      setTimeout(() => {
        let characterName = newCharacter.responseObject.name;
        let characterImage = newCharacter.responseObject.image;
        characters.push([characterName, characterImage]);

      }, 1000);
    });
    return characters;
  }

  returnNames() {
    let names = [];
    this.characters.forEach(function(arrayPos) {
      let name = arrayPos[0];
      names.push(name);
    });
    return names;
  }

  returnImages() {
    let images = [];
    this.characters.forEach(function(arrayPos) {
      let image = arrayPos[1];
      images.push(image)
    });
    return images;
  }


}

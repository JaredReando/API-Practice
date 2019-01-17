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
        characters.push([characterName, characterImage]);
      })
      // .then(function(response) {
      //   let responseInfo = JSON.parse(response);
      //   let name = responseInfo[0];
      //   let image = responseInfo[1];
      // })

    })
    return characters;
  }
  //
  // returnNames() {
  //   let names = [];
  //   this.characters.forEach(function(arrayPos) {
  //     let name = arrayPos[0];
  //     names.push(name);
  //   });
  //   return names;
  // }
  //
  // returnImages() {
  //   let images = [];
  //   this.characters.forEach(function(arrayPos) {
  //     let image = arrayPos[1];
  //     images.push(image)
  //   });
  //   return images;
  // }


}

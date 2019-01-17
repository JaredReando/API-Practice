export class Character {

  constructor(characterId) {
    this.characterId = characterId;
  }

  promise() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = `https://rickandmortyapi.com/api/character/${this.characterId}`;

        request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();

    });
  }
}




  // this.request = new XMLHttpRequest();
  // this.URL = `https://rickandmortyapi.com/api/character/${number}`
  // this.sendCall();
  // this.grabWebInfo();

  // grabWebInfo() {
  //   let waitTimer = setTimout(() => {
  //     if (this.request.readyState === 4 && this.request.status === 200) {
  //       this.response = JSON.parse(this.request.responseText);
  //     }
  //   }, 1000);
  // }
  //
  // sendCall() {
  //   this.request.open("GET", this.URL, true);
  //   this.request.send();
  // }




//
// let request = new XMLHttpRequest();
// const url = `https://rickandmortyapi.com/api/character/?name=${characterSearchInput}`;
//
// request.onreadystatechange = function() {
//   if (this.readyState === 4 && this.status === 200) {
//     response = JSON.parse(this.responseText);
//
//     getElements(response);
//   }
// }
//
// request.open("GET", url, true);
// request.send();

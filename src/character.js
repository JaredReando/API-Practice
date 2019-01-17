export class Character {

  constructor(number) {
    this.requestAPI = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://rickandmortyapi.com/api/character/${number}`;
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

    this.requestAPI.then((response) => {
      this.responseObject = JSON.parse(response);
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

export class Result {

  constructor(baseURL) {
    this.request = new XMLHttpRequest();
    this.baseURL = `${baseURL}?`
  }


  pagination() {
    this.response

  }

  addModifier(type, value) {
    if(this.baseURL.endsWith('?')) {
      this.baseURL += `type=${value}`;
    } else {
    this.baseURL += `&type=${value}`;
    }
  }

}

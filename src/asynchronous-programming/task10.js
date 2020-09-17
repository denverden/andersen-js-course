export class Musican {
  constructor(url) {
    this.url = url;
  }

  async getAlbums() {
    const response = await fetch(this.url);
    const json = await response.json();
    return json;
  }
}

export default function() {

  /*
    Config (with defaults).
    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = "http://localhost:9292"
  // this.urlPrefix = "";    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = "/api/v1";    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get("/books", () => {
    return {
      data: [{
        "type": "books",
        "id": "1",
        "attributes": {
          "slug": "let-the-great-world-spin-2009",
          "title": "Let the Great World Spin",
          "author": "Colum McCann",
          "isbn": "9780812973990",
          "year": 2009,
          "url": "http://books.google.com/books?id=_U8Cv5H-qkEC&dq=isbn:9780812973990&hl=&source=gbs_api",
          "cover": "http://books.google.com/books/content?id=_U8Cv5H-qkEC&printsec=frontcover&img=1&zoom=1&edge=none&source=gbs_api",
          "added-on": "2015-11-29",
          "modified-on": null,
          "total-pages": 344,
          "instances-per-page": 2.27,
          "instance-count": 781
        },
        "links": {
          "self": "/api/v1/books/1"
        }
      },
      {
        "type": "books",
          "id": "2",
          "attributes": {
            "slug": "the-age-of-innocence-1920",
            "title": "The Age of Innocence",
            "author": "Edith Wharton",
            "isbn": "9780375753206",
            "year": 1920,
            "url": "http://books.google.com/books?id=vGq7MofJ4scC&dq=isbn:9780375753206&hl=&source=gbs_api",
            "cover": "http://books.google.com/books/content?id=vGq7MofJ4scC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
            "added-on": "2016-01-22",
            "modified-on": null,
            "total-pages": 265,
            "instances-per-page": 2.5,
            "instance-count": 663
          },
          "links": {
              "self": "/api/v1/books/2"
          }
      },
      {
        "type": "books",
          "id": "10",
          "attributes": {
            "slug": "the-crying-of-lot-49-1986-ed-dot-1965",
            "title": "The Crying of Lot 49 (1986 ed.)",
            "author": "Thomas Pynchon",
            "isbn": "9780060913076",
            "year": 1965,
            "url": "http://books.google.com/books?id=51oT_Xk3TIUC&dq=isbn:9780060913076&hl=&source=gbs_api",
            "cover": "http://books.google.com/books/content?id=51oT_Xk3TIUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
            "added-on": "2016-11-27",
            "modified-on": null,
            "total-pages": 173,
            "instances-per-page": 2.55,
            "instance-count": 442
          },
          "links": {
            "self": "/api/v1/books/10"
          }
      }],
      "meta": {
        "copyright": "Copyright 2018 Moacir P. de Sá Pereira",
        "license": "See http://github.com/nyscapes/nywalker-server",
        "authors": [
          "Moacir P. de Sá Pereira"
        ]
      }
    }
  });





}
    
  /*
    Shorthand cheatsheet:

    this.get("/posts");
    this.post("/posts");
    this.get("/posts/:id");
    this.put("/posts/:id"); // or this.patch
    this.del("/posts/:id");

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

export default function() {

  /*
    Config (with defaults).
    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = "http://localhost:9292";
  this.namespace = "/api/v1";
  this.timing = 400;

  this.get("/books", (schema) => {
    return schema.books.all();
  });
  this.get("/books/:id");

  this.get("/instances", (schema) => {
    return schema.instances.all();
  });

  // this.get("/books/:id", function (db, request) {
  //   return { data: books.find((book) => request.params.id === book.id) };
  // });




  this.passthrough("http://api.geonames.org/**");

}
    
/*
    Shorthand cheatsheet:
    this.post("/posts");
    this.put("/posts/:id"); // or this.patch
    this.del("/posts/:id");
    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

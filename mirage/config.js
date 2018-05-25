export default function() {

  /*
    Config (with defaults).
    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = "http://localhost:9292";
  this.namespace = "/api/v1";
  this.timing = 400;

  this.resource("books"); // Shorthand
  this.resource("instances");
  this.resource("places");
  this.resource("nicknames");

  this.passthrough("http://api.geonames.org/**");

}

import DS from "ember-data";
import { and, collect } from "@ember/object/computed";
import { computed } from "@ember/object";
  

export default DS.Model.extend({
  page: DS.attr("number"),
  sequence: DS.attr("number"),
  text: DS.attr("string"),
  note: DS.attr("string"),
  special: DS.attr("string"),
  added_on: DS.attr("date"),
  modified_on: DS.attr("date"),
  flagged: DS.attr("boolean"),
  lat: DS.attr("number"),
  lon: DS.attr("number"),
  place_name: DS.attr("string"),

  book: DS.belongsTo("book"),
  place: DS.belongsTo("place"),

  mappable: and("lat", "lon"),
  latLng: collect("lat", "lon"),
  title: computed("page", "sequence", "text", function() {
    return `${this.get("page")}:${this.get("sequence")}, ${this.get("text")}`;
  })
});

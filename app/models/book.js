import DS from "ember-data";
import { computed } from "@ember/object";
// import EmberArray from "@ember/array";

export default DS.Model.extend({
  slug: DS.attr("string"),
  title: DS.attr("string"),
  author: DS.attr("string"),
  isbn: DS.attr("string"),
  year: DS.attr("number"),
  url: DS.attr("string"),
  cover: DS.attr("string"),
  added_on: DS.attr("date"),
  modified_on: DS.attr("date"),
  total_pages: DS.attr("number"),
  instance_count: DS.attr("number"),
  instances_per_page: DS.attr("number"),
  special_field: DS.attr("string"),
  special_help_text: DS.attr("string"),
  last_instance: DS.attr("string"),

  instances: DS.hasMany("instance"),

  mappable_places: computed("instances", function(){
    return this.get("instances").map( instance => {
      if(instance.mappable){
        return { name: instance.place_name, lat: instance.lat, lon: instance.lon };
      }
    }).compact();
  })
});

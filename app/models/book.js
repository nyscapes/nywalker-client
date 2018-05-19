import DS from "ember-data";

export default DS.Model.extend({
  slug: DS.attr("string"),
  author: DS.attr("string"),
  title: DS.attr("string"),
  isbn: DS.attr("string"),
  year: DS.attr("number"),
  url: DS.attr("string"),
  cover: DS.attr("string"),
  added_on: DS.attr("date"),
  modified_on: DS.attr("date")
});

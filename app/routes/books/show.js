import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  card: service(),
  map: service(),
  model(params) {
    return this.get("store").findRecord("book", params.book_id);
  },
  afterModel(model) {
    this.set("card.header", `<em>${model.title}</em> (${model.year})`);
    this.set("map.places", JSON.parse(model.mappable_places));
  },

});

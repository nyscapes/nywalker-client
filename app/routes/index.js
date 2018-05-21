import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  map: service(),
  model() {
    return this.get("store").findAll("place");
  },
  afterModel(model) {
    this.set("map.places", model.filter( place => place.get("mappable") ));
  },
});

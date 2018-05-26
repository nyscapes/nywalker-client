import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  card: service(),
  model() {
    return this.get("store").findAll("book");
  },
  afterModel(model) {
    this.set("card.header", "NYWalker - List of Books");
  },
});

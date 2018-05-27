import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  card: service(),
  afterModel() {
    this.set("card.header", "About NYWalker");
  },
});

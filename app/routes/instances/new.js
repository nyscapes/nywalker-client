import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { hash } from "rsvp";

export default Route.extend({
  card: service(),
  model() { 
    // const bookModel = this.modelFor("book");
    return hash({
      // book: bookModel,
      book: this.get("store").findRecord("book", 1),
      instance: this.get("store").createRecord("instance")
    });
  },
  afterModel() {
    const header = this.get("card.header");
    this.set("card.header", header + " — Add Instance");
  }
});

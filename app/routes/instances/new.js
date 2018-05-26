import Route from "@ember/routing/route";
import { hash } from "rsvp";

export default Route.extend({
  model() { 
    // const bookModel = this.modelFor("book");
    return hash({
      // book: bookModel,
      book: this.get("store").findRecord("book", 1),
      instance: this.get("store").createRecord("instance")
    });
  }
});

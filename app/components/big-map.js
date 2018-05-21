import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  map: service(),
  didInsertElement() {
    this.set("places", this.get("map").places);
  },
  places() { }
});

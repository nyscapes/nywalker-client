import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { get } from "@ember/object";

export default Route.extend({
  auth: service(),
  beforeModel() {
    if (!get(this, "auth.isAuthenticated")) {
      return this.replaceWith("application");
    }
  }
});

/* eslint ember/avoid-leaking-state-in-ember-objects: 0 */
import JSONAPISerializer from "./application";

export default JSONAPISerializer.extend({
  // This doesn't work but solves the leaking state error.
  //
  // init() {
  //   this._super(...arguments);
  //   this.include = ["instances"];
  // }
  include: ["instances"]
});

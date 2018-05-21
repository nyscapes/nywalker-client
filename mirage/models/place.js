import { Model, hasMany } from "ember-cli-mirage";

export default Model.extend({
  nicknames: hasMany(),
  instances: hasMany()
});

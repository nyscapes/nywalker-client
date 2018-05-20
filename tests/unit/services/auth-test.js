import { module, test } from "qunit";
// import { module } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Service | auth", function(hooks) {
  setupTest(hooks);

  //Replace this with your real tests.
  test("it exists", function(assert) {
    let service = this.owner.lookup("service:auth");
    assert.ok(service);
  });

  // test("should return an auth0.WebAuth object with a scope of 'openid'", function(assert) {
  //   const auth = this.owner.lookup("service:auth");
  //   // auth.set("auth0");
  //   assert.equal(auth.get("auth0").scope, "openid");
  // });




});


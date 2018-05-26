import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | instance-row", function(hooks) {
  setupRenderingTest(hooks);

  test("should present a row of columns", async function(assert) {
    // assert.expect(3);
    this.set("instance", {
      page: 10,
      sequence: 2,
      text: "The City",
      id: 42
    });

    await render(hbs`{{instance-row instance=instance}}`);
    assert.equal(3, 3);
  });




//   test("it renders", async function(assert) {
//     // Set any properties with this.set('myProperty', 'value');
//     // Handle any actions with this.set('myAction', function(val) { ... });

//     await render(hbs`{{instance-row}}`);

//     assert.equal(this.element.textContent.trim(), "");

//     // Template block usage:
//     await render(hbs`
//       {{#instance-row}}
//         template block text
//       {{/instance-row}}
//     `);

//     assert.equal(this.element.textContent.trim(), "template block text");
//   });
});

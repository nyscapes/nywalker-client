import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import EmberObject from "@ember/object";

module("Integration | Component | book-card", function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.book = EmberObject.create({
      title: "book-title",
      author: "book-author",
      year: 1918
    });
  });
  test("should display book details", async function(assert) {
    await render(hbs`{{book-card book=book}}`);
    assert.equal(this.$(".card-title").text().trim(), "book-title (1918)", "book-title (1918)");
    assert.equal(this.$(".card-text").text().trim(), "book-author", "book-author");
  });
});

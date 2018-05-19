import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | books", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("should show list of books", async function(assert) {
    await visit("/books");
    assert.equal(this.element.querySelectorAll(".book").length, 3, "should display 3 books");
  });
  // test("should link to information about NYWalker", async (assert) => {});
  // test("should show details for a selected book", async (assert) => {});

  test("visiting /books", async function(assert) {
    await visit("/books");
    assert.equal(currentURL(), "/books");
  });
});

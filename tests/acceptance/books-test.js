import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | books", function(hooks) {
  setupApplicationTest(hooks);

  test("should show list of books", async (assert) => {});
  test("should link to information about NYWalker", async (assert) => {});
  test("should show details for a selected book", async (assert) => {});

  test("visiting /books", async function(assert) {
    await visit("/books");
    assert.equal(currentURL(), "/books");
  });
});

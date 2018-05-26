import Component from "@ember/component";
import $ from "jquery";

export default Component.extend({
  didInsertElement() {
    const textHeight = $("#book-info-text").height();
    const imgHeight = $("#book-info-image").height();
    const imgWidth = $("#book-info-image").width();
    $("#book-info-image").height(textHeight);
    $("#book-info-image").width((textHeight * imgWidth)/imgHeight);
  }
});

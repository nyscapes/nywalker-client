import Component from "@ember/component";

export default Component.extend({
  classNames: ["btn"],
  classNameBindings: ["btnclass", "active"],
  tagName: "button",
  attributeBindings: ["type", "data-target", "data-toggle", "aria-expanded", "aria-controls"],
  type: "button",
  dataTarget: null,
  dataToggle: null,
  ariaExpanded: null,
  ariaControls: null,
  btnclass: "secondary",
  active: false,
  didInsertElement() { 
    this.set("btnclass", `btn-${this.get("buttonClass")}`);
  },
  click() { this.toggleProperty("active"); }
});

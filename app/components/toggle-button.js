import Component from "@ember/component";

export default Component.extend({
  classNames: ["btn"],
  classNameBindings: ["btnsize", "btnclass", "active"],
  tagName: "button",
  attributeBindings: ["type", "data-target", "data-toggle", "aria-expanded", "aria-controls"],
  type: "button",
  dataTarget: null,
  dataToggle: null,
  ariaExpanded: null,
  ariaControls: null,
  btnclass: "secondary",
  btnsize: null,
  buttonSize: null,
  active: false,
  didInsertElement() { 
    const btnSize = this.get("buttonSize");
    if(btnSize){
      this.set("btnsize", `btn-${this.get("buttonSize")}`);
    }
    this.set("btnclass", `btn-${this.get("buttonClass")}`);

  },
  click() { this.toggleProperty("active"); }
});

import Component from "@ember/component";

export default Component.extend({
  instance: null,
  actions: {
    save(instance) { 
      instance.set("book", this.get("book"));
      instance.save()
        .then( () => {
        })
        .catch( () => { 
          // console.log("failed to save.");
          // console.log(instance.errors);
        });
    }
  }
});

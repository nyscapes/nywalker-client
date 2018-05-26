import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  map: service(),
  model(params) {
    return this.get("store").findRecord("book", params.book_id);
  },
  afterModel(model) {
    // model.mappable_places comes with duplicates that don't get caught because they have a hidden ember component property. So.
    // NB: mappable places is based on *instances*, weirdly enough.
    const mappable_places = model.mappable_places.map( place => {
      return { name: place.name, lat: place.lat, lon: place.lon };
    });
    this.set("map.places", mappable_places);
    // console.log(this.get("theplaces"));
    // this.set("map.places", uniq("places"));
    // ok if even uniq() doesn't work here (stack runs out of mem),
    // then maybe this bug should turn into a feature. Or the serializer 
    // should simply return places.
  },

});

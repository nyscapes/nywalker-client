import Service from "@ember/service";

export default Service.extend({
  places: null // If this is a function, things get complex w/ model.
  // places(model) {
  //   if(model){
  //     return model;
  //   }  else{
  //   return [
  //     {name: "nyc", lat: 40.71, lon: -74},
  //     {name: "philadelphia", lat: 40.0, lon: -75.1334},
  //     ];
  //   }
  // }
});

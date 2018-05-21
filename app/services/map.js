import Service from "@ember/service";

export default Service.extend({
  places() {
    return [
      {name: "nyc", lat: 40.71, lon: -74},
      {name: "philadelphia", lat: 40.0, lon: -75.1334},
    ];
  }
});

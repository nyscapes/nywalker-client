import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      { title: "Young Lonigan", author: "James T. Farrell", year: 1932 },
      { title: "The Young Manhood of Studs Lonigan", author: "James T. Farrell", year: 1934 },
      { title: "Judgment Day", author: "James T. Farrell", year: 1935 }
    ];
  }
});

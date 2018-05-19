/* global auth0 */
import { computed, get } from "@ember/object";
import Service from "@ember/service";
import config from "../config/environment";
// import RSVP from "rsvp";
import { isPresent } from "@ember/utils";

const AUTH_CONFIG = config.auth0;

export default Service.extend({
  auth0: computed(function () {
    return new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientID,
      redirectUri: AUTH_CONFIG.callbackUrl,
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      responseType: "token id_token",
      scope: "openid"
    });
  }),

  login() {
    get(this, "auth0").authorize();
  },

  handleAuthentication() {
    // return new RSVP.Promise((resolve, reject) => {
    //   // https://github.com/auth0-community/ember-simple-auth-auth0/issues/67#issuecomment-312563014
    //   // get(this, "auth0").parseHash((err, authResult) => {
    //   get(this, "auth0").parseHash(window.location.hash, (err, authResult) => {
    //     if (authResult && authResult.accessToken && authResult.idToken) {
    //       this.setSession(authResult);
    //     } else if (err) {
    //       return reject(err);
    //     }

    //     return resolve();
    //   });
    // });
  },

  isAuthenticated: computed(function() {
    return isPresent(this.getSession().access_token) && this.isNotExpired();
  }).volatile(),
  
  getSession() {
    return {
      user: localStorage.getItem("user"),
      access_token: localStorage.getItem("access_token"),
      id_token: localStorage.getItem("id_token"),
      expires_at: localStorage.getItem("expires_at")
    };
  },

  setSession(authResult) {
    if (authResult && authResult.accessToken && authResult.idToken) {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      get(this, "auth0").client.userInfo(authResult.accessToken, function(err, user) {
        // This creates something like {"sub":"github|userid"}, the use of
        // which is opaque at the moment.
        localStorage.setItem("user", JSON.stringify(user));
      });
      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("id_token", authResult.idToken);
      localStorage.setItem("expires_at", expiresAt);
    }
  },

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user");
  },

  isNotExpired() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.getSession().expires_at;
    return new Date().getTime() < expiresAt;
  }
});


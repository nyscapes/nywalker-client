module.exports = function() {
  return {
    clientAllowedKeys: ["AUTH_CONFIG_CLIENT_ID", "AUTH_CONFIG_DOMAIN", "AUTH_CONFIG_CALLBACK_URL", "AUTH_CONFIG_API_URL"],
    failOnMissingKey: false,
  };
};

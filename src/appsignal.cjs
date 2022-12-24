const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "My App",
  pushApiKey: "23402a35-4140-48d5-890e-50a9dc44fffd",
});

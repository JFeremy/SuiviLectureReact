import base from "firebase";

const config = {
  apiKey: "AIzaSyAgwSdW8YiQyYBlfCZl87Z3wRkeeODu3G0",
  authDomain: "scanmanga-8152c.firebaseapp.com",
  databaseURL: "https://scanmanga-8152c.firebaseio.com"
};

if (!base.apps.length) {
  base.initializeApp(config);
}

export default base;

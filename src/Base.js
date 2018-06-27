import base from "firebase/app";

const config = {
  apiKey: "AIzaSyAgwSdW8YiQyYBlfCZl87Z3wRkeeODu3G0",
  authDomain: "scanmanga-8152c.firebaseapp.com",
  databaseURL: "https://scanmanga-8152c.firebaseio.com",
  projectId: "scanmanga-8152c",
  storageBucket: "scanmanga-8152c.appspot.com"
};

if (!base.apps.length) {
  base.initializeApp(config);
}

export default base;

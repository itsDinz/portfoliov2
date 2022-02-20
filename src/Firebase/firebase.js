import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDkyu_ob4ig0qE_tzIZKgMHteKOnoZFFxg",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://portfolio-be7f7.firebaseio.com",
  projectId: "portfolio-be7f7",
  storageBucket: "portfolio-be7f7.appspot.com",
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


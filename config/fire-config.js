import firebase from 'firebase';
import fetch from 'isomorphic-unfetch'

const getConfig = new Promise((resolve, reject) => {

  if (firebase.apps.length === 0) {
    fetch(`/__/firebase/init.json`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        firebase.initializeApp(json);
        resolve(firebase)
      })
      .catch(err => reject(err));
    } else {
    resolve(firebase)
  }
});

const fire = firebase;
export default fire;
export { getConfig };
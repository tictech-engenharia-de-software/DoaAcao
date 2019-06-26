import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { firebaseReducer, reactReduxFirebase  } from 'react-redux-firebase'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  storageBucket: process.env.BUCKET,
}

const rootReducer = combineReducers({
  firebase: firebaseReducer
})

firebase.initializeApp(firebaseConfig)

const config = {
 userProfile: 'users',
}

const createStoreWithFirebase = composeWithDevTools(
  reactReduxFirebase(firebase, config)
)(createStore)

const store = createStoreWithFirebase(rootReducer)

export default store;

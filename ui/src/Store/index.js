import { createStore, combineReducers } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { composeWithDevTools } from 'redux-devtools-extension';
import { firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'

const rootReducer = combineReducers({
  firebase: firebaseReducer
})
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
}

firebase.initializeApp(firebaseConfig)

const config = {
 userProfile: 'users',
}

const createStoreWithFirebase = composeWithDevTools(
  reactReduxFirebase(firebase, config)
)(createStore)

const store = createStoreWithFirebase(rootReducer)

export default store;

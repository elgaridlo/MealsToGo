import * as firebase from 'firebase'

export const loginRequest = async (email, password) => {
    await firebase.default.auth().signInWithEmailAndPassword(email, password)
}
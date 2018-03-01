import { ref, firebaseAuth } from '../config/constants';

export function auth(userName, email, password) {
  return firebaseAuth().createUserWithEmailAndPassword(email, password)
  .then(function(user){
    user.updateProfile({
        displayName: userName,
      }).then(function() {
			ref.child(`users/${user.uid}`).set({
				email: user.email,
				uid: user.uid,
				userName: userName
			});
		});
  });
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password);
}
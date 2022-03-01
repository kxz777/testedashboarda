const firebase = require('firebase');

var config = {
  apiKey: "#",
  authDomain: "#",
  databaseURL: "#",
  projectId: "#",
  storageBucket: "#",
  messagingSenderId: "#",
};    


firebase.initializeApp(config);

module.exports.SignUpWithEmailAndPassword = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        return JSON.stringify(user)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            return {err: 'A senha é muito fraca'}
        } else {
          return {err: errorMessage }
        }
        return {err: error}
    });
}

module.exports.SignInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
           .catch(function(error) {
             // Handle Errors here.
             var errorCode = error.code;
             var errorMessage = error.message;
             if (errorCode === 'auth/wrong-password') {
               return {err: 'Senha errada'}
             } else {
               return {err: errorMessage}
             }
             return {err: error}
           });
   }

   module.exports.InputData = (name) => {
     return firebase.database().ref('users').push({
       name
     })
     .then(function() {
      console.log('Sincronização concluida');
    })
    .catch(function(error) {
      console.log('Sincronização falhou');
    });
   }

   module.exports.GetData = () => {
     let data = []
    return firebase.database().ref('users').once('value')
    .then((snapshot) => {
      
      snapshot.forEach((childSnapshot)=>{
        data.push({
          id: childSnapshot.key,
          ...childSnapshot.val() 
        })
      })
      console.log(data)
      return data;
    })
  }
return module.exports
document.addEventListener("DOMContentLoaded", event =>{
    const app=firebase.app();

    const db=firebase.firestore();

    const myPost=db.collection('posts').doc('firstpost'); 

    myPost.onSnapshot()
            .then(doc=>{
                const data=doc.data();
                document.write(data.title+'<br>')
                document,write(data.createAt+'<br>')
            })
});

function googleLogin(){
    const povider=new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

    .then(result=>{
        const user=result.user;
        document.write('Hello ${user.displayName}');
    })
    .catch(console.log)
}
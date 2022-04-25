/***
 * 1.Create a new firebase project in console.firebase.google.com
 * 2.after create project --- web e giye register app korbo
 * 3.after register follow instruction. first firebase installation(npm install firebase),secondThen, initialize Firebase and begin using the SDKs in (src-->firebase.init.js) file and declear auth variable getAuth(app) and export auth;
 * 4. go to firebase settings >  project authentication and click get started and enable you desire sign in method
 * 5. create login ,signup component,setup route,style them
 * 6.attach form field handler and form submit handler
 * 7. npm install --save react-firebase-hooks
 * 8. useCreateUserWithEmailAndPassword from react-firebase-hooks
 * 9.if user is created redirect to the home by using navigate
 * 10. useSignInWithEmailAndPassword for sign in
 * 11. Create RequireAuth component ==> check user exits also track user location
 * 12. in route wrap protected component by use RequireAuth
 */

/**?
 * Firebase hosting
 *  1. npm install -g firebase-tools(one time for your computer)
 * 2.firebase login(one time for your computer)
 * 3.firebase init(one time for each project )
 * 4.npm run build(every time you want to deploy --->build your project)
 * 5.firebase deploy(every time you want to deploy )
 *
 */

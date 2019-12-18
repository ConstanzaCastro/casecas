export const initFirebase = () => {

  // Your web app's Firebase configuration

   let firebaseConfig = {
      apiKey: "AIzaSyCREz8pivry9fnzL2-WHcpY0Pl_8MPIHWU",
      authDomain: "constanzaasecas1989.firebaseapp.com",
      databaseURL: "https://constanzaasecas1989.firebaseio.com",
      projectId: "constanzaasecas1989",
      storageBucket: "constanzaasecas1989.appspot.com",
      messagingSenderId: "230397048230",
      appId: "1:230397048230:web:d6f8fa05055525dfdd8b67",
      measurementId: "G-V1T3JVKTPJ"
    };
 
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();
}
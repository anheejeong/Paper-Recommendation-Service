import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase - newVersion
// const app = initializeApp(firebaseConfig);

// 아래 코드에 바로 export default를 붙이면 .auth() .database() 등을 다른 파일에서 쓰고싶을때 쓸 때마다 붙여줘야함
firebase.initializeApp(firebaseConfig);

// 이런 식으로 auth만 빼서 export 시켜주면 다른 파일에서는 이것만 import 해서 따로 .auth()를 붙이지 않고 바로 쓸 수 있음
export const authService = firebase.auth();
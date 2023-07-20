// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'

import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: 'AIzaSyBUFQx38wMCLqE5z4jTzR5b4MDs-fL5DXk',
    authDomain: 'blog-393317.firebaseapp.com',
    projectId: 'blog-393317',

    storageBucket: 'blog-393317.appspot.com',

    messagingSenderId: '948089505837',

    appId: '1:948089505837:web:04f37db4273724206cd0a4',

    measurementId: 'G-FQYFERZMH2',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)

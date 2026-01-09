// ১. Firebase SDK ইমপোর্ট করা (আপনার index.html এর সাথে মিল রেখে ভার্সন ৮ ব্যবহার করা হয়েছে)
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// ২. আপনার সঠিক Firebase কনফিগারেশন (আমি আপনার আগের মেসেজ থেকে পুরো কী গুলো বসিয়ে দিয়েছি)
const firebaseConfig = {
    apiKey: "AIzaSyDsPnR7m8KlAAiPbJ-NsY44VOUJvOxM_Nw",
    authDomain: "khida-lagsa.firebaseapp.com",
    projectId: "khida-lagsa",
    storageBucket: "khida-lagsa.firebasestorage.app",
    messagingSenderId: "352833727932",
    appId: "1:352833727932:web:4ab72beeae51d6ad918fb9"
};

// ৩. সার্ভিস ওয়ার্কারের ভেতরে Firebase ইনিশিয়ালাইজ করা
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ৪. ব্যাকগ্রাউন্ড নোটিফিকেশন হ্যান্ডেল করা
messaging.onBackgroundMessage((payload) => {
    console.log('মেসেজ পাওয়া গেছে: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        // GitHub Pages এর জন্য আইকন পাথ ঠিক করা হয়েছে
        icon: '/Sound-check/firebase-logo.png' 
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
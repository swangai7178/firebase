/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

var admin = require("firebase-admin");

var serviceAccount = require("path");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


const db = admin.firestore();
const User = db.collection("Users");
module.exports = User;

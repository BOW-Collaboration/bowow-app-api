// Copyright (c) 2019 Pujit Mehrotra
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import admin from "firebase-admin";
import path from "path";
import logger from "./winston";
const fs = require("fs");

const creds = process.env.FS_CONFIG;

fs.writeFileSync(path.resolve(__dirname, "./serviceAccount.json"), creds);
logger.info("Firestore Service Account Loaded");

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();

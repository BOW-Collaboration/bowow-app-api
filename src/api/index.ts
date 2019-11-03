// Copyright (c) 2019 Pujit Mehrotra
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express from "express";
import { DEFAULT_PORT } from "config/api";
import logger from "config/winston";

const app = express();
const port = process.env.PORT || DEFAULT_PORT;

app.use(express.json()); // Read JSON request bodies

app.get("/", (req, res) => res.send("Hi"));

app.listen(port, () => logger.info(`Listening on port ${port}!`));

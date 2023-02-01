import "reflect-metadata";
import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB } from "@/config";

loadEnv();

import { handleApplicationErrors } from "@/middlewares";
<<<<<<< HEAD
import { usersRouter, authenticationRouter, eventsRouter, enrollmentsRouter, ticketsRouter } from "@/routers";
import { paymentRouter } from "./routers/payments-router";
=======
import {
  usersRouter,
  authenticationRouter,
  eventsRouter,
  enrollmentsRouter,
  ticketsRouter,
  paymentsRouter,
} from "@/routers";
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/users", usersRouter)
  .use("/auth", authenticationRouter)
  .use("/event", eventsRouter)
  .use("/enrollments", enrollmentsRouter)
  .use("/tickets", ticketsRouter)
<<<<<<< HEAD
  .use("/payments", paymentRouter)
=======
  .use("/payments", paymentsRouter)
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;

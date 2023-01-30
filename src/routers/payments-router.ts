import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { createPayment, getPaymentByTickedId } from "@/controllers/payments-controller";

const paymentRouter = Router();

paymentRouter
  .all("/*", authenticateToken)
  .get("", getPaymentByTickedId)
  .post('/', createPayment)

export { paymentRouter };

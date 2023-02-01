import { Router } from "express";
import { authenticateToken } from "@/middlewares";
<<<<<<< HEAD
import { createPayment, getPaymentByTickedId } from "@/controllers/payments-controller";

const paymentRouter = Router();

paymentRouter
  .all("/*", authenticateToken)
  .get("", getPaymentByTickedId)
  .post('/', createPayment)

export { paymentRouter };
=======
import { getPaymentByTicketId, paymentProcess } from "@/controllers";

const paymentsRouter = Router();

paymentsRouter
  .all("/*", authenticateToken)
  .get("/", getPaymentByTicketId)
  .post("/process", paymentProcess);

export { paymentsRouter };
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb

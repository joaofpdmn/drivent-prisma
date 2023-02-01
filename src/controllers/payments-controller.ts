import { AuthenticatedRequest } from "@/middlewares";
<<<<<<< HEAD
import paymentService from "@/services/payment-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getPaymentByTickedId(req: AuthenticatedRequest, res: Response) {
    const ticketId = Number(req.query.ticketId);
    const { userId } = req;
    if (!ticketId) {
        return res.sendStatus(400);
    }
    try {
        const result = await paymentService.getPaymentByTickedId(ticketId, userId);
        if (!result) {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.status(200).send(result);
    } catch (error) {
        if (error.name === "UnauthorizedError") {
            return res.sendStatus(401);
        }
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export async function createPayment(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;

    try {
        const newPayment = await paymentService.paymentProcess(userId, req.body);

        return res.status(httpStatus.OK).send(newPayment);
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        if (error.name === "UnauthorizedError") {
            return res.sendStatus(httpStatus.UNAUTHORIZED);
        }
    }

}
=======
import paymentService from "@/services/payments-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getPaymentByTicketId(req: AuthenticatedRequest, res: Response) {
  try {
    const ticketId = Number(req.query.ticketId);
    const { userId } = req;

    if (!ticketId) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    const payment = await paymentService.getPaymentByTicketId(userId, ticketId);

    if (!payment) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.status(httpStatus.OK).send(payment);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function paymentProcess(req: AuthenticatedRequest, res: Response) {
  try {
    const { userId } = req;
    const {
      ticketId,
      cardData,
    } = req.body;

    if (!ticketId || !cardData) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    const payment = await paymentService.paymentProcess(ticketId, userId, cardData);

    if (!payment) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }

    return res.status(httpStatus.OK).send(payment);
  } catch (error) {
    if (error.name === "UnauthorizedError") {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb

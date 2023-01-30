import { AuthenticatedRequest } from "@/middlewares";
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
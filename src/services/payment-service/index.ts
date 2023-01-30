import paymentRepository from "@/repositories/payment-repository";
import { notFoundError, unauthorizedError } from "@/errors";
import ticketRepository from "@/repositories/tickets-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";


async function getPaymentByTickedId(ticketId: number, userId: number) {
    const result = await ticketRepository.findTicketId(ticketId);

    const enrollment = await enrollmentRepository.findEnrollment(result.enrollmentId);

    if (userId !== enrollment.userId) {
        throw unauthorizedError();
    }

    const payment = await paymentRepository.findPaymentByTicketId(ticketId);
    if (!payment) {
        throw notFoundError();
    }

    return payment;

}
export type cardData = {
    issuer: string,
    number: number,
    name: string,
    expirationDate: Date,
    cvv: number
}

async function paymentProcess(ticketId: number, cardData: cardData) {
    
}

const paymentService = {
    getPaymentByTickedId,
    paymentProcess
};

export default paymentService;

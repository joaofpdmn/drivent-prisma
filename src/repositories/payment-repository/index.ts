import { prisma } from "@/config";
import { Payment } from "@prisma/client";

async function findPaymentByTicketId(ticketId: number) {
    return prisma.payment.findFirst({
        where: {
            ticketId,
        }
    });
}

async function createPayment(ticketId: number, data: PaymentData) {
    return prisma.payment.create({
        data: {
          ticketId,
          ...data
        }
      });
}

type PaymentData = Omit<Payment, "id" | "createdAt" | "updatedAt">

const paymentRepository = {
    findPaymentByTicketId,
    createPayment
}

export default paymentRepository;
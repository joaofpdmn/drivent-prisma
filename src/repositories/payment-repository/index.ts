import { prisma } from "@/config";
import { Payment } from "@prisma/client";

async function findPaymentByTicketId(ticketId: number) {
<<<<<<< HEAD
    return prisma.payment.findFirst({
        where: {
            ticketId,
        }
    });
}

async function createPayment(ticketId: number, data: ) {
    return prisma.payment.create({
        data: {
          ticketId,
          ...data
        }
      });
}



const paymentRepository = {
    findPaymentByTicketId,
    createPayment
}

export default paymentRepository;
=======
  return prisma.payment.findFirst({
    where: {
      ticketId,
    }
  });
}

async function createPayment(ticketId: number, params: PaymentParams) {
  return prisma.payment.create({
    data: {
      ticketId,
      ...params,
    }
  });
}

export type PaymentParams = Omit<Payment, "id" | "createdAt" | "updatedAt">

const paymentRepository = {
  findPaymentByTicketId,
  createPayment,
};

export default paymentRepository;
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb

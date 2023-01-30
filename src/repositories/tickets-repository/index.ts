import { prisma } from "@/config";

async function findManyTicketsType(){
    return prisma.ticketType.findMany();
}

async function findTicketById(enrollmentId: number){
    return prisma.ticket.findFirst({
        where: {
            enrollmentId,
        },
        include: {
            TicketType: true,
        }
    });
}

const ticketRepository = {
    findManyTicketsType,
    findTicketById
};

export default ticketRepository;
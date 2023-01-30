import { prisma } from "@/config";
import { Ticket } from "@prisma/client";

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

async function findTicketTypeById(ticketTypeId: number){
    return prisma.ticketType.findFirst({
        where: {
            id: ticketTypeId
        },
    });
}

async function createTicket(ticket: createTicketData){
    return prisma.ticket.create({
        data: {
            ...ticket,
        }
    })
}

async function findTicketId(ticketId: number){
    return prisma.ticket.findFirst({
        where: {
            id: ticketId,
        },
        include: {
            Enrollment: true,
        }
    });
}

export type createTicketData = Omit<Ticket, "id" | "createdAt" | "updatedAt">;


const ticketRepository = {
    findManyTicketsType,
    findTicketById,
    findTicketTypeById,
    createTicket,
    findTicketId
};

export default ticketRepository;
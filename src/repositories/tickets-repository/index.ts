import { prisma } from "@/config";

async function findManyTicketsType(){
    return prisma.ticketType.findMany();
}

const ticketRepository = {
    findManyTicketsType,
};

export default ticketRepository;
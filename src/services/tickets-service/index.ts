import ticketRepository from "@/repositories/tickets-repository";

async function getTicketsType(){
    return ticketRepository.findManyTicketsType();
}

const ticketService = {
  getTicketsType
};

export default ticketService;

import ticketRepository from "@/repositories/tickets-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { notFoundError } from "@/errors";

async function getTicketsType(){
    return ticketRepository.findManyTicketsType();
}

async function getTicketById(userId: number){
  const result = await enrollmentRepository.findWithAddressByUserId(userId);
  if(!result){
    throw notFoundError();
  }
  const ticket = await ticketRepository.findTicketById(result.id);
  if(!ticket){
    throw notFoundError();
  }
  return ticket;
}

const ticketService = {
  getTicketsType,
  getTicketById
};

export default ticketService;

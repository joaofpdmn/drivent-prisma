import ticketRepository from "@/repositories/tickets-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { notFoundError } from "@/errors";
import { TicketStatus } from "@prisma/client";

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

async function insertTicket(userId: number, ticketTypeId: number){
  const result = await enrollmentRepository.findWithAddressByUserId(userId);
  if(!result){
    throw notFoundError();
  }

  const data = {
    ticketTypeId: ticketTypeId,
    enrollmentId: result.id,
    status: TicketStatus.RESERVED
  }

  await ticketRepository.createTicket(data);
  const ticket = await ticketRepository.findTicketById(result.id);
  return ticket;
}

const ticketService = {
  getTicketsType,
  getTicketById,
  insertTicket
};

export default ticketService;

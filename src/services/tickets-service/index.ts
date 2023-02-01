<<<<<<< HEAD
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
=======
import { notFoundError } from "@/errors";
import ticketRepository from "@/repositories/ticket-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { TicketStatus } from "@prisma/client";

async function getTicketTypes() {
  const ticketTypes = await ticketRepository.findTicketTypes();

  if (!ticketTypes) {
    throw notFoundError();
  }
  return ticketTypes;
}

async function getTicketByUserId(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundError();
  }
  const ticket = await ticketRepository.findTicketByEnrollmentId(enrollment.id);
  if (!ticket) {
    throw notFoundError();
  }

  return ticket;
}

async function createTicket(userId: number, ticketTypeId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundError();
  }

  const ticketData = {
    ticketTypeId,
    enrollmentId: enrollment.id,
    status: TicketStatus.RESERVED
  };

  await ticketRepository.createTicket(ticketData);

  const ticket = await ticketRepository.findTicketByEnrollmentId(enrollment.id);

>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb
  return ticket;
}

const ticketService = {
<<<<<<< HEAD
  getTicketsType,
  getTicketById,
  insertTicket
=======
  getTicketTypes,
  getTicketByUserId,
  createTicket
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb
};

export default ticketService;

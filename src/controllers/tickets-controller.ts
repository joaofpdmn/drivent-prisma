import { AuthenticatedRequest } from "@/middlewares";
import ticketService from "@/services/tickets-service";
import { Response } from "express";
<<<<<<< HEAD
import httpStatus, { BAD_REQUEST } from "http-status";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {

  try {
    const result = await ticketService.getTicketsType();
    return res.status(200).send(result);
=======
import httpStatus from "http-status";

export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const ticketTypes = await ticketService.getTicketTypes();

    return res.status(httpStatus.OK).send(ticketTypes);
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
<<<<<<< HEAD
  try {
    const result = await ticketService.getTicketById(userId);
    return res.status(200).send(result);
  } catch (error) {
    return res.sendStatus(404);
  }
}

export async function insertTicket(req: AuthenticatedRequest, res: Response) {
  const { ticketTypeId } = req.body;
  const { userId } = req;
  if(!ticketTypeId){
    return res.sendStatus(400);
  }
  try {
    const result = await ticketService.insertTicket(userId, ticketTypeId);
    return res.status(201).send(result);
  } catch (error) {
    return res.sendStatus(404);
=======

  try {
    const ticketTypes = await ticketService.getTicketByUserId(userId);

    return res.status(httpStatus.OK).send(ticketTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function createTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  //TODO validação do JOI
  const { ticketTypeId } = req.body;

  if (!ticketTypeId) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const ticketTypes = await ticketService.createTicket(userId, ticketTypeId);

    return res.status(httpStatus.CREATED).send(ticketTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb
  }
}


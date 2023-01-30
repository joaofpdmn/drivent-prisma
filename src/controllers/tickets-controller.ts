import { AuthenticatedRequest } from "@/middlewares";
import ticketService from "@/services/tickets-service";
import { Response } from "express";
import httpStatus, { BAD_REQUEST } from "http-status";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {

  try {
    const result = await ticketService.getTicketsType();
    return res.status(200).send(result);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
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
  }
}


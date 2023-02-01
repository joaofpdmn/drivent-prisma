import { Router } from "express";
import { authenticateToken } from "@/middlewares";
<<<<<<< HEAD
import { getTickets, getTicketsType, insertTicket } from "@/controllers";
=======
import { getTicketTypes, getTickets, createTicket } from "@/controllers";
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
<<<<<<< HEAD
  .get("/types", getTicketsType)
  .get("", getTickets)
  .post("", insertTicket)
=======
  .get("/types", getTicketTypes)
  .get("", getTickets)
  .post("", createTicket);
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb

export { ticketsRouter };

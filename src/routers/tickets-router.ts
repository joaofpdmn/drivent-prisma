import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTicketsType } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsType)

export { ticketsRouter };
import { prisma } from "@/config";
import { Enrollment } from "@prisma/client";

async function findWithAddressByUserId(userId: number) {
  return prisma.enrollment.findFirst({
    where: { userId },
    include: {
      Address: true,
    },
  });
}

<<<<<<< HEAD
async function findEnrollment(enrollmentId: number) {
  return prisma.enrollment.findFirst({
    where: { id: enrollmentId },
=======
async function findById(enrollmentId: number) {
  return prisma.enrollment.findFirst({
    where: { id: enrollmentId }
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb
  });
}

async function upsert(
  userId: number,
  createdEnrollment: CreateEnrollmentParams,
  updatedEnrollment: UpdateEnrollmentParams,
) {
  return prisma.enrollment.upsert({
    where: {
      userId,
    },
    create: createdEnrollment,
    update: updatedEnrollment,
  });
}

export type CreateEnrollmentParams = Omit<Enrollment, "id" | "createdAt" | "updatedAt">;
export type UpdateEnrollmentParams = Omit<CreateEnrollmentParams, "userId">;

const enrollmentRepository = {
  findWithAddressByUserId,
  upsert,
<<<<<<< HEAD
  findEnrollment
=======
  findById,
>>>>>>> 6146a32e37cdc6604449613bf54b8daaf83717bb
};

export default enrollmentRepository;

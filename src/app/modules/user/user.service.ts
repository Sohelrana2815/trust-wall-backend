/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/modules/user/user.service.ts

import prisma from "../../utils/prisma.js";

const createUser = async (data: any) => {
  return await prisma.user.create({
    data,
  });
};

const getAllUsersFromDB = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const UserServices = {
  createUser,
  getAllUsersFromDB,
};

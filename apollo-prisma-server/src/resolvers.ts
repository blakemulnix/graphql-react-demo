import { PrismaClient } from "@prisma/client";
import { Resolvers } from "./generated/graphql";

const prisma = new PrismaClient();

export const resolvers: Resolvers = {
  Query: {
    bikes: async () => {
      return prisma.bike.findMany();
    },
    rides: async () => {
      return prisma.ride.findMany({ include: { bike: true } });
    },
  },
  Mutation: {
    addBike: async (_, { input }) => {
      return prisma.bike.create({
        data: input,
      });
    },
    updateBike: async (_, { id, input }) => {
      const bike = await prisma.bike.findUnique({
        where: { id: Number(id) },
      });

      if (!bike) {
        throw new Error("Bike not found");
      }

      return prisma.bike.update({
        where: { id: Number(id) },
        data: {
          brand: input.brand || bike.brand,
          model: input.model || bike.model,
          nickname: input.nickname || bike.nickname,
        },
      });
    },
    removeBike: async (_, { id }) => {
      await prisma.bike.delete({
        where: { id: Number(id) },
      });
      return true;
    },
    addRide: async (_, { input }) => {
      return prisma.ride.create({
        data: {
          ...input,
          bikeId: Number(input.bikeId),
        },
        include: { bike: true },
      });
    },
    updateRide: async (_, { id, input }) => {
      const ride = await prisma.ride.findUnique({
        where: { id: Number(id) },
      });

      if (!ride) {
        throw new Error("Ride not found");
      }

      return prisma.ride.update({
        where: { id: Number(id) },
        data: {
          distance: input.distance || ride.distance,
          location: input.location || ride.location,
        },
        include: { bike: true },
      });
    },
    removeRide: async (_, { id }) => {
      await prisma.ride.delete({
        where: { id: Number(id) },
      });
      return true;
    },
  },
};

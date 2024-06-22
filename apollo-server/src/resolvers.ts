import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { Bike, Ride } from './generated/graphql';

const dataFilePath = path.join(__dirname, "data.json");

interface Data {
  bikes: Bike[];
  rides: Ride[];
}

const getData = (): Data => {
  const jsonData = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(jsonData);
};

const saveData = (data: Data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

export const resolvers = {
  Query: {
    bikes: () => {
      const data = getData();
      return data.bikes;
    },
    rides: () => {
      const data = getData();
      return data.rides;
    },
  },
  Mutation: {
    addBike: (_, { input }) => {
      const data = getData();
      const newBike = {
        id: uuidv4(),
        ...input,
      };
      data.bikes.push(newBike);
      saveData(data);
      return newBike;
    },
    updateBike: (_, { id, input }) => {
      const data = getData();
      const bikeIndex = data.bikes.findIndex((bike) => bike.id === id);
      if (bikeIndex === -1) {
        throw new Error("Bike not found");
      }

      // check input
      // if (!input.brand || input.model || input.)


      data.bikes[bikeIndex] = {
        ...data.bikes[bikeIndex],
        ...input,
      };
      saveData(data);
      return data.bikes[bikeIndex];
    },
    removeBike: (_, { id }) => {
      const data = getData();
      const bikeIndex = data.bikes.findIndex((bike) => bike.id === id);
      if (bikeIndex === -1) {
        throw new Error("Bike not found");
      }
      data.bikes.splice(bikeIndex, 1);
      saveData(data);
      return true;
    },
    addRide: (_, { input }) => {
      const data = getData();
      const newRide = {
        id: uuidv4(),
        ...input,
      };
      data.rides.push(newRide);
      saveData(data);
      return newRide;
    },
    updateRide: (_, { id, input }) => {
      const data = getData();
      const rideIndex = data.rides.findIndex((ride) => ride.id === id);
      if (rideIndex === -1) {
        throw new Error("Ride not found");
      }
      data.rides[rideIndex] = {
        ...data.rides[rideIndex],
        ...input,
      };
      saveData(data);
      return data.rides[rideIndex];
    },
    removeRide: (_, { id }: { id: string }) => {
      const data = getData();
      const rideIndex = data.rides.findIndex((ride) => ride.id === id);
      if (rideIndex === -1) {
        throw new Error("Ride not found");
      }
      data.rides.splice(rideIndex, 1);
      saveData(data);
      return true;
    },
  },
};

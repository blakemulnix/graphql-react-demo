-- CreateTable
CREATE TABLE "Bike" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "nickname" TEXT
);

-- CreateTable
CREATE TABLE "Ride" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bikeId" INTEGER NOT NULL,
    "distance" REAL NOT NULL,
    "location" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "Ride_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

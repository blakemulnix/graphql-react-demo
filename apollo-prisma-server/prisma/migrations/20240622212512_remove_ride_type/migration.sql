/*
  Warnings:

  - You are about to drop the column `type` on the `Ride` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ride" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bikeId" INTEGER NOT NULL,
    "distance" REAL NOT NULL,
    "location" TEXT NOT NULL,
    CONSTRAINT "Ride_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Ride" ("bikeId", "distance", "id", "location") SELECT "bikeId", "distance", "id", "location" FROM "Ride";
DROP TABLE "Ride";
ALTER TABLE "new_Ride" RENAME TO "Ride";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

/*
  Warnings:

  - You are about to drop the `Items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Items" DROP CONSTRAINT "Items_roomId_fkey";

-- DropTable
DROP TABLE "Items";

-- DropTable
DROP TABLE "Room";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "gmail" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Travel" (
    "travel_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" JSONB NOT NULL,
    "guide" BOOLEAN NOT NULL,
    "day" INTEGER NOT NULL,
    "startDate" JSONB NOT NULL,

    CONSTRAINT "Travel_pkey" PRIMARY KEY ("travel_id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "schedule_id" SERIAL NOT NULL,
    "d1" JSONB NOT NULL,
    "d2" JSONB NOT NULL,
    "d3" JSONB NOT NULL,
    "d4" JSONB NOT NULL,
    "d5" JSONB NOT NULL,
    "d6" JSONB NOT NULL,
    "d7" JSONB NOT NULL,
    "travel_id" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("schedule_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_gmail_key" ON "User"("gmail");

-- AddForeignKey
ALTER TABLE "Schedule" ADD CONSTRAINT "Schedule_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "Travel"("travel_id") ON DELETE RESTRICT ON UPDATE CASCADE;

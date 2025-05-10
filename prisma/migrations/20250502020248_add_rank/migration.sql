/*
  Warnings:

  - Added the required column `description` to the `Travel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank` to the `Travel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Travel" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "rank" DECIMAL(65,30) NOT NULL;

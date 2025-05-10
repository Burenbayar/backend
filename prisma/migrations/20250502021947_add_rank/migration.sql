/*
  Warnings:

  - You are about to alter the column `rank` on the `Travel` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Travel" ALTER COLUMN "rank" SET DATA TYPE DOUBLE PRECISION;

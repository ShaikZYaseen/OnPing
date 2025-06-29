/*
  Warnings:

  - You are about to drop the column `avgResponseTime` on the `Ticks` table. All the data in the column will be lost.
  - Added the required column `responseTime` to the `Ticks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticks" DROP COLUMN "avgResponseTime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "responseTime" INTEGER NOT NULL;

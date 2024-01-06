/*
  Warnings:

  - Made the column `firstName` on table `Account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `Account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthDate` on table `Account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL,
ALTER COLUMN "birthDate" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;

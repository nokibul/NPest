/*
  Warnings:

  - Made the column `approvedBy` on table `Member` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_approvedBy_fkey";

-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "approvedBy" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_approvedBy_fkey" FOREIGN KEY ("approvedBy") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

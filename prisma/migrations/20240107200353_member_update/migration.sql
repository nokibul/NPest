/*
  Warnings:

  - You are about to drop the column `account_id` on the `CompanyMember` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `CompanyMember` table. All the data in the column will be lost.
  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `account` to the `CompanyMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `approvedBy` to the `CompanyMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `CompanyMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CompanyMember` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CompanyMember" DROP CONSTRAINT "CompanyMember_account_id_fkey";

-- DropForeignKey
ALTER TABLE "CompanyMember" DROP CONSTRAINT "CompanyMember_company_id_fkey";

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_account_fkey";

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_approvedBy_fkey";

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_company_fkey";

-- AlterTable
ALTER TABLE "CompanyMember" DROP COLUMN "account_id",
DROP COLUMN "company_id",
ADD COLUMN     "account" INTEGER NOT NULL,
ADD COLUMN     "approvedBy" INTEGER NOT NULL,
ADD COLUMN     "company" INTEGER NOT NULL,
ADD COLUMN     "isApproved" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(6) NOT NULL;

-- DropTable
DROP TABLE "Member";

-- AddForeignKey
ALTER TABLE "CompanyMember" ADD CONSTRAINT "CompanyMember_account_fkey" FOREIGN KEY ("account") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyMember" ADD CONSTRAINT "CompanyMember_company_fkey" FOREIGN KEY ("company") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyMember" ADD CONSTRAINT "CompanyMember_approvedBy_fkey" FOREIGN KEY ("approvedBy") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

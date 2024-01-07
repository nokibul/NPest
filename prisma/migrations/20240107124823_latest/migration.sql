/*
  Warnings:

  - Changed the type of `gender` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "gender" AS ENUM ('male', 'female', 'others');

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "gender",
ADD COLUMN     "gender" "gender" NOT NULL;

-- DropEnum
DROP TYPE "Gender";

/*
  Warnings:

  - Changed the type of `role` on the `CourseEnrollment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CourseEnrollment" DROP COLUMN "role",
ADD COLUMN     "role" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "CourseEnrollment_userId_role_idx" ON "CourseEnrollment"("userId", "role");

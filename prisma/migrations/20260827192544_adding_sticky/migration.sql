-- CreateEnum
CREATE TYPE "StickyType" AS ENUM ('NOTE', 'REMINDER');

-- CreateTable
CREATE TABLE "sticky" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stickyName" TEXT NOT NULL,
    "stickyType" "StickyType" NOT NULL,
    "userId" TEXT NOT NULL,
    "stickyContent" TEXT,
    "stickyDueDate" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "sticky_id_key" ON "sticky"("id");

-- AddForeignKey
ALTER TABLE "sticky" ADD CONSTRAINT "sticky_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

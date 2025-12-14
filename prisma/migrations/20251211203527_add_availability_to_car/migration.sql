-- CreateEnum
CREATE TYPE "Availability" AS ENUM ('Available', 'Sold', 'Reserved');

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "availability" "Availability" NOT NULL DEFAULT 'Available';

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ORGANIZER', 'FAN');

-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('AVAILABLE', 'CANCELED');

-- CreateEnum
CREATE TYPE "PurchaseStatus" AS ENUM ('CONFIRMED', 'CANCELED');

-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('AVAILABLE', 'USED', 'CANCELED');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches" (
    "id" SERIAL NOT NULL,
    "homeTeam" TEXT NOT NULL,
    "awayTeam" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "ticketPrice" DECIMAL(10,2) NOT NULL,
    "ticketQuantity" INTEGER NOT NULL,
    "status" "MatchStatus" NOT NULL DEFAULT 'AVAILABLE',
    "organizerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchases" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalAmount" DECIMAL(10,2) NOT NULL,
    "status" "PurchaseStatus" NOT NULL DEFAULT 'CONFIRMED',
    "fanId" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "status" "TicketStatus" NOT NULL DEFAULT 'AVAILABLE',
    "validatedAt" TIMESTAMP(3),
    "purchaseId" INTEGER NOT NULL,
    "fanId" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tickets_code_key" ON "tickets"("code");

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_fanId_fkey" FOREIGN KEY ("fanId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_fanId_fkey" FOREIGN KEY ("fanId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

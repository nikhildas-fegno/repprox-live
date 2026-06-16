-- CreateEnum
CREATE TYPE "DemoMeetingStatus" AS ENUM ('SCHEDULED', 'COMPLETED', 'CANCELLED', 'RESCHEDULED');

-- CreateTable
CREATE TABLE "DemoLead" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "teamSize" TEXT NOT NULL,
    "painPoints" TEXT[],
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DemoLead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemoMeeting" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "timezone" TEXT NOT NULL,
    "status" "DemoMeetingStatus" NOT NULL DEFAULT 'SCHEDULED',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DemoMeeting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DemoMeeting_leadId_key" ON "DemoMeeting"("leadId");

-- CreateIndex
CREATE UNIQUE INDEX "DemoMeeting_scheduledAt_key" ON "DemoMeeting"("scheduledAt");

-- AddForeignKey
ALTER TABLE "DemoMeeting" ADD CONSTRAINT "DemoMeeting_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "DemoLead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

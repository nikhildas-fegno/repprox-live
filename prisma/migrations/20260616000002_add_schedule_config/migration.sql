-- CreateTable
CREATE TABLE "ScheduleConfig" (
    "id" TEXT NOT NULL DEFAULT 'main',
    "enabledSlots" TEXT[],
    "availableDays" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ScheduleConfig_pkey" PRIMARY KEY ("id")
);

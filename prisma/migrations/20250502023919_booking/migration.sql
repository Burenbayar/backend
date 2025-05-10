-- CreateTable
CREATE TABLE "Booking" (
    "booking_id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "travel_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("booking_id")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_travel_id_fkey" FOREIGN KEY ("travel_id") REFERENCES "Travel"("travel_id") ON DELETE RESTRICT ON UPDATE CASCADE;

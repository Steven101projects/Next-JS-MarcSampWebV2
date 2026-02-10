"use client"

import Image from "next/image"
import Link from "next/link"
import MainFooter from "../userSite/MainFooter"
import BookAppointment from "../userSite/components/appointment_components/BookAppointment"

export default function AppointmentPage() {
  return (
    <div className="relative">

      {/* Top banner image */}
      <div className="relative h-[25vh] min-h-[220px] w-full">
        <Image
          src="/appointment-banner.jpg"
          alt="Appointment banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Appointment form */}
      <BookAppointment />

      <MainFooter />
    </div>
  )
}

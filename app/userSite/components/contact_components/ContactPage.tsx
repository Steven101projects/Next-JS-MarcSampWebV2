




import {
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline"
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <section className="px-4 pt-20 text-center sm:pt-24">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
          Discuss your infrastructure requirements with our technical team
        </p>
      </section>

      {/* Cards */}
      <section className="mx-auto mt-12 max-w-7xl px-4 pb-20 sm:mt-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">
          <ContactCard
            icon={<PhoneIcon className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />}
            title="Mobile"
            subtitle="09688751273"
          />

          <ContactCard
            icon={<EnvelopeIcon className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />}
            title="Sales Email"
            subtitle="sales@net-bridge.ph"
          />

          <ContactCard
            icon={<EnvelopeIcon className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6" />}
            title="General Inquiries"
            subtitle="inquiry@net-bridge.ph"
          />

          <ContactCard
            icon={<FaFacebookF className="h-4 w-4 text-sky-600 sm:h-5 sm:w-5" />}
            title="Facebook"
            subtitle="Follow us on Facebook"
          />

          <ContactCard
            icon={<FaWhatsapp className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />}
            title="WhatsApp"
            subtitle="Chat with us on WhatsApp"
          />
        </div>
      </section>
    </main>
  )
}

type ContactCardProps = {
  icon: React.ReactNode
  title: string
  subtitle: string
}

function ContactCard({ icon, title, subtitle }: ContactCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md sm:p-6">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 sm:mb-4 sm:h-12 sm:w-12">
        {icon}
      </div>

      <h3 className="text-base font-semibold sm:text-lg">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-600">
        {subtitle}
      </p>
    </div>
  )
}

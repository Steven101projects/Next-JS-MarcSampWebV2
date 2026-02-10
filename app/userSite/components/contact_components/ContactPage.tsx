import {
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline"
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"


const contactItems = [
  {
    title: "Mobile",
    subtitle: "09688751273",
    accent: "text-emerald-600",
    bg: "bg-emerald-100",
    darkBg: "dark:bg-emerald-900",
    icon: <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6" />
  },
  {
    title: "Sales Email",
    subtitle: "sales@netbridge.ph",
    accent: "text-lime-600",
    bg: "bg-lime-100",
    darkBg: "dark:bg-lime-900",
    icon: <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
  },
  {
    title: "General Inquiries",
    subtitle: "inquiry@netbridge.ph",
    accent: "text-yellow-600",
    bg: "bg-yellow-100",
    darkBg: "dark:bg-yellow-900",
    icon: <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
  },
  {
    title: "Facebook",
    subtitle: "Follow us on Facebook",
    accent: "text-sky-600",
    bg: "bg-sky-100",
    darkBg: "dark:bg-sky-900",
    icon: <FaFacebookF className="h-4 w-4 sm:h-5 sm:w-5" />
  },
  {
    title: "WhatsApp",
    subtitle: "Chat with us on WhatsApp",
    accent: "text-green-600",
    bg: "bg-green-100",
    darkBg: "dark:bg-green-900",
    icon: <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
  }
]

export default function ContactPage() {
  return (
    <main className="relative h-1/2 overflow-hidde  bg-gradient-to-b from-green-500 to-lime-300 text-gray-900">

      {/* Texture or glow layer optional */}
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-90 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('/service-texture3.png')",
          backgroundRepeat: "repeat"
        }}
      />
      {/* Header */}
      <section className="relative px-4 pt-28 text-center sm:pt-32">
        <div className="mx-auto max-w-4xl rounded-2xl px-8 py-10 backdrop-blur-md shadow-lg shadow-lime-500/10">
          <h1 className="text-3xl text-white font-extrabold sm:text-4xl lg:text-7xl">
            Contact Us
          </h1>
          <p className="mx-auto text-2xl mt-4 text-white lg:text-2xl">
            Discuss your infrastructure requirements with our technical team
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="relative mx-auto mt-16 max-w-7xl px-4 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {contactItems.map((item) => (
            <ContactCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

type ContactCardProps = {
  icon: React.ReactNode
  title: string
  subtitle: string
  accent: string
  bg: string
  darkBg: string
}

function ContactCard({
  icon,
  title,
  subtitle,
  accent,
  bg,
  darkBg
}: ContactCardProps) {
  return (
    <div id="contacts" className="group flex flex-col items-center rounded-2xl border border-green-800 bg-green-500 p-6 text-center backdrop-blur-md shadow-lg shadow-lime-500/10 transition hover:-translate-y-1 hover:shadow-lime-500/20">
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${bg} ${darkBg} ${accent}`}>
        {icon}
      </div>

      <h3 className="text-base text-white font-semibold sm:text-lg">
        {title}
      </h3>

      <p className="mt-1 text-sm text-white">
        {subtitle}
      </p>
    </div>
  )
}

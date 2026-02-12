

function SectionTitle({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div>
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="mt-2 text-white/60">{subtitle}</p>
    </div>
  )
}

function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl">
      {children}
    </div>
  )
}

export default function EditContentPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="Edit Content"
        subtitle="Update your homepage content"
      />

      <GlassCard>
        <div className="space-y-4">
          <input
            placeholder="Hero Title"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-lime-400/60 focus:ring-2 focus:ring-lime-400/20"
          />

          <textarea
            placeholder="Hero Description"
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-lime-400/60 focus:ring-2 focus:ring-lime-400/20"
          />

          <button
            className="rounded-xl bg-gradient-to-b from-lime-500 to-green-600 px-6 py-3 font-bold text-white shadow-lg shadow-lime-500/20 transition hover:scale-105"
          >
            Save Changes
          </button>
        </div>
      </GlassCard>
    </div>
  )
}

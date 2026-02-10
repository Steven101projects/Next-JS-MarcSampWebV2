


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-white/60">
          Overview and quick actions
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        <StatCard title="Users" value="128" />
        <StatCard title="Active Sessions" value="42" />
        <StatCard title="Revenue" value="$2,340" />
        <StatCard title="Errors" value="3" />
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left section */}
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold mb-4">Recent Activity</h2>

          <ul className="space-y-3 text-sm text-white/70">
            <li>User John logged in</li>
            <li>New account created</li>
            <li>Password updated</li>
            <li>System backup completed</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>

          <div className="flex flex-col gap-3">
            <button className="rounded-xl bg-lime-500 py-2 font-bold text-black hover:opacity-90">
              Add User
            </button>

            <button className="rounded-xl bg-white/10 py-2 font-bold hover:bg-white/20">
              View Reports
            </button>

            <button className="rounded-xl bg-white/10 py-2 font-bold hover:bg-white/20">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-white/60">{title}</p>
      <p className="mt-2 text-2xl font-extrabold">{value}</p>
    </div>
  )
}


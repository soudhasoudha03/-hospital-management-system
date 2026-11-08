import { useState } from "react";
import {
  Activity,
  LayoutDashboard,
  Users,
  UserRound,
  CalendarDays,
  FileText,
  CreditCard,
  Settings,
  Bell,
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Clock,
  Menu,
  X,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Patients", icon: Users },
  { name: "Doctors", icon: UserRound },
  { name: "Appointments", icon: CalendarDays },
  { name: "Medical Records", icon: FileText },
  { name: "Billing", icon: CreditCard },
];

const appointments = [
  { name: "Olivia Martin", id: "PT-1001", doctor: "Dr. James Wilson", department: "Cardiology", time: "09:00 AM", status: "Confirmed", color: "blue" },
  { name: "Noah Williams", id: "PT-1002", doctor: "Dr. Emily Chen", department: "Neurology", time: "10:30 AM", status: "Pending", color: "amber" },
  { name: "Ava Johnson", id: "PT-1003", doctor: "Dr. Michael Brown", department: "Orthopedic", time: "11:15 AM", status: "Confirmed", color: "blue" },
  { name: "Liam Davis", id: "PT-1004", doctor: "Dr. Sarah Miller", department: "Pediatrics", time: "01:00 PM", status: "Cancelled", color: "red" },
  { name: "Sophia Garcia", id: "PT-1005", doctor: "Dr. James Wilson", department: "Cardiology", time: "02:30 PM", status: "Confirmed", color: "blue" },
];

const doctors = [
  { name: "Dr. James Wilson", department: "Cardiologist", initials: "JW", color: "bg-blue-100 text-blue-700", availability: "Available" },
  { name: "Dr. Emily Chen", department: "Neurologist", initials: "EC", color: "bg-purple-100 text-purple-700", availability: "Available" },
  { name: "Dr. Michael Brown", department: "Orthopedic", initials: "MB", color: "bg-orange-100 text-orange-700", availability: "In consultation" },
  { name: "Dr. Sarah Miller", department: "Pediatrician", initials: "SM", color: "bg-pink-100 text-pink-700", availability: "Available" },
];

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredAppointments = appointments.filter((appointment) =>
    `${appointment.name} ${appointment.doctor} ${appointment.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const stats = [
    {
      title: "Total Patients",
      value: "2,845",
      change: "+12.5%",
      description: "from last month",
      icon: Users,
      iconStyle: "bg-blue-50 text-blue-600",
      positive: true,
    },
    {
      title: "Total Doctors",
      value: "48",
      change: "+4.2%",
      description: "from last month",
      icon: Stethoscope,
      iconStyle: "bg-purple-50 text-purple-600",
      positive: true,
    },
    {
      title: "Appointments",
      value: "186",
      change: "+8.7%",
      description: "from last month",
      icon: CalendarDays,
      iconStyle: "bg-emerald-50 text-emerald-600",
      positive: true,
    },
    {
      title: "Total Revenue",
      value: "₹8,42,500",
      change: "-2.4%",
      description: "from last month",
      icon: CreditCard,
      iconStyle: "bg-orange-50 text-orange-600",
      positive: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <HeartPulse size={25} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              MediCare
            </h1>
            <p className="text-xs text-slate-400">Hospital Management</p>
          </div>
          <button
            className="ml-auto text-slate-400 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Main Menu
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActivePage(item.name);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon size={19} />
                  {item.name}
                </button>
              );
            })}
          </nav>

          <p className="mb-3 mt-9 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Preferences
          </p>

          <button
            onClick={() => setActivePage("Settings")}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${
              activePage === "Settings"
                ? "bg-blue-600 text-white"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            <Settings size={19} />
            Settings
          </button>
        </div>

        <div className="mt-auto p-4">
          <div className="rounded-2xl bg-blue-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-blue-700">
              <Activity size={18} />
              <span className="text-sm font-semibold">Need assistance?</span>
            </div>
            <p className="mb-3 text-xs leading-5 text-slate-500">
              Contact the support team if you need help.
            </p>
            <button className="w-full rounded-lg bg-white py-2 text-xs font-semibold text-blue-700 shadow-sm hover:bg-blue-100">
              Contact Support
            </button>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <main className="min-h-screen lg:ml-64">
        {/* Top header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur-md md:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={22} />
            </button>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {activePage}
              </h2>
              <p className="hidden text-xs text-slate-400 sm:block">
                Hospital / {activePage}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:flex">
              <Search size={17} className="text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search appointments..."
                className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400 md:w-52"
              />
            </div>

            <button className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50">
              <Bell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
            </button>

            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                AD
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">
                  Admin User
                </p>
                <p className="text-xs text-slate-400">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="mx-auto max-w-[1500px] p-5 md:p-8">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Welcome back, Admin!
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Here is what's happening at your hospital today.
              </p>
            </div>
            <button
              onClick={() => setActivePage("Appointments")}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              <Plus size={18} />
              New Appointment
            </button>
          </div>

          {/* Statistics */}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className={`rounded-xl p-3 ${stat.iconStyle}`}>
                      <Icon size={22} />
                    </div>
                    <button className="text-slate-400 hover:text-slate-700">
                      <MoreHorizontal size={21} />
                    </button>
                  </div>

                  <p className="mt-5 text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                    {stat.value}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs">
                    <span
                      className={`flex items-center gap-1 font-semibold ${
                        stat.positive ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      {stat.positive ? (
                        <ArrowUpRight size={14} />
                      ) : (
                        <ArrowDownRight size={14} />
                      )}
                      {stat.change}
                    </span>
                    <span className="text-slate-400">{stat.description}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Appointments and doctors */}
          <div className="mt-7 grid gap-6 xl:grid-cols-3">
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white xl:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-5">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Recent Appointments
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Overview of today's appointments
                  </p>
                </div>
                <button
                  onClick={() => setActivePage("Appointments")}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  View all
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-400">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Patient</th>
                      <th className="px-5 py-4 font-semibold">Doctor</th>
                      <th className="px-5 py-4 font-semibold">Time</th>
                      <th className="px-5 py-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredAppointments.map((appointment) => (
                      <tr
                        key={appointment.id}
                        className="transition hover:bg-slate-50"
                      >
                        <td className="px-5 py-4">
                          <p className="text-sm font-semibold text-slate-800">
                            {appointment.name}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            {appointment.id}
                          </p>
                        </td>
                        <td className="px-5 py-4">
                          <p className="text-sm text-slate-700">
                            {appointment.doctor}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            {appointment.department}
                          </p>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Clock size={15} className="text-slate-400" />
                            {appointment.time}
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                              appointment.color === "blue"
                                ? "bg-blue-50 text-blue-700"
                                : appointment.color === "amber"
                                  ? "bg-amber-50 text-amber-700"
                                  : "bg-red-50 text-red-600"
                            }`}
                          >
                            {appointment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {filteredAppointments.length === 0 && (
                      <tr>
                        <td
                          colSpan="4"
                          className="px-5 py-10 text-center text-sm text-slate-400"
                        >
                          No appointments found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Doctors */}
            <section className="rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 p-5">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Our Doctors
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Medical specialists
                  </p>
                </div>
                <button
                  onClick={() => setActivePage("Doctors")}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  View all
                </button>
              </div>

              <div className="divide-y divide-slate-100 px-5">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.name}
                    className="flex items-center gap-3 py-4"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${doctor.color}`}
                    >
                      {doctor.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {doctor.name}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {doctor.department}
                      </p>
                    </div>
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        doctor.availability === "Available"
                          ? "bg-emerald-500"
                          : "bg-orange-400"
                      }`}
                    />
                  </div>
                ))}
              </div>

              <div className="p-5 pt-2">
                <div className="rounded-xl bg-emerald-50 p-3">
                  <p className="text-xs font-semibold text-emerald-700">
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    Doctors are on duty
                  </p>
                  <p className="mt-1 text-xs text-emerald-600">
                    Availability shown for demonstration.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom information */}
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <CalendarDays size={23} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Today's Schedule
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Manage and review daily appointments
                </p>
              </div>
              <button
                onClick={() => setActivePage("Appointments")}
                className="ml-auto text-blue-600"
              >
                <ArrowUpRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
                <FileText size={23} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Patient Records
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Access and manage patient information
                </p>
              </div>
              <button
                onClick={() => setActivePage("Medical Records")}
                className="ml-auto text-blue-600"
              >
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>

          <footer className="mt-8 pb-4 text-center text-xs text-slate-400">
            © 2026 MediCare Hospital Management System. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
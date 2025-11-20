import { Dashboard } from "../../../components/Dashboard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen py-8">
      <h1 className="text-center text-3xl font-bold text-ordem-white mb-8 tracking-widest">
        PROTOCOLO <span className="text-ordem-red">OMEGA</span>
      </h1>
      <Dashboard />
    </div>
  );
}

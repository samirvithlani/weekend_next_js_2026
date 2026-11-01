import { connectDB } from "@/lib/db";
const dynamic = "force-dynamic"

export default async function dbDemoPage() {
  const conn = await connectDB();
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  const state = states[conn.connection.readyState];
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">DB TEST</h1>
      <h1 className="text-xl font-bold">status: {state}</h1>
      <p>Database: {conn.connection.name}</p>
    </main>
  );
}

import Image from "next/image";

export default function Home() {

  let x:number=23

  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold">Welcome to Next jS</h1>
      <h1 className="text-l">x = {x}</h1>
    </main>
  );
}

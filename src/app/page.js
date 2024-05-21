import Image from "next/image";



export default function Home() {
  return (
    <main className="px-5 flex items-center justify-center flex-col h-screen">
      <p>velkommen til vinklubben</p>
      <Image src="/vinklubbg.jpg" width={800} height={600} alt="Billede af vinklubben i Århus" />
    </main>
  );
}

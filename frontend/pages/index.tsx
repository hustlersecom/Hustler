import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Hustler Marketplace</h1>
        <p className="mb-2">Buy digital services: TikTok followers, Instagram likes, YouTube views, WhatsApp numbers, and more!</p>
        <a href="/services" className="text-blue-600 underline">Browse Services</a>
      </main>
    </div>
  );
}

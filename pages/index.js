import CheckoutButton from "../components/CheckoutButton";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Boho Jewelry by Anaya</h1>
      <img src="/boho-necklace.jpg" className="w-full rounded-xl mb-4" alt="jewelry" />
      <p className="mb-2">Handcrafted pieces inspired by Rajasthan. Price: ₹1299</p>
      <CheckoutButton amount={1299} />
    </div>
  );
}
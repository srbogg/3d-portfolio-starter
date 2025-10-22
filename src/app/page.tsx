import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import Sound from "@/components/sound";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Sound />
      <Navbar />
      <Hero />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}

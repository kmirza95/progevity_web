import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <>
      <Navbar />
      <Hero />
      <Differentiators />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

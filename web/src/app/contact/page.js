import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ZohoContactForm from "@/components/ZohoContactForm";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Contacto"
        subtitle="Estamos listos para asesorarte en tu inversión de vida."
        bgImage="/images/Foto-Pueblito-Atarddecer.jpg"
      />
      <section style={{
        padding: '6rem 2rem',
        minHeight: '80vh',
        backgroundColor: '#F9F7F2',
        display: 'flex',
        alignItems: 'center'
      }}>
        <ZohoContactForm />
      </section>
      <Footer />
    </main>
  );
}

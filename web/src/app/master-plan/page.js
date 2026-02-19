"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MasterPlanHotspots from "@/components/MasterPlanHotspots";

export default function MasterPlanPage() {

  return (
    <main style={{ backgroundColor: '#F9F7F2', minHeight: '100vh' }}>
      <Navbar />

      <PageHeader
        title="Master Plan"
        subtitle="Una visión integral de nuestra comunidad."
        bgImage="/images/portadas/Masterplan.png"
      />

      <section style={{ padding: '4rem 1rem', maxWidth: '1400px', margin: '0 auto' }}>

        {/* INTERACTIVE HOTSPOTS MAP */}
        <div className="mb-16">
          <MasterPlanHotspots />
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="/invest" className="btn-primary" style={{
            display: 'inline-block',
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            boxShadow: '0 10px 20px rgba(46, 58, 140, 0.2)'
          }}>
            Ver Oportunidades de Inversión
          </a>
        </div>

      </section>

      <Footer />
    </main>
  );
}



'use client'

import { useEffect, useState } from 'react'
import { MatrixSphere } from '@/components/matrix-sphere'

const navItems = ['Beranda', 'Layanan', 'Proses', 'Developers', 'Kontak']

export default function Page() {
  const [activeDevTab, setActiveDevTab] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="landing-page">
      <div className="grid-overlay" aria-hidden="true" />
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <a className="brand-mark" href="#beranda" aria-label="RoboKomputer beranda">
          <span>Robo</span><strong>Komputer</strong>
          <small>TM</small>
        </a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navItems.map((item) => <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item}>{item}</a>)}
        </nav>
        <a className="header-cta" href="https://wa.me/6285216758721" target="_blank" rel="noreferrer">Konsultasi gratis <span>↗</span></a>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Solusi digital untuk bisnis modern</p>
          <h1>Bangun ide.<br /><em>Gerakkan</em> bisnis.</h1>
          <p className="hero-description">Aplikasi web, desktop, dan service laptop yang dirancang untuk membantu bisnis tumbuh lebih cepat, rapi, dan siap menghadapi masa depan.</p>
          <div className="hero-actions">
            <a className="primary-button" href="https://wa.me/6285216758721" target="_blank" rel="noreferrer">Mulai konsultasi <span>↗</span></a>
            <a className="text-button" href="#layanan">Lihat layanan <span>↓</span></a>
          </div>
          <div className="proof-row"><span><b>10+</b> tahun pengalaman</span><span><b>50+</b> proyek selesai</span><span><b>100%</b> fokus solusi</span></div>
        </div>
        <div className="sphere-stage" aria-hidden="true">
          <div className="sphere-halo" />
          <MatrixSphere />
          <div className="sphere-label">SYSTEM / ONLINE<br /><b>ROBO.01</b></div>
        </div>
      </section>

      <section className="capabilities" id="kapabilitas">
        <div className="capabilities-heading">
          <p className="section-kicker">Capabilities</p>
          <h2>Semua yang kamu<br /><em>butuhkan.</em></h2>
        </div>
        <div className="capability-grid">
          <article className="capability-card">
            <span>01</span>
            <div>
              <h3>Instant Deployment</h3>
              <p>Rilis aplikasi ke pengguna lebih cepat dengan proses yang rapi, ringan, dan siap digunakan di berbagai perangkat.</p>
            </div>
            <div className="card-visual deploy-visual" aria-hidden="true">
              <svg viewBox="0 0 200 160" className="w-full h-full">
                <defs>
                  <clipPath id="deployClip">
                    <rect x="30" y="20" width="140" height="120" rx="4"></rect>
                  </clipPath>
                </defs>
                <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2"></rect>
                <g clipPath="url(#deployClip)">
                  <rect x="40" y="35" width="120" height="10" rx="2" fill="currentColor" opacity="0.15">
                    <animate attributeName="opacity" values="0.15;0.8;0.15" dur="2s" begin="0s" repeatCount="indefinite"></animate>
                    <animate attributeName="width" values="20;120;20" dur="2s" begin="0s" repeatCount="indefinite"></animate>
                  </rect>
                  <rect x="40" y="51" width="120" height="10" rx="2" fill="currentColor" opacity="0.15">
                    <animate attributeName="opacity" values="0.15;0.8;0.15" dur="2s" begin="0.15s" repeatCount="indefinite"></animate>
                    <animate attributeName="width" values="20;120;20" dur="2s" begin="0.15s" repeatCount="indefinite"></animate>
                  </rect>
                  <rect x="40" y="67" width="120" height="10" rx="2" fill="currentColor" opacity="0.15">
                    <animate attributeName="opacity" values="0.15;0.8;0.15" dur="2s" begin="0.3s" repeatCount="indefinite"></animate>
                    <animate attributeName="width" values="20;120;20" dur="2s" begin="0.3s" repeatCount="indefinite"></animate>
                  </rect>
                  <rect x="40" y="83" width="120" height="10" rx="2" fill="currentColor" opacity="0.15">
                    <animate attributeName="opacity" values="0.15;0.8;0.15" dur="2s" begin="0.45s" repeatCount="indefinite"></animate>
                    <animate attributeName="width" values="20;120;20" dur="2s" begin="0.45s" repeatCount="indefinite"></animate>
                  </rect>
                  <rect x="40" y="99" width="120" height="10" rx="2" fill="currentColor" opacity="0.15">
                    <animate attributeName="opacity" values="0.15;0.8;0.15" dur="2s" begin="0.6s" repeatCount="indefinite"></animate>
                    <animate attributeName="width" values="20;120;20" dur="2s" begin="0.6s" repeatCount="indefinite"></animate>
                  </rect>
                  <rect x="40" y="115" width="120" height="10" rx="2" fill="currentColor" opacity="0.15">
                    <animate attributeName="opacity" values="0.15;0.8;0.15" dur="2s" begin="0.75s" repeatCount="indefinite"></animate>
                    <animate attributeName="width" values="20;120;20" dur="2s" begin="0.75s" repeatCount="indefinite"></animate>
                  </rect>
                </g>
                <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"></animate>
                </circle>
              </svg>
            </div>
          </article>
          <article className="capability-card">
            <span>02</span>
            <div>
              <h3>AI-Native Workflows</h3>
              <p>Bangun alur kerja cerdas dengan otomasi dan teknologi AI yang membantu tim bekerja lebih efisien.</p>
            </div>
            <div className="card-visual ai-visual" aria-hidden="true">
              <svg viewBox="0 0 200 160" className="w-full h-full">
                <circle cx="100" cy="80" r="12" fill="currentColor">
                  <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite"></animate>
                </circle>
                <g>
                  <line x1="100" y1="80" x2="150" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0s" repeatCount="indefinite"></animate>
                  </line>
                  <circle cx="150" cy="80" r="6" fill="none" stroke="currentColor" strokeWidth="2">
                    <animate attributeName="r" values="6;8;6" dur="2s" begin="0s" repeatCount="indefinite"></animate>
                  </circle>
                </g>
                <g>
                  <line x1="100" y1="80" x2="125" y2="123.301" stroke="currentColor" strokeWidth="1" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0.3s" repeatCount="indefinite"></animate>
                  </line>
                  <circle cx="125" cy="123.301" r="6" fill="none" stroke="currentColor" strokeWidth="2">
                    <animate attributeName="r" values="6;8;6" dur="2s" begin="0.3s" repeatCount="indefinite"></animate>
                  </circle>
                </g>
                <g>
                  <line x1="100" y1="80" x2="75" y2="123.301" stroke="currentColor" strokeWidth="1" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0.6s" repeatCount="indefinite"></animate>
                  </line>
                  <circle cx="75" cy="123.301" r="6" fill="none" stroke="currentColor" strokeWidth="2">
                    <animate attributeName="r" values="6;8;6" dur="2s" begin="0.6s" repeatCount="indefinite"></animate>
                  </circle>
                </g>
                <g>
                  <line x1="100" y1="80" x2="50" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0.9s" repeatCount="indefinite"></animate>
                  </line>
                  <circle cx="50" cy="80" r="6" fill="none" stroke="currentColor" strokeWidth="2">
                    <animate attributeName="r" values="6;8;6" dur="2s" begin="0.9s" repeatCount="indefinite"></animate>
                  </circle>
                </g>
                <g>
                  <line x1="100" y1="80" x2="75" y2="36.698" stroke="currentColor" strokeWidth="1" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="1.2s" repeatCount="indefinite"></animate>
                  </line>
                  <circle cx="75" cy="36.698" r="6" fill="none" stroke="currentColor" strokeWidth="2">
                    <animate attributeName="r" values="6;8;6" dur="2s" begin="1.2s" repeatCount="indefinite"></animate>
                  </circle>
                </g>
                <g>
                  <line x1="100" y1="80" x2="125" y2="36.698" stroke="currentColor" strokeWidth="1" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="1.5s" repeatCount="indefinite"></animate>
                  </line>
                  <circle cx="125" cy="36.698" r="6" fill="none" stroke="currentColor" strokeWidth="2">
                    <animate attributeName="r" values="6;8;6" dur="2s" begin="1.5s" repeatCount="indefinite"></animate>
                  </circle>
                </g>
                <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
                  <animate attributeName="r" values="20;60" dur="2s" repeatCount="indefinite"></animate>
                  <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite"></animate>
                </circle>
              </svg>
            </div>
          </article>
          <article className="capability-card">
            <span>03</span>
            <div>
              <h3>Real-time Collaboration</h3>
              <p>Kolaborasi lebih lancar dengan pembaruan langsung, komunikasi yang jelas, dan progres yang selalu terlihat.</p>
            </div>
            <div className="card-visual collab-visual" aria-hidden="true">
              <svg viewBox="0 0 200 160" className="w-full h-full">
                <g>
                  <rect x="30" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2"></rect>
                  <text x="55" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">A</text>
                  <circle cx="55" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2"></circle>
                </g>
                <g>
                  <rect x="120" y="50" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2"></rect>
                  <text x="145" y="85" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor">B</text>
                  <circle cx="145" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="2"></circle>
                </g>
                <line x1="80" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite"></animate>
                </line>
                <circle r="4" fill="currentColor">
                  <animateMotion dur="1.5s" repeatCount="indefinite" path="M 80 80 L 120 80"></animateMotion>
                </circle>
                <path id="dataPath" d="M 80 80 L 120 80" fill="none"></path>
                <g transform="translate(100, 130)">
                  <circle r="6" fill="none" stroke="currentColor" strokeWidth="2">
                    <animate attributeName="r" values="6;10;6" dur="1s" repeatCount="indefinite"></animate>
                    <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"></animate>
                  </circle>
                </g>
              </svg>
            </div>
          </article>
          <article className="capability-card">
            <span>04</span>
            <div>
              <h3>Enterprise Security</h3>
              <p>Data bisnis tetap aman dengan kontrol akses berlapis, perlindungan menyeluruh, dan fondasi yang dapat dipercaya.</p>
            </div>
            <div className="card-visual security-visual" aria-hidden="true">
              <svg viewBox="0 0 200 160" className="w-full h-full">
                <path d="M 100 20 L 150 40 L 150 90 Q 150 130 100 145 Q 50 130 50 90 L 50 40 Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
                <path d="M 100 35 L 135 50 L 135 85 Q 135 115 100 128 Q 65 115 65 85 L 65 50 Z" fill="currentColor" opacity="0.1">
                  <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite"></animate>
                </path>
                <rect x="85" y="70" width="30" height="25" rx="3" fill="currentColor"></rect>
                <path d="M 90 70 L 90 60 Q 90 50 100 50 Q 110 50 110 60 L 110 70" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
                <circle cx="100" cy="80" r="4" fill="white"></circle>
                <rect x="98" y="82" width="4" height="8" fill="white"></rect>
                <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="1" opacity="0">
                  <animate attributeName="y1" values="40;120;40" dur="3s" repeatCount="indefinite"></animate>
                  <animate attributeName="y2" values="40;120;40" dur="3s" repeatCount="indefinite"></animate>
                  <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite"></animate>
                </line>
              </svg>
            </div>
          </article>
        </div>
      </section>

      <section className="services" id="layanan">
        <div><p className="section-kicker">/ Layanan kami</p><h2>Semua yang bisnis<br /><em>butuhkan.</em></h2></div>
        <div className="service-list">
          <article><span>01</span><div><h3>Aplikasi web & desktop</h3><p>Digitalisasi proses kerja dengan sistem yang cepat dan mudah digunakan.</p></div><b>↗</b></article>
          <article><span>02</span><div><h3>Dashboard & data realtime</h3><p>Ubah data menjadi keputusan melalui tampilan yang jelas dan informatif.</p></div><b>↗</b></article>
          <article><span>03</span><div><h3>Service laptop profesional</h3><p>Perawatan hardware dan software agar perangkat tetap siap bekerja.</p></div><b>↗</b></article>
        </div>
      </section>

      <section className="process-section" id="proses">
        <div>
          <p className="section-kicker">/ Proses kerja</p>
          <h2>Dari ide ke<br /><em>produksi.</em></h2>
        </div>
        <div className="process-list">
          <article>
            <span>01</span>
            <div>
              <h3>Discovery &amp; Strategy</h3>
              <p>Menganalisis kebutuhan spesifik bisnis dan merancang cetak biru arsitektur sistem yang efisien.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Rapid Development</h3>
              <p>Membangun aplikasi dan solusi digital dengan iterasi cepat, transparan, dan teruji kualitasnya.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Launch &amp; Support</h3>
              <p>Peluncuran mulus ke production dengan pendampingan penuh dan pemeliharaan berkelanjutan.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="integrations" id="integrations">
        <div className="integrations-heading">
          <p className="section-kicker">Integrations</p>
          <h2>Works with everything<br /><em>you already use.</em></h2>
          <p className="integrations-description">200+ integrasi siap pakai. Hubungkan seluruh ekosistem kerjamu dalam hitungan menit.</p>
        </div>
        <div className="integration-marquee" aria-label="Platform yang didukung">
          {[
            [['GitHub', 'Version Control'], ['Slack', 'Communication'], ['Stripe', 'Payments'], ['PostgreSQL', 'Database'], ['Redis', 'Cache'], ['AWS', 'Cloud'], ['MongoDB', 'Database'], ['Vercel', 'Hosting']],
            [['Figma', 'Design'], ['Linear', 'Project Management'], ['Notion', 'Documentation'], ['OpenAI', 'AI / ML'], ['GitHub', 'Version Control'], ['Slack', 'Communication'], ['Stripe', 'Payments'], ['PostgreSQL', 'Database']],
            [['AWS', 'Cloud'], ['MongoDB', 'Database'], ['Vercel', 'Hosting'], ['Figma', 'Design'], ['Linear', 'Project Management'], ['Notion', 'Documentation'], ['OpenAI', 'AI / ML'], ['GitHub', 'Version Control']],
          ].map((row, rowIndex) => (
            <div className={`integration-track integration-track-${rowIndex + 1}`} key={rowIndex}>
              {[...row, ...row].map(([name, type], index) => (
                <div className="integration-chip" key={`${name}-${rowIndex}-${index}`}><strong>{name}</strong><span>{type}</span></div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="developers-section" id="developers">
        <div className="developers-heading">
          <p className="section-kicker">/ For developers</p>
          <h2>Integrasi kilat.<br /><em>Developer-first.</em></h2>
          <p>Bangun, uji, dan deploy solusi digital dalam hitungan menit menggunakan CLI dan SDK resmi RoboKomputer.</p>
        </div>
        <div className="developers-content">
          <div className="developers-tabs">
            {['CLI Install', 'API Client', 'Webhook Setup'].map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveDevTab(idx)}
                className={`dev-tab-btn ${activeDevTab === idx ? 'active' : ''}`}
              >
                <span>0{idx + 1}</span> {tab}
              </button>
            ))}
          </div>
          <div className="developers-code-box">
            <div className="code-box-header">
              <div className="window-dots"><span /><span /><span /></div>
              <span className="code-filename">
                {activeDevTab === 0 ? 'terminal.sh' : activeDevTab === 1 ? 'client.ts' : 'webhook.json'}
              </span>
              <button
                onClick={() => {
                  const code = activeDevTab === 0
                    ? 'npx @robokomputer/cli init --template enterprise\npnpm add @robokomputer/sdk\nrobokomputer deploy --prod'
                    : activeDevTab === 1
                    ? 'import { RoboKomputer } from "@robokomputer/sdk";\n\nconst client = new RoboKomputer({ apiKey: process.env.ROBO_API_KEY });\nconst deployment = await client.deploy.create({\n  project: "compro-modern",\n  region: "sg-1"\n});'
                    : '{\n  "event": "deployment.success",\n  "project": "compro-modern",\n  "timestamp": "2026-10-25T10:00:00Z",\n  "status": "active"\n}';
                  navigator.clipboard.writeText(code);
                }}
                className="copy-code-btn"
              >
                Copy snippet
              </button>
            </div>
            <pre className="code-pre">
              <code>
                {activeDevTab === 0 && (
                  <>
                    <span className="code-comment"># Install CLI & initialize project</span>{'\n'}
                    <span className="code-keyword">npx</span> @robokomputer/cli init --template enterprise{'\n'}
                    <span className="code-keyword">pnpm</span> add @robokomputer/sdk{'\n\n'}
                    <span className="code-comment"># Deploy instantly to production</span>{'\n'}
                    robokomputer deploy --prod
                  </>
                )}
                {activeDevTab === 1 && (
                  <>
                    <span className="code-keyword">import</span> &#123; RoboKomputer &#125; <span className="code-keyword">from</span> <span className="code-string">"@robokomputer/sdk"</span>;{'\n\n'}
                    <span className="code-keyword">const</span> client = <span className="code-keyword">new</span> RoboKomputer(&#123; apiKey: process.env.ROBO_API_KEY &#125;);{'\n\n'}
                    <span className="code-keyword">const</span> deployment = <span className="code-keyword">await</span> client.deploy.create(&#123;{'\n'}
                    &nbsp;&nbsp;project: <span className="code-string">"compro-modern"</span>,{'\n'}
                    &nbsp;&nbsp;region: <span className="code-string">"sg-1"</span>{'\n'}
                    &#125;);
                  </>
                )}
                {activeDevTab === 2 && (
                  <>
                    &#123;{'\n'}
                    &nbsp;&nbsp;<span className="code-property">"event"</span>: <span className="code-string">"deployment.success"</span>,{'\n'}
                    &nbsp;&nbsp;<span className="code-property">"project"</span>: <span className="code-string">"compro-modern"</span>,{'\n'}
                    &nbsp;&nbsp;<span className="code-property">"timestamp"</span>: <span className="code-string">"2026-10-25T10:00:00Z"</span>,{'\n'}
                    &nbsp;&nbsp;<span className="code-property">"status"</span>: <span className="code-string">"active"</span>{'\n'}
                    &#125;
                  </>
                )}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="pricing-heading">
          <p className="section-kicker">Pricing</p>
          <h2>Simple pricing.<br /><em>Serious results.</em></h2>
          <p>Mulai dari kebutuhanmu. Pilih fondasi yang tepat untuk membangun, meluncurkan, dan mengembangkan solusi digital bersama RoboKomputer.</p>
        </div>
        <div className="pricing-grid">
          <article className="pricing-card">
            <div className="pricing-card-top"><span>01</span><span>Untuk memulai</span></div>
            <h3>Standard (UMKM)</h3>
            <p className="pricing-note">Solusi digital esensial untuk UMKM yang ingin Go Digital dan tampil profesional.</p>
            <ul className="pricing-features">
              <li><span>✓</span> Website Company Profile responsif</li>
              <li><span>✓</span> Integrasi WhatsApp &amp; Kontak Bisnis</li>
              <li><span>✓</span> Optimasi SEO Dasar &amp; Kecepatan Tinggi</li>
              <li><span>✓</span> 1 Tahun Hosting &amp; Domain Gratis</li>
            </ul>
            <div className="price"><strong>Mulai Rp 3jt</strong><span>sekali bayar</span></div>
            <a href="https://wa.me/6285216758721" target="_blank" rel="noreferrer">Mulai percakapan <span>↗</span></a>
          </article>
          <article className="pricing-card pricing-card-featured">
            <div className="pricing-card-top"><span>02</span><span className="pricing-badge">Paling populer</span></div>
            <h3>Pro (Bisnis)</h3>
            <p className="pricing-note">Untuk bisnis berkembang yang membutuhkan sistem operasional &amp; dashboard realtime.</p>
            <ul className="pricing-features">
              <li><span>✓</span> Aplikasi Web &amp; Dashboard Custom</li>
              <li><span>✓</span> Manajemen Database &amp; API Integrasi</li>
              <li><span>✓</span> Otomasi Alur Kerja &amp; Laporan Realtime</li>
              <li><span>✓</span> Prioritas Support &amp; Maintenance 6 Bulan</li>
            </ul>
            <div className="price"><strong>Mulai Rp 7jt</strong><span>berdasarkan scope</span></div>
            <a href="https://wa.me/6285216758721" target="_blank" rel="noreferrer">Konsultasi gratis <span>↗</span></a>
          </article>
          <article className="pricing-card">
            <div className="pricing-card-top"><span>03</span><span>Untuk skala lanjut</span></div>
            <h3>Enterprise (Manufactur)</h3>
            <p className="pricing-note">Solusi enterprise terintegrasi dengan keamanan tingkat tinggi &amp; service perangkat.</p>
            <ul className="pricing-features">
              <li><span>✓</span> Sistem Skala Besar &amp; Multi-Cabang</li>
              <li><span>✓</span> Keamanan Tingkat Enterprise &amp; Enkripsi</li>
              <li><span>✓</span> Service Hardware &amp; SLA On-site Prioritas</li>
              <li><span>✓</span> Dedicated Account Manager &amp; 24/7 Support</li>
            </ul>
            <div className="price"><strong>Custom</strong><span>dibuat untukmu</span></div>
            <a href="https://wa.me/6285216758721" target="_blank" rel="noreferrer">Hubungi kami <span>↗</span></a>
          </article>
        </div>
      </section>

      <footer className="site-footer" id="kontak">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a className="brand-mark" href="#beranda">
              <span>Robo</span><strong>Komputer</strong><small>TM</small>
            </a>
            <p className="footer-tagline">Bangun lebih cepat.<br /><em>Bergerak lebih jauh.</em></p>
            <a className="footer-cta" href="https://wa.me/6285216758721" target="_blank" rel="noreferrer">
              Mulai sekarang <span>↗</span>
            </a>
          </div>
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Navigasi</h4>
              <a href="#beranda">Beranda</a>
              <a href="#layanan">Layanan</a>
              <a href="#kapabilitas">Capabilities</a>
              <a href="#proses">Proses</a>
            </div>
            <div className="footer-col">
              <h4>Ekosistem</h4>
              <a href="#integrations">Integrations</a>
              <a href="#developers">Developers</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="footer-col">
              <h4>Kontak &amp; Legal</h4>
              <a href="https://wa.me/6285216758721" target="_blank" rel="noreferrer">WhatsApp ↗</a>
              <a href="#beranda">Bantuan</a>
              <a href="#beranda">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 RoboKomputer. Semua hak dilindungi.</span>
          <span className="footer-center-note">Made for modern business &amp; enterprise growth</span>
          <span>System Status: <strong className="text-emerald-600 font-mono">Operational</strong></span>
        </div>
      </footer>

      <a
        href="https://wa.me/6285216758721"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </main>
  )
}

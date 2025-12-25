import { useState } from 'react';
import { IoHome, IoRocket, IoPeople, IoCalendar, IoLocationSharp } from "react-icons/io5";
import './index.css';

// DATELE APLICATIEI
const CONFIG = {
  numeApp: "LSFEE Info",
  date: {
    noutati: [
      { id: 1, titlu: "Cafeaua Electrizantă", data: "8-12 Dec", loc: "Holul Electro", desc: "Te așteptăm la cafea și discuții!" },
      { id: 2, titlu: "Seara de Colinde", data: "16 Dec", loc: "Facultate", desc: "Mergem să colindăm profesorii." },
    ],
    proiecte: [
      { id: 'p1', titlu: "Descoperă Electro", perioada: "Octombrie", desc: "Proiect dedicat bobocilor pentru integrare.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" },
      { id: 'p2', titlu: "Cupa Poli", perioada: "Semestrul 2", desc: "Competiție sportivă între facultăți.", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=500&q=80" },
      { id: 'p3', titlu: "Team Building", perioada: "Semestrial", desc: "Formarea echipei și distracție la munte.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80" },
    ],
    echipa: [
      { id: 1, nume: "Podeanu Denis", rol: "Președinte", an: "III EE", avatar: "https://ui-avatars.com/api/?name=Podeanu+Denis&background=004d99&color=fff" },
      { id: 2, nume: "Golîmba Robert", rol: "Vicepreședinte", an: "III ET", avatar: "https://ui-avatars.com/api/?name=Golimba+Robert&background=004d99&color=fff" },
      { id: 3, nume: "Haicu Andreea", rol: "VP Interne", an: "IV EE", avatar: "https://ui-avatars.com/api/?name=Haicu+Andreea&background=004d99&color=fff" },
      { id: 4, nume: "Vasile Flavius", rol: "Secretar", an: "Master", avatar: "https://ui-avatars.com/api/?name=Vasile+Flavius&background=004d99&color=fff" },
    ]
  }
};

function App() {
  const [tab, setTab] = useState('Acasa');

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="top-bar">
        <h1>{CONFIG.numeApp}</h1>
      </header>

      {/* CONTINUT */}
      <main className="content">
        {tab === 'Acasa' && (
          <div className="animate-fade">
            <div className="welcome-box">
              <h2>Salutare!</h2>
              <p>Uite ce se întâmplă în LSFEE.</p>
            </div>
            <h3 className="section-title">📢 Noutăți</h3>
            {CONFIG.date.noutati.map(item => (
              <div key={item.id} className="card">
                <div className="card-header">
                  <IoCalendar /> <span>{item.data}</span>
                </div>
                <div className="card-body">
                  <h4>{item.titlu}</h4>
                  <p className="loc"><IoLocationSharp /> {item.loc}</p>
                  <p className="desc">{item.desc}</p>
                </div>
              </div>
            ))}
            <div style={{height: '20px'}}></div>
          </div>
        )}

        {tab === 'Proiecte' && (
          <div className="animate-fade">
            <h2 className="page-title">Proiectele Noastre</h2>
            <p className="page-sub">Activitățile prin care ne remarcăm.</p>
            {CONFIG.date.proiecte.map(item => (
              <div key={item.id} className="proiect-card">
                <img src={item.img} alt={item.titlu} />
                <div className="proiect-info">
                  <h4>{item.titlu}</h4>
                  <span className="badge">{item.perioada}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
             <div style={{height: '20px'}}></div>
          </div>
        )}

        {tab === 'Echipa' && (
          <div className="animate-fade">
            <h2 className="page-title">Echipa LSFEE</h2>
            <p className="page-sub">Oamenii din spatele proiectelor.</p>
            <div className="membri-list">
              {CONFIG.date.echipa.map(item => (
                <div key={item.id} className="membru-row">
                  <img src={item.avatar} alt={item.nume} />
                  <div>
                    <h4>{item.nume}</h4>
                    <p>{item.rol} • Anul {item.an}</p>
                  </div>
                </div>
              ))}
            </div>
             <div style={{height: '20px'}}></div>
          </div>
        )}
      </main>

      {/* NAVBAR JOS */}
      <nav className="nav-bar">
        <button onClick={() => setTab('Acasa')} className={tab === 'Acasa' ? 'active' : ''}>
          <IoHome size={24} />
          <span>Acasă</span>
        </button>
        <button onClick={() => setTab('Proiecte')} className={tab === 'Proiecte' ? 'active' : ''}>
          <IoRocket size={24} />
          <span>Proiecte</span>
        </button>
        <button onClick={() => setTab('Echipa')} className={tab === 'Echipa' ? 'active' : ''}>
          <IoPeople size={24} />
          <span>Echipa</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
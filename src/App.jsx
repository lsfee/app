import { useState, useEffect } from 'react';
import { 
  IoHome, IoHomeOutline, IoPeople, IoPeopleOutline, IoInformationCircle, IoInformationCircleOutline,
  IoCalendar, IoLocationSharp, IoArrowForward, IoTimeOutline, IoChevronBack, IoMail,
  IoCloudDownloadOutline
} from "react-icons/io5";
import './index.css';

// IMPORTAM DATELE DIN JSON
import CONFIG from './data.json'; 

// --- COMPONENTE UI ---
const CardNoutate = ({ item }) => (
  <div className="card-noutate fade-in">
    <div className="card-accent"></div>
    <div className="card-content">
      <h3 className="card-titlu">{item.titlu}</h3>
      <div className="badge-data">
        <IoCalendar size={12} style={{marginRight: 4}} />
        <span>{item.data}</span>
      </div>
      <p className="text-loc">{item.loc}</p>
      <p className="card-descriere">{item.info}</p>
    </div>
  </div>
);

const CardMembru = ({ membru }) => (
  <div className="membru-card fade-in">
    <img src={membru.poza} alt={membru.nume} className="membru-poza" />
    <div className="membru-info">
      <h4 className="membru-nume">{membru.nume}</h4>
      <p className="membru-rol">{membru.rol}</p>
      <div className="separator" />
      <p className="membru-detalii">Anul {membru.an}</p>
      {membru.email && <p className="membru-email">{membru.email}</p>}
    </div>
  </div>
);

const CardProiect = ({ proiect, onClick }) => (
  <div className="proiect-card fade-in" onClick={onClick}>
    <img src={proiect.poza} alt={proiect.titlu} className="proiect-imagine" />
    <div className="proiect-content">
      <h3 className="proiect-titlu">{proiect.titlu}</h3>
      <p className="proiect-descriere">{proiect.descriere}</p>
      <div className="read-more-row">
        <span>Află mai multe</span>
        <IoArrowForward color="#00ccff" />
      </div>
    </div>
  </div>
);

const UpdateModal = ({ onUpdate }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-icon-box">
        <IoCloudDownloadOutline size={40} color="white" />
      </div>
      <h2 className="modal-title">Actualizare Disponibilă!</h2>
      <p className="modal-text">
        Am adăugat noutăți în aplicație.<br/>
        Apasă mai jos pentru a le vedea.
      </p>
      <button className="modal-button" onClick={onUpdate}>
        ACTUALIZEAZĂ ACUM
      </button>
    </div>
  </div>
);

// --- ECRANE ---
const EcranAcasa = () => (
  <div className="scroll-container">
    <div className="welcome-box fade-in">
       <div style={{flex: 1}}>
         <h1 className="titlu-mare">{CONFIG.texte.acasa.titlu}</h1>
         <p className="subtitlu">{CONFIG.texte.acasa.descriere}</p>
       </div>
       <img src="/app/pika.png" className="pika-img" alt="Pika" onError={(e) => e.target.src = 'pika.png'} />
    </div>
    
    <h2 className="sectiune-titlu fade-in-delay">📅 Urmează în LSFEE</h2>

    {CONFIG.texte.acasa.noutati.map((item) => (
      <CardNoutate key={item.id} item={item} /> 
    ))}
  </div>
);

const EcranProiectDetaliat = ({ proiect, onBack }) => (
  <div className="scroll-container detail-view">
    <img src={proiect.poza} className="proiect-detail-image" />
    
    <div className="proiect-detail-container">
      <button onClick={onBack} className="back-button-detail">
        <IoChevronBack size={30} color="white" />
      </button>

      <h1 className="proiect-detail-title">{proiect.titlu}</h1>
      
      <div className="badge-data">
        <IoTimeOutline size={14} style={{marginRight: 5}} />
        <span>{proiect.perioada}</span>
      </div>

      <div className="divider"></div>

      <h3 className="sectiune-subtitlu">Despre Proiect</h3>
      <p className="paragraf">{proiect.descriere}</p>

      <h3 className="sectiune-subtitlu">Detalii & Obiective</h3>
      <p className="paragraf">{proiect.detalii}</p>
    </div>
  </div>
);

const EcranDespre = () => {
  const [proiectSelectat, setProiectSelectat] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [proiectSelectat]);

  if (proiectSelectat) {
    return <EcranProiectDetaliat proiect={proiectSelectat} onBack={() => setProiectSelectat(null)} />;
  }

  return (
    <div className="scroll-container">
      <div className="fade-in">
        <img src={CONFIG.imagini.bannerDespre} className="banner-image" />
      </div>
      
      <div className="card-simplu fade-in-delay">
        <h2 className="titlu-mediu">{CONFIG.texte.despre.titlu}</h2>
        <p className="paragraf">{CONFIG.texte.despre.descriere}</p>
      </div>
      
      <div className="row-container fade-in-delay-2">
        <div className="info-card">
          <div className="icon-bula">
            <IoLocationSharp size={24} color="#00ccff" />
          </div>
          <p className="info-box-text">Sala A022</p>
        </div>
        <div className="info-card">
          <div className="icon-bula">
            <IoMail size={24} color="#00ccff" />
          </div>
          <p className="info-box-text">lsfee.upt@gmail.com</p>
        </div>
      </div>

      <h2 className="sectiune-titlu fade-in-delay-2" style={{marginTop: '30px'}}>🚀 Proiectele Noastre</h2>
      
      {CONFIG.texte.despre.proiecte.map((proiect) => (
        <CardProiect 
          key={proiect.id} 
          proiect={proiect} 
          onClick={() => setProiectSelectat(proiect)}
        />
      ))}
    </div>
  );
};

// --- ECRAN ECHIPA ---
const EcranEchipa = () => {
  const [departamentSelectat, setDepartamentSelectat] = useState(null);

  if (departamentSelectat) {
    return (
      <div className="scroll-container">
        <div className="fade-in" style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
          <button onClick={() => setDepartamentSelectat(null)} className="back-button-simple">
            <IoChevronBack size={32} color="#001a33" />
          </button>
          <h2 className="titlu-pagina">{departamentSelectat.numeDepartament}</h2>
        </div>

        <p className="descriere-dept fade-in-delay">{departamentSelectat.descriere}</p>
        
        {departamentSelectat.membri.map((membru, index) => (
          <CardMembru key={index} membru={membru} />
        ))}
      </div>
    );
  }

  return (
    <div className="scroll-container">
      <div className="fade-in">
        <h1 className="titlu-mare">Structura LSFEE</h1>
        <p className="paragraf-center">Organigrama echipei noastre.</p>
      </div>

      {/* 1. LISTA DEPARTAMENTE */}
      {CONFIG.texte.echipa.map((dept, index) => (
        <div key={dept.id} className="dept-card fade-in" onClick={() => setDepartamentSelectat(dept)} style={{animationDelay: `${index * 0.1}s`}}>
          <div className="dept-icon-box">
             <IoPeople size={24} color="white" />
          </div>
          <div style={{flex: 1}}>
            <h3 className="dept-text">{dept.numeDepartament}</h3>
            <p className="dept-sub-text">{dept.membri.length} membri activi</p>
          </div>
          <div className="arrow-box">
             <IoArrowForward size={16} color="#00ccff" />
          </div>
        </div>
      ))}

      {/* 2. SPATIU DELIMITATOR */}
      <div style={{height: '30px'}}></div>

      {/* 3. VOLUNTARII LUNII (LA FINAL + ANIMATIE) */}
      <div className="voluntari-section fade-in-delay-2">
         <h3 className="sectiune-subtitlu" style={{textAlign: 'center', marginTop: 0, marginBottom: '5px'}}>
           🌟 Voluntarii Lunii
         </h3>
         
         <p className="paragraf-center" style={{fontSize: '13px', color: '#667788', marginBottom: '15px'}}>
           Aceștia sunt voluntarii cei mai activi în organizație în luna curentă.
         </p>

         <div className="voluntari-grid">
            {CONFIG.texte.voluntariiLunii && CONFIG.texte.voluntariiLunii.map((voluntar, idx) => (
              <div key={idx} className="voluntar-box">
                 <div className="voluntar-dept">{voluntar.dept}</div>
                 <div className="voluntar-nume">{voluntar.nume}</div>
              </div>
            ))}
         </div>
      </div>
      
    </div>
  );
};

// --- APP PRINCIPAL ---
export default function App() {
  const [paginaCurenta, setPaginaCurenta] = useState('Acasa');
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);

  useEffect(() => {
    const checkVersion = async () => {
      try {
        const res = await fetch('/app/version.json?t=' + Date.now());
        if (!res.ok) return;
        const data = await res.json();
        const serverVer = String(data.version);
        const localVer = localStorage.getItem('app_version');

        if (localVer && localVer !== serverVer) {
          setNewVersionAvailable(true);
        } else {
          if (!localVer) localStorage.setItem('app_version', serverVer);
        }
      } catch (e) {
        console.log("Offline sau eroare verificare.");
      }
    };
    checkVersion();
    window.addEventListener('focus', checkVersion);
    return () => window.removeEventListener('focus', checkVersion);
  }, []);

  const performUpdate = async () => {
    try {
        const res = await fetch('/app/version.json?t=' + Date.now());
        const data = await res.json();
        localStorage.setItem('app_version', String(data.version));
    } catch(e) {}

    if ('caches' in window) {
       try {
         const names = await caches.keys();
         await Promise.all(names.map(name => caches.delete(name)));
       } catch(e) {}
    }
    window.location.reload();
  };

  return (
    <div className="app-container">
      
      {newVersionAvailable && (
        <UpdateModal onUpdate={performUpdate} />
      )}

      <div className="top-bar">
        <span className="top-bar-text">{CONFIG.numeApp}</span>
      </div>

      <div className="main-content">
        {paginaCurenta === 'Acasa' && <EcranAcasa />}
        {paginaCurenta === 'Despre' && <EcranDespre />}
        {paginaCurenta === 'Echipa' && <EcranEchipa />}
      </div>

      <div className="nav-bar-container">
        <div className="nav-bar">
          <TabButton 
            nume="Acasă" 
            IconActiv={IoHome} IconInactiv={IoHomeOutline} 
            set={setPaginaCurenta} activ={paginaCurenta === 'Acasa'} tinta="Acasa" 
          />
          <TabButton 
            nume="Echipă" 
            IconActiv={IoPeople} IconInactiv={IoPeopleOutline} 
            set={setPaginaCurenta} activ={paginaCurenta === 'Echipa'} tinta="Echipa" 
          />
          <TabButton 
            nume="Despre" 
            IconActiv={IoInformationCircle} IconInactiv={IoInformationCircleOutline} 
            set={setPaginaCurenta} activ={paginaCurenta === 'Despre'} tinta="Despre" 
          />
        </div>
      </div>
    </div>
  );
}

const TabButton = ({ nume, IconActiv, IconInactiv, set, activ, tinta }) => (
  <button onClick={() => set(tinta)} className={`nav-item ${activ ? 'active' : ''}`}>
    <div className={`icon-container ${activ ? 'activ' : ''}`}>
      {activ ? <IconActiv size={26} color="#00ccff" /> : <IconInactiv size={26} color="#8899a6" />}
    </div>
    <span className="nav-text" style={{color: activ ? '#00ccff' : '#8899a6'}}>{nume}</span>
  </button>
);

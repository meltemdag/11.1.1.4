/* ========================================================
   1683–1774 Harita Etkinliği — Uygulama Mantığı ve Veritabanı
   MEB 11.1.1 Kazanımı Uyumlu
======================================================== */

/* --------------------------------------------------------
   A. SORU VE BÖLGE VERİTABANI
   x, y: 1917x1032 dilsiz harita üzerindeki yüzdelik koordinatlar
   r: Tıklama kabul yarıçapı (%)
-------------------------------------------------------- */
const MISSIONS = [
  {
    id: 1,
    q: "1699 Karlofça Antlaşması ile Avusturya'ya bırakılan Macar toprakları ve Erdel bölgesini harita üzerinde bulunuz.",
    x: 34.20, y: 36.20, r: 4.8,
    label: "MACARİSTAN VE ERDEL",
    where: "Orta Avrupa — Macaristan Ovası ve Erdel (Transilvanya)",
    notes: [
      "1683 II. Viyana Kuşatması sonrası kurulan Kutsal İttifak'a karşı 16 yıl süren savaşların ardından imzalanmıştır.",
      "Banat ve Temeşvar hariç tüm Macaristan ile Erdel Beyliği Avusturya'ya bırakılmıştır.",
      "Osmanlı Devleti ilk kez bu kadar geniş çaplı bir toprağı kalıcı olarak kaybetmiş ve savunma konumuna geçmiştir."
    ]
  },
  {
    id: 2,
    q: "1699 Karlofça Antlaşması ile Venedik'e bırakılan, 1715 yılında ise başarılı bir seferle geri alınan Mora Yarımadası'nı harita üzerinde bulunuz.",
    x: 37.80, y: 80.50, r: 5.0,
    label: "MORA YARIMADASI",
    where: "Güney Balkanlar — Mora Yarımadası",
    notes: [
      "1699 Karlofça Antlaşması ile Mora Yarımadası ve Dalmaçya kıyıları Venedik idaresine devredilmiştir.",
      "Venedik'in bölgedeki Ortodoks halka uyguladığı sert baskılar üzerine 1715 yılında düzenlenen seferle Mora kısa sürede geri alınmıştır.",
      "Mora'nın geri alınması, Karlofça'nın bozulduğunu iddia eden Avusturya'nın Venedik tarafında savaşa girmesine ve Pasarofça sürecine zemin hazırlamıştır."
    ]
  },
  {
    id: 3,
    q: "Karlofça Antlaşması ile Lehistan'a (Polonya) bırakılan stratejik Podolya (Kamaniçe) bölgesini harita üzerinde bulunuz.",
    x: 48.80, y: 33.00, r: 4.2,
    label: "PODOLYA (KAMANİÇE)",
    where: "Batı Ukrayna / Dinyester Havzası — Kamaniçe",
    notes: [
      "1672 Bucaş Antlaşması ile fethedilip Osmanlı'nın batıda ulaştığı en geniş sınırları temsil eden Podolya ve Kamaniçe Kalesi terk edildi.",
      "Lehistan böylece güney sınırlarını güvenceye almış oldu."
    ]
  },
  {
    id: 4,
    q: "1700 İstanbul Antlaşması ile Rus Çarlığı'na bırakılarak Rusların Karadeniz'e ilk kez çıkış kapısı elde ettiği Azak Kalesi'ni bulunuz.",
    x: 71.95, y: 34.70, r: 4.2,
    label: "AZAK KALESİ",
    where: "Azak Denizi Kuzeydoğusu — Don Nehri Ağzı",
    notes: [
      "Karlofça görüşmelerine katılan ancak ayrı bir barış talep eden Rusya ile imzalanmıştır.",
      "Azak Kalesi Ruslara bırakılmış, Rusya böylece Karadeniz'de ilk askerî varlığını elde etmiştir.",
      "Rusya ayrıca İstanbul'da sürekli bir elçi bulundurma hakkı kazanmıştır."
    ]
  },
  {
    id: 5,
    q: "İsveç Kralı Demirbaş Şarl'ın (XII. Karl) Rus ordusuna yenilerek Osmanlı topraklarına sığındığı Poltava bölgesini harita üzerinde bulunuz.",
    x: 63.50, y: 21.90, r: 4.5,
    label: "POLTAVA (1709)",
    where: "Doğu Ukrayna — Vorskla Nehri Kıyısı",
    notes: [
      "Büyük Kuzey Savaşı'nda Çar I. Petro, İsveç Kralı XII. Karl'ı ağır bir hezimete uğrattı.",
      "Demirbaş Şarl müttefiki Kazak hatmanı ile birlikte Osmanlı sınırını geçip Bender Kalesi'ne sığındı.",
      "Rus ordusunun kaçan İsveçlileri takip bahanesiyle Osmanlı topraklarına girmesi, 1711 Prut Savaşı'nın fitilini ateşledi."
    ]
  },
  {
    id: 6,
    q: "Baltacı Mehmed Paşa'nın Rus ordusunu kuşatarak Azak Kalesi'ni geri aldığı Prut Nehri kıyısını harita üzerinde bulunuz.",
    x: 49.30, y: 38.50, r: 4.2,
    label: "PRUT NEHRİ (1711)",
    where: "Boğdan — Prut Nehri Boyu",
    notes: [
      "Baltacı Mehmed Paşa komutasındaki Osmanlı ordusu, Çar Petro'yu ve ordusunu Prut bataklıklarında tamamen kuşattı.",
      "Zor durumda kalan Petro barış istedi. İmzalanan Prut Antlaşması ile Azak Kalesi Osmanlı Devleti'ne geri verildi.",
      "Bu zafer, Karlofça'da kaybedilen diğer toprakların da geri alınabileceği yönünde büyük bir ümit doğurdu."
    ]
  },
  {
    id: 7,
    q: "Avusturya ve Venedik ile imzalanan, Osmanlı Devleti'nin Batı'nın üstünlüğünü kabul ederek Lale Devri'ne girmesine yol açan 1718 Pasarofça Antlaşması'nın imzalandığı yeri harita üzerinde bulunuz.",
    x: 31.80, y: 46.80, r: 4.2,
    label: "PASAROFÇA ANTLAŞMASI (1718)",
    where: "Tuna Nehri Havzası — Pasarofça (Sırbistan)",
    notes: [
      "1716-1718 savaşlarında Petervaradin ve Temeşvar mağlubiyetleri sonrası İngiltere ve Hollanda'nın arabuluculuğuyla imzalanmıştır.",
      "Belgrad, Banat ve Temeşvar Avusturya'ya bırakılmış; Mora Yarımadası ise Osmanlı Devleti'nde kalmıştır.",
      "Osmanlı Devleti bu antlaşma ile Batı'nın üstünlüğünü kabul etmiş, savunma ve mevcut toprakları koruma siyasetine yönelerek Lale Devri'ne girmiştir.",
      "Bu antlaşmayla kaybedilen Belgrad Kalesi, 21 yıl sonra 1739 Belgrad Antlaşması ile geri fethedilmiş ve Karadeniz son kez Türk gölü olarak teyit edilmiştir."
    ]
  },
  {
    id: 8,
    q: "Baltık Denizi'nden gelerek Akdeniz'e inen Rus donanmasının Osmanlı donanmasını bir gecede yaktığı Çeşme Limanı'nı bulunuz.",
    x: 46.00, y: 77.40, r: 3.8,
    label: "ÇEŞME BASKINI (1770)",
    where: "Adalar Denizi / Çeşme Limanı",
    notes: [
      "Rus donanması Baltık'tan yola çıkıp Cebelitarık Boğazı'ndan Akdeniz'e inerek sürpriz bir harekât yaptı.",
      "Çeşme Limanı'na sığınmış olan Osmanlı donanması, ateş gemileriyle kundaklanarak tamamen yakıldı.",
      "Donanmanın yok olması sebebiyle Ruslar Adalar Denizi ve Çanakkale Boğazı önlerinde mutlak üstünlük sağladı."
    ]
  },
  {
    id: 9,
    q: "Sayıca üstün Osmanlı ordusunun Rus hatları karşısında ağır bir mağlubiyete uğradığı Kartal Sahrası (Kagul) muharebe alanını bulunuz.",
    x: 52.20, y: 45.50, r: 3.8,
    label: "KARTAL SAHRASI (1770)",
    where: "Besarabya / Boğdan — Tuna ve Prut Nehirleri Yakını (Kagul)",
    notes: [
      "Yaklaşık 100 bin kişilik Osmanlı ordusu, kendisinden çok daha küçük ama düzenli Rus ordusu karşısında taktiksel yenilgiye uğradı.",
      "Bu hezimet sonrasında Kırım, Eflak ve Boğdan tamamen Rus işgaline açık hâle geldi.",
      "Kara savaşlarındaki bu kayıp, Osmanlı Devleti'ni barış masasına oturmaya mecbur bıraktı."
    ]
  },
  {
    id: 10,
    q: "Kırım'ın bağımsız olmasına ve Rusya'nın Karadeniz'e kalıcı olarak yerleşmesine yol açan antlaşmanın imzalandığı kasabayı bulunuz.",
    x: 49.50, y: 52.00, r: 3.8,
    label: "KÜÇÜK KAYNARCA (1774)",
    where: "Tuna Nehri Güneyi / Silistre Yakınları — Küçük Kaynarca Kasabası",
    notes: [
      "Karlofça'dan sonra imzalanan en ağır antlaşmadır. Ruslar imza tarihini Prut'un intikamı olarak özellikle 21 Temmuz'a denk getirmiştir.",
      "Kırım bağımsız sayılmış (yalnızca dinî bakımdan halifeye bağlı kaldı), böylece 1783 Rus ilhakının önü açılmıştır.",
      "Karadeniz Türk gölü olma vasfını kaybetmiş, Rus ticaret gemilerine serbest geçiş hakkı verilmiş ve Rusya Ortodoksların koruyuculuğu iddiasıyla iç işlerine karışma fırsatı elde etmiştir."
    ]
  }
];

/* --------------------------------------------------------
   B. UYGULAMA DURUMU (STATE)
-------------------------------------------------------- */
let currentIdx = 0;
let completedSet = new Set();
let isModalOpen = false;
let showPins = true;

// Harita Zoom / Pan Durumu
let zoomLevel = 1;
let panX = 0, panY = 0;
let isPanning = false;
let startX = 0, startY = 0;

// DOM Elementleri
const viewport = document.getElementById('viewport');
const mapLayer = document.getElementById('mapTransformLayer');
const mapImage = document.getElementById('mapImage');
const pinsContainer = document.getElementById('pinsContainer');

const cardQuestionText = document.getElementById('cardQuestionText');
const progressBar = document.getElementById('progressBar');

const togglePinsBtn = document.getElementById('togglePinsBtn');
const togglePinsText = document.getElementById('togglePinsText');

const infoModal = document.getElementById('infoModal');
const infoTitle = document.getElementById('infoTitle');
const infoWhere = document.getElementById('infoWhere');
const infoNotes = document.getElementById('infoNotes');
const nextMissionBtn = document.getElementById('nextMissionBtn');
const nextBtnText = document.getElementById('nextBtnText');

const completionModal = document.getElementById('completionModal');
const feedbackToast = document.getElementById('feedbackToast');
const feedbackText = document.getElementById('feedbackText');

const introModal = document.getElementById('introModal');
const startIntroBtn = document.getElementById('startIntroBtn');
const introHelpBtn = document.getElementById('introHelpBtn');

function isIntroOpen() {
  return introModal && !introModal.classList.contains('pointer-events-none');
}

/* --------------------------------------------------------
   C. HARİTA PİNLERİNİ ÇİZME VE GÜNCELLEME
-------------------------------------------------------- */
function renderPins() {
  pinsContainer.innerHTML = '';

  if (showPins) {
    pinsContainer.classList.remove('pins-layer-hidden');
  } else {
    pinsContainer.classList.add('pins-layer-hidden');
  }

  const currentMission = MISSIONS[currentIdx];
  const mapH = mapImage.clientHeight || 650;

  MISSIONS.forEach(m => {
    const isCompleted = completedSet.has(m.id);
    const isActive = (m.id === currentMission.id);

    const pinEl = document.createElement('div');
    let stateClass = 'is-idle';
    if (isCompleted) {
      stateClass = 'is-completed';
    } else if (isActive) {
      stateClass = 'is-active';
    }

    pinEl.className = `map-pin-item ${stateClass}`;
    pinEl.style.left = `${m.x}%`;
    pinEl.style.top = `${m.y}%`;
    pinEl.dataset.id = m.id;

    // Hedef kabul dairesi (çap px cinsinden)
    const diameterPx = (m.r / 100) * mapH * 2;

    pinEl.innerHTML = `
      <div class="pin-target-zone" style="width: ${diameterPx.toFixed(1)}px; height: ${diameterPx.toFixed(1)}px;"></div>
      <div class="pin-coords-tooltip">X: %${m.x.toFixed(1)} | Y: %${m.y.toFixed(1)}</div>
      <div class="pin-label-pill">
        ${isCompleted ? `${m.label} ✓` : m.label}
      </div>
    `;

    pinEl.addEventListener('click', (e) => {
      e.stopPropagation();
      handlePinClick(m);
    });

    pinsContainer.appendChild(pinEl);
  });
}

function handlePinClick(m) {
  if (isModalOpen || isPanning) return;
  const currentMission = MISSIONS[currentIdx];

  if (m.id === currentMission.id) {
    handleSuccess(m);
  } else {
    createMissRipple(m.x, m.y);

    const diffX = m.x - currentMission.x;
    const diffY = m.y - currentMission.y;
    let directions = [];
    if (diffY > 3.5) directions.push("kuzeyde");
    else if (diffY < -3.5) directions.push("güneyde");

    if (diffX > 3.5) directions.push("batıda");
    else if (diffX < -3.5) directions.push("doğuda");

    let hint = "";
    if (directions.length === 0) {
      hint = `İşaretlediğiniz yer: ${m.label}. Aradığınız hedefe çok yakınsınız!`;
    } else {
      hint = `İşaretlediğiniz yer: ${m.label}. Aradığınız bölge daha çok ${directions.join("-")} yer almaktadır.`;
    }
    showFeedback(hint);
  }
}

/* --------------------------------------------------------
   D. DİKDÖRTGEN KARTTAKİ SORUYU YÜKLEME
   Haritanın kuzeyindeki opak koyu kart güncellenir. Yalnızca soru metni yer alır.
-------------------------------------------------------- */
function loadMission(idx) {
  currentIdx = idx;
  const m = MISSIONS[idx];

  cardQuestionText.textContent = m.q;
  progressBar.style.width = `${(completedSet.size / MISSIONS.length) * 100}%`;
  renderPins();
}

/* --------------------------------------------------------
   E. BİLGİ POP-UP KARTI (BAŞARILI TIKLAMA SONRASI)
-------------------------------------------------------- */
function showInfoModal(m) {
  isModalOpen = true;
  infoTitle.textContent = m.label;
  infoWhere.textContent = m.where;

  infoNotes.innerHTML = '';
  m.notes.forEach(note => {
    const li = document.createElement('li');
    li.textContent = note;
    infoNotes.appendChild(li);
  });

  if (currentIdx === MISSIONS.length - 1) {
    nextBtnText.textContent = "Tamamla ✓";
  } else {
    nextBtnText.textContent = "Kapat ve Sıradakine Geç →";
  }

  infoModal.classList.remove('opacity-0', 'pointer-events-none');
  infoModal.firstElementChild.classList.remove('scale-95');
  infoModal.firstElementChild.classList.add('scale-100');
}

function hideInfoModal() {
  isModalOpen = false;
  infoModal.classList.add('opacity-0', 'pointer-events-none');
  infoModal.firstElementChild.classList.remove('scale-100');
  infoModal.firstElementChild.classList.add('scale-95');
}

nextMissionBtn.addEventListener('click', () => {
  hideInfoModal();
  if (currentIdx < MISSIONS.length - 1) {
    setTimeout(() => {
      loadMission(currentIdx + 1);
    }, 250);
  } else {
    setTimeout(() => {
      showCompletionModal();
    }, 300);
  }
});

function reportSCORMCompletion() {
  if (window.API || window.API_1484_11) {
    try {
      if (typeof doLMSSetValue === "function") {
        doLMSSetValue("cmi.core.lesson_status", "completed");
        doLMSCommit();
      }
    } catch (e) {}
  }
}

function showCompletionModal() {
  isModalOpen = true;
  completionModal.classList.remove('opacity-0', 'pointer-events-none');
  completionModal.firstElementChild.classList.remove('scale-95');
  completionModal.firstElementChild.classList.add('scale-100');
  reportSCORMCompletion();
}

document.getElementById('restartFinalBtn').addEventListener('click', restartAll);

function restartAll() {
  reportSCORMCompletion();
  completedSet.clear();
  completionModal.classList.add('opacity-0', 'pointer-events-none');
  hideInfoModal();
  resetTransform();
  loadMission(0);
}

/* --------------------------------------------------------
   F. HARİTA TIKLAMA VE İSABET MANTIĞI
-------------------------------------------------------- */
viewport.addEventListener('click', (e) => {
  if (isModalOpen || isIntroOpen() || isPanning || e.target.closest('#floatingQuestionCard') || e.target.closest('.map-pin-item')) return;

  const rect = mapImage.getBoundingClientRect();
  if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
    return;
  }

  const clickX = ((e.clientX - rect.left) / rect.width) * 100;
  const clickY = ((e.clientY - rect.top) / rect.height) * 100;

  const m = MISSIONS[currentIdx];

  const aspect = rect.width / rect.height;
  const dx = (clickX - m.x) * aspect;
  const dy = clickY - m.y;
  const dist = Math.hypot(dx, dy);

  if (dist <= m.r) {
    handleSuccess(m);
  } else {
    handleMiss(clickX, clickY, clickX - m.x, clickY - m.y);
  }
});

function handleSuccess(m) {
  completedSet.add(m.id);
  progressBar.style.width = `${(completedSet.size / MISSIONS.length) * 100}%`;

  renderPins();

  setTimeout(() => {
    showInfoModal(m);
  }, 450);
}

function createMissRipple(x, y) {
  const ripple = document.createElement('div');
  ripple.className = 'absolute w-10 h-10 rounded-full border-2 border-rose-500 bg-rose-500/25 miss-ripple pointer-events-none z-20';
  ripple.style.left = `${x}%`;
  ripple.style.top = `${y}%`;
  pinsContainer.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

function handleMiss(x, y, diffX, diffY) {
  createMissRipple(x, y);

  let directions = [];
  if (diffY > 3.5) directions.push("kuzeyde");
  else if (diffY < -3.5) directions.push("güneyde");

  if (diffX > 3.5) directions.push("batıda");
  else if (diffX < -3.5) directions.push("doğuda");

  let hint = "";
  if (directions.length === 0) {
    hint = "Hedefe çok yakınsınız, biraz daha dikkatli inceleyiniz!";
  } else {
    hint = `Aradığınız bölge daha çok ${directions.join("-")} yer almaktadır.`;
  }

  showFeedback(hint);
}

let feedbackTimeout = null;
function showFeedback(text) {
  feedbackText.textContent = text;
  feedbackToast.classList.remove('opacity-0', 'translate-y-4');
  feedbackToast.classList.add('opacity-100', 'translate-y-0');

  if (feedbackTimeout) clearTimeout(feedbackTimeout);
  feedbackTimeout = setTimeout(() => {
    feedbackToast.classList.remove('opacity-100', 'translate-y-0');
    feedbackToast.classList.add('opacity-0', 'translate-y-4');
  }, 2500);
}

/* --------------------------------------------------------
   G. HARİTA ZOOM VE PAN KONTROLLERİ
-------------------------------------------------------- */
function updateTransform() {
  mapLayer.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
}

function resetTransform() {
  zoomLevel = 1;
  panX = 0;
  panY = 0;
  updateTransform();
}

document.getElementById('fullscreenBtn').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
});

viewport.addEventListener('pointerdown', (e) => {
  if (isModalOpen || e.button !== 0 || e.target.closest('#floatingQuestionCard')) return;
  isPanning = false;
  startX = e.clientX - panX;
  startY = e.clientY - panY;

  function onPointerMove(ev) {
    const dx = ev.clientX - (startX + panX);
    const dy = ev.clientY - (startY + panY);
    if (Math.hypot(dx, dy) > 6) {
      isPanning = true;
      panX = ev.clientX - startX;
      panY = ev.clientY - startY;
      updateTransform();
    }
  }

  function onPointerUp() {
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    setTimeout(() => { isPanning = false; }, 50);
  }

  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
});

viewport.addEventListener('wheel', (e) => {
  if (isModalOpen || isIntroOpen()) return;
  e.preventDefault();
  const delta = e.deltaY < 0 ? 0.15 : -0.15;
  zoomLevel = Math.min(Math.max(zoomLevel + delta, 0.85), 3.2);
  updateTransform();
}, { passive: false });

/* --------------------------------------------------------
   H. PİN KONTROLLERİ VE İLK BAŞLATMA
-------------------------------------------------------- */
if (togglePinsBtn) {
  togglePinsBtn.addEventListener('click', () => {
    showPins = !showPins;
    if (showPins) {
      togglePinsText.textContent = "Pinler: Açık";
      togglePinsBtn.classList.add('border-amber-500/40', 'text-amber-300');
      togglePinsBtn.classList.remove('border-[#433020]', 'text-amber-200/60');
    } else {
      togglePinsText.textContent = "Pinler: Kapalı";
      togglePinsBtn.classList.remove('border-amber-500/40', 'text-amber-300');
      togglePinsBtn.classList.add('border-[#433020]', 'text-amber-200/60');
    }
    renderPins();
  });
}

/* --------------------------------------------------------
   I. GİRİŞ EKRANI (INTRO MODAL) KONTROLLERİ
-------------------------------------------------------- */
function openIntroModal() {
  if (!introModal) return;
  introModal.classList.remove('opacity-0', 'pointer-events-none');
  introModal.classList.add('opacity-100');
}

function closeIntroModal() {
  if (!introModal) return;
  introModal.classList.add('opacity-0', 'pointer-events-none');
  introModal.classList.remove('opacity-100');
}

if (startIntroBtn) {
  startIntroBtn.addEventListener('click', closeIntroModal);
}

if (introHelpBtn) {
  introHelpBtn.addEventListener('click', openIntroModal);
}

window.addEventListener('resize', () => {
  renderPins();
});

window.addEventListener('DOMContentLoaded', () => {
  loadMission(0);
  if (mapImage) {
    if (mapImage.complete) {
      renderPins();
    } else {
      mapImage.addEventListener('load', () => renderPins());
    }
  }
});

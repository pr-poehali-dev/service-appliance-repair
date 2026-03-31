import { useState } from "react";
import Icon from "@/components/ui/icon";

const APPLIANCES = [
  {
    id: "washing",
    emoji: "🫧",
    name: "Стиральная машина",
    color: "#3B82F6",
    issues: [
      { name: "Не сливает воду", price: "от 800 ₽", time: "1-2 ч" },
      { name: "Протечка", price: "от 1200 ₽", time: "1-3 ч" },
      { name: "Не отжимает", price: "от 1500 ₽", time: "2-3 ч" },
      { name: "Шум и вибрация", price: "от 900 ₽", time: "1-2 ч" },
      { name: "Не набирает воду", price: "от 700 ₽", time: "1 ч" },
      { name: "Ошибки на дисплее", price: "от 600 ₽", time: "1 ч" },
      { name: "Не включается", price: "от 800 ₽", time: "1-2 ч" },
      { name: "Замена подшипников", price: "от 2500 ₽", time: "3-4 ч" },
    ],
  },
  {
    id: "dishwasher",
    emoji: "🍽️",
    name: "Посудомойка",
    color: "#06B6D4",
    issues: [
      { name: "Плохо моет посуду", price: "от 700 ₽", time: "1 ч" },
      { name: "Не сливает воду", price: "от 800 ₽", time: "1-2 ч" },
      { name: "Протечка", price: "от 1200 ₽", time: "1-3 ч" },
      { name: "Не нагревает воду", price: "от 1400 ₽", time: "2 ч" },
      { name: "Запах из машины", price: "от 500 ₽", time: "1 ч" },
      { name: "Дверь не закрывается", price: "от 900 ₽", time: "1-2 ч" },
      { name: "Не включается", price: "от 800 ₽", time: "1 ч" },
      { name: "Шум при работе", price: "от 1000 ₽", time: "1-2 ч" },
    ],
  },
  {
    id: "oven",
    emoji: "🔥",
    name: "Духовка",
    color: "#F97316",
    issues: [
      { name: "Не нагревается", price: "от 1000 ₽", time: "1-2 ч" },
      { name: "Нагрев неравномерный", price: "от 1200 ₽", time: "2 ч" },
      { name: "Сломан таймер", price: "от 800 ₽", time: "1 ч" },
      { name: "Вентилятор не работает", price: "от 1100 ₽", time: "1-2 ч" },
      { name: "Не работает гриль", price: "от 1300 ₽", time: "2 ч" },
      { name: "Дверца не закрывается", price: "от 900 ₽", time: "1 ч" },
      { name: "Замена тена", price: "от 1500 ₽", time: "2 ч" },
      { name: "Не работает освещение", price: "от 500 ₽", time: "0.5 ч" },
    ],
  },
  {
    id: "dryer",
    emoji: "💨",
    name: "Сушилка",
    color: "#8B5CF6",
    issues: [
      { name: "Не сушит бельё", price: "от 1200 ₽", time: "1-2 ч" },
      { name: "Перегрев барабана", price: "от 1000 ₽", time: "2 ч" },
      { name: "Шум при работе", price: "от 900 ₽", time: "1-2 ч" },
      { name: "Не вращается барабан", price: "от 1500 ₽", time: "2-3 ч" },
      { name: "Протечка", price: "от 800 ₽", time: "1 ч" },
      { name: "Не включается", price: "от 700 ₽", time: "1 ч" },
      { name: "Замена ремня", price: "от 1300 ₽", time: "2 ч" },
      { name: "Засор фильтра", price: "от 500 ₽", time: "0.5 ч" },
    ],
  },
  {
    id: "boiler",
    emoji: "🌊",
    name: "Бойлер",
    color: "#10B981",
    issues: [
      { name: "Не нагревает воду", price: "от 1200 ₽", time: "1-2 ч" },
      { name: "Протечка", price: "от 1500 ₽", time: "2-3 ч" },
      { name: "Замена тена", price: "от 1800 ₽", time: "2-3 ч" },
      { name: "Запах горелого", price: "от 700 ₽", time: "1 ч" },
      { name: "Термостат не работает", price: "от 900 ₽", time: "1 ч" },
      { name: "Перегрев", price: "от 1000 ₽", time: "1-2 ч" },
      { name: "Не включается", price: "от 800 ₽", time: "1 ч" },
      { name: "Накипь и чистка", price: "от 1200 ₽", time: "2-3 ч" },
    ],
  },
  {
    id: "stove",
    emoji: "🍳",
    name: "Плита",
    color: "#EF4444",
    issues: [
      { name: "Конфорка не работает", price: "от 800 ₽", time: "1 ч" },
      { name: "Слабый огонь", price: "от 700 ₽", time: "1 ч" },
      { name: "Не зажигается поджиг", price: "от 900 ₽", time: "1-2 ч" },
      { name: "Треск при поджиге", price: "от 600 ₽", time: "1 ч" },
      { name: "Стекло разбито", price: "от 2000 ₽", time: "2-3 ч" },
      { name: "Замена регулятора", price: "от 1000 ₽", time: "1 ч" },
      { name: "Не работает духовка", price: "от 1200 ₽", time: "2 ч" },
      { name: "Запах газа", price: "от 1000 ₽", time: "1-2 ч" },
    ],
  },
];

const BLOG_POSTS = [
  {
    emoji: "🧺",
    title: "Как продлить жизнь стиральной машины",
    desc: "Простые правила эксплуатации, которые сэкономят тысячи рублей на ремонте",
    date: "15 марта 2026",
    readTime: "5 мин",
  },
  {
    emoji: "🍽️",
    title: "Почему посудомойка плохо моет",
    desc: "Топ-7 причин и как их устранить самостоятельно без вызова мастера",
    date: "22 марта 2026",
    readTime: "7 мин",
  },
  {
    emoji: "🔥",
    title: "Уход за духовкой: полное руководство",
    desc: "Как правильно чистить, какие режимы использовать и что нельзя делать",
    date: "28 марта 2026",
    readTime: "6 мин",
  },
];

const MASTERS = [
  { name: "Алексей Петров", spec: "Стиральные машины, сушилки", exp: "12 лет", rating: 4.9 },
  { name: "Дмитрий Козлов", spec: "Духовки, плиты", exp: "8 лет", rating: 4.8 },
  { name: "Сергей Иванов", spec: "Бойлеры, посудомойки", exp: "10 лет", rating: 5.0 },
];

const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedAppliance, setSelectedAppliance] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedMaster, setSelectedMaster] = useState<string | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [calendarMonth] = useState(2);
  const [calendarYear] = useState(2026);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [bookingDone, setBookingDone] = useState(false);

  const today = new Date();
  const todayDay = today.getDate();

  const navItems = [
    { id: "home", label: "Главная" },
    { id: "catalog", label: "Каталог" },
    { id: "issues", label: "Неисправности" },
    { id: "prices", label: "Прайс" },
    { id: "about", label: "О нас" },
    { id: "blog", label: "Блог" },
    { id: "booking", label: "Запись" },
    { id: "contacts", label: "Контакты" },
  ];

  const scroll = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  const handleBookingSubmit = () => {
    if (!form.name || !form.phone) return;
    setBookingDone(true);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif", background: "#FFFFFF" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,107,53,0.2)"
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scroll("home")}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #FF6B35, #F7C59F)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🔧</div>
            <span style={{ fontSize: 20, fontWeight: 800, color: "#111827", letterSpacing: "-0.5px" }}>
              Мастер<span style={{ color: "#FF6B35" }}>Фикс</span>
            </span>
          </div>

          <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="hidden md:flex">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scroll(item.id)} style={{
                padding: "8px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
                fontFamily: "'Montserrat', sans-serif",
                background: activeSection === item.id ? "rgba(255,107,53,0.15)" : "transparent",
                color: activeSection === item.id ? "#FF6B35" : "rgba(0,0,0,0.7)",
                transition: "all 0.2s",
              }}>{item.label}</button>
            ))}
          </div>

          <button onClick={() => scroll("booking")} style={{
            padding: "10px 22px", borderRadius: 10, border: "none", cursor: "pointer",
            background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
            color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "'Montserrat', sans-serif",
          }} className="hidden md:block">
            Вызвать мастера
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#111827", padding: 8 }} className="block md:hidden">
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div style={{ padding: "12px 24px 20px", borderTop: "1px solid rgba(255,107,53,0.15)" }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => scroll(item.id)} style={{
                display: "block", width: "100%", padding: "12px 0", border: "none", background: "none",
                cursor: "pointer", fontSize: 15, fontWeight: 600, fontFamily: "'Montserrat', sans-serif",
                color: activeSection === item.id ? "#FF6B35" : "rgba(0,0,0,0.8)",
                textAlign: "left",
              }}>{item.label}</button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 64, background: "#050B18" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,107,53,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 20% 80%, rgba(59,130,246,0.08) 0%, transparent 60%)",
        }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", width: "100%" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 100, background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.3)", marginBottom: 24 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B35" }} />
              <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 600 }}>Принимаем заявки 24/7</span>
            </div>
            <h1 style={{ fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-1px" }}>
              Ремонт бытовой<br />
              <span style={{ background: "linear-gradient(90deg, #FF6B35, #FF8C42, #FFD166)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>техники</span>{" "}
              в вашем городе
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.7, marginBottom: 40, fontWeight: 400, fontFamily: "'Inter', sans-serif" }}>
              Стиральные машины, посудомойки, духовки, сушилки, бойлеры и плиты. Мастер приедет в течение 2 часов. Гарантия на все виды работ.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => scroll("booking")} style={{
                padding: "16px 32px", borderRadius: 12, border: "none", cursor: "pointer",
                background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
                color: "#fff", fontWeight: 800, fontSize: 16, fontFamily: "'Montserrat', sans-serif",
                boxShadow: "0 8px 32px rgba(255,107,53,0.35)",
              }}>Записаться на ремонт</button>
              <button onClick={() => scroll("catalog")} style={{
                padding: "16px 32px", borderRadius: 12, cursor: "pointer",
                background: "transparent", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "'Montserrat', sans-serif",
              }}>Смотреть каталог</button>
            </div>
            <div style={{ display: "flex", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
              {[
                { val: "500+", label: "ремонтов в месяц" },
                { val: "12", label: "мастеров в штате" },
                { val: "98%", label: "довольных клиентов" },
              ].map((s) => (
                <div key={s.val}>
                  <div style={{ fontSize: 30, fontWeight: 900, color: "#FF6B35" }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: -40, background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
            <img
              src="https://cdn.poehali.dev/projects/c017acd1-2ea8-49b8-b121-a2d497c1ba1e/files/dadaf07d-5cba-45d9-809a-85a6848a3ac1.jpg"
              alt="Мастер по ремонту техники"
              style={{ width: "100%", maxWidth: 480, borderRadius: 24, position: "relative", objectFit: "cover", boxShadow: "0 24px 80px rgba(0,0,0,0.6)" }}
            />
            <div style={{
              position: "absolute", bottom: 24, left: -10, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,107,53,0.3)", borderRadius: 16, padding: "14px 20px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>✅</div>
              <div>
                <div style={{ color: "#111827", fontWeight: 700, fontSize: 13 }}>Гарантия 6 месяцев</div>
                <div style={{ color: "rgba(0,0,0,0.45)", fontSize: 11, fontFamily: "'Inter', sans-serif" }}>на все виды работ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" style={{ padding: "100px 0", background: "#F5F7FA" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Каталог техники</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#111827", marginTop: 12, letterSpacing: "-0.5px" }}>
              Ремонтируем все виды<br />
              <span style={{ color: "#FF6B35" }}>бытовой техники</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {APPLIANCES.map((a) => (
              <div key={a.id}
                onClick={() => { setSelectedAppliance(a.id); scroll("issues"); }}
                style={{
                  padding: 28, borderRadius: 20, cursor: "pointer", position: "relative", overflow: "hidden",
                  background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = `1px solid ${a.color}55`;
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.06)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.03)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}>
                <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: `radial-gradient(circle, ${a.color}18 0%, transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ width: 56, height: 56, borderRadius: 14, background: `${a.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 16 }}>{a.emoji}</div>
                <h3 style={{ color: "#111827", fontWeight: 800, fontSize: 17, marginBottom: 8 }}>{a.name}</h3>
                <p style={{ color: "rgba(0,0,0,0.5)", fontSize: 13, fontFamily: "'Inter', sans-serif", lineHeight: 1.5, marginBottom: 16 }}>
                  {a.issues.length} видов неисправностей · Выезд 2 ч
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {a.issues.slice(0, 3).map(i => (
                    <span key={i.name} style={{ padding: "4px 10px", borderRadius: 100, background: `${a.color}15`, color: a.color, fontSize: 11, fontWeight: 600 }}>{i.name}</span>
                  ))}
                </div>
                <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: a.color, fontSize: 13, fontWeight: 700 }}>
                  Подробнее <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISSUES */}
      <section id="issues" style={{ padding: "100px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Диагностика</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#111827", marginTop: 12, letterSpacing: "-0.5px" }}>
              База неисправностей<br /><span style={{ color: "#FF6B35" }}>и решений</span>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
            <button onClick={() => setSelectedAppliance(null)} style={{
              padding: "10px 20px", borderRadius: 100, border: "none", cursor: "pointer", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
              background: !selectedAppliance ? "#FF6B35" : "rgba(0,0,0,0.07)", color: !selectedAppliance ? "#fff" : "rgba(0,0,0,0.6)",
            }}>Все</button>
            {APPLIANCES.map(a => (
              <button key={a.id} onClick={() => setSelectedAppliance(a.id)} style={{
                padding: "10px 20px", borderRadius: 100, border: "none", cursor: "pointer", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
                background: selectedAppliance === a.id ? a.color : "rgba(0,0,0,0.07)",
                color: selectedAppliance === a.id ? "#fff" : "rgba(0,0,0,0.6)",
              }}>{a.emoji} {a.name}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 14 }}>
            {APPLIANCES.filter(a => !selectedAppliance || a.id === selectedAppliance)
              .flatMap(a => a.issues.map(issue => ({ ...issue, appliance: a })))
              .map((item, idx) => (
                <div key={idx} style={{
                  padding: "18px 22px", borderRadius: 14,
                  background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)",
                  display: "flex", alignItems: "center", gap: 14, transition: "all 0.2s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.055)";
                    (e.currentTarget as HTMLElement).style.borderColor = `${item.appliance.color}40`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.03)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.08)";
                  }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: `${item.appliance.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{item.appliance.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#111827", fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{item.name}</div>
                    <div style={{ color: "rgba(0,0,0,0.35)", fontSize: 12, fontFamily: "'Inter', sans-serif" }}>{item.appliance.name} · {item.time}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: item.appliance.color, fontWeight: 800, fontSize: 14 }}>{item.price}</div>
                    <button onClick={() => { setSelectedIssue(item.name); scroll("booking"); }} style={{
                      marginTop: 4, padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer",
                      background: `${item.appliance.color}20`, color: item.appliance.color,
                      fontSize: 11, fontWeight: 700, fontFamily: "'Montserrat', sans-serif",
                    }}>Записаться</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" style={{ padding: "100px 0", background: "#F5F7FA" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Стоимость</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#111827", marginTop: 12, letterSpacing: "-0.5px" }}>
              Прайс-лист <span style={{ color: "#FF6B35" }}>услуг</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
            {APPLIANCES.map((a) => (
              <div key={a.id} style={{ borderRadius: 20, overflow: "hidden", background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)" }}>
                <div style={{ padding: "20px 24px", background: `linear-gradient(135deg, ${a.color}18, ${a.color}06)`, borderBottom: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 22 }}>{a.emoji}</span>
                  <h3 style={{ color: "#111827", fontWeight: 800, fontSize: 15 }}>{a.name}</h3>
                </div>
                <div style={{ padding: "6px 0" }}>
                  {a.issues.map((issue, idx) => (
                    <div key={idx} style={{ padding: "11px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: idx < a.issues.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                      <span style={{ color: "rgba(0,0,0,0.65)", fontSize: 13, fontFamily: "'Inter', sans-serif" }}>{issue.name}</span>
                      <span style={{ color: a.color, fontWeight: 700, fontSize: 13, flexShrink: 0, marginLeft: 12 }}>{issue.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36, padding: "20px 28px", borderRadius: 16, background: "rgba(255,107,53,0.07)", border: "1px solid rgba(255,107,53,0.18)", textAlign: "center" }}>
            <p style={{ color: "rgba(0,0,0,0.55)", fontSize: 14, fontFamily: "'Inter', sans-serif" }}>
              ✦ Диагностика — <strong style={{ color: "#FF6B35" }}>бесплатно</strong> при заказе ремонта &nbsp;·&nbsp; Выезд мастера — <strong style={{ color: "#FF6B35" }}>бесплатно</strong> &nbsp;·&nbsp; Гарантия — <strong style={{ color: "#FF6B35" }}>6 месяцев</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>О компании</span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#111827", marginTop: 12, marginBottom: 24, letterSpacing: "-0.5px" }}>
                Надёжный сервис<br /><span style={{ color: "#FF6B35" }}>с 2012 года</span>
              </h2>
              <p style={{ color: "rgba(0,0,0,0.55)", fontSize: 16, lineHeight: 1.8, fontFamily: "'Inter', sans-serif", marginBottom: 20 }}>
                МастерФикс — команда сертифицированных специалистов, которые ремонтируют бытовую технику любых марок. Работаем быстро, честно и с гарантией.
              </p>
              <p style={{ color: "rgba(0,0,0,0.55)", fontSize: 16, lineHeight: 1.8, fontFamily: "'Inter', sans-serif", marginBottom: 36 }}>
                Используем только оригинальные запчасти. Стоимость фиксируется до начала работ — никаких скрытых платежей.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { icon: "Shield", text: "Гарантия 6 месяцев" },
                  { icon: "Clock", text: "Выезд за 2 часа" },
                  { icon: "Star", text: "Оригинальные запчасти" },
                  { icon: "Headphones", text: "Поддержка 24/7" },
                ].map((f) => (
                  <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderRadius: 12, background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.08)" }}>
                    <Icon name={f.icon} fallback="CircleAlert" size={16} style={{ color: "#FF6B35", flexShrink: 0 }} />
                    <span style={{ color: "rgba(0,0,0,0.75)", fontSize: 13, fontWeight: 600 }}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <img
                src="https://cdn.poehali.dev/projects/c017acd1-2ea8-49b8-b121-a2d497c1ba1e/files/04eeadc1-aeda-479e-8277-599c51100561.jpg"
                alt="Бытовая техника"
                style={{ width: "100%", borderRadius: 24, objectFit: "cover", display: "block", boxShadow: "0 24px 80px rgba(0,0,0,0.5)" }}
              />
              <div style={{ position: "absolute", top: 24, left: -16, background: "#FF6B35", borderRadius: 14, padding: "14px 18px", boxShadow: "0 8px 32px rgba(255,107,53,0.4)" }}>
                <div style={{ color: "#fff", fontSize: 26, fontWeight: 900 }}>14+</div>
                <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 11, fontWeight: 600 }}>лет опыта</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 80 }}>
            <h3 style={{ color: "#111827", fontSize: 26, fontWeight: 800, textAlign: "center", marginBottom: 36 }}>Наши <span style={{ color: "#FF6B35" }}>мастера</span></h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
              {MASTERS.map((m) => (
                <div key={m.name} style={{ padding: 24, borderRadius: 18, background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.1)" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg, #FF6B35, #FF8C42)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>👨‍🔧</div>
                  <div style={{ color: "#111827", fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{m.name}</div>
                  <div style={{ color: "rgba(0,0,0,0.45)", fontSize: 13, fontFamily: "'Inter', sans-serif", marginBottom: 12 }}>{m.spec}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={{ padding: "4px 12px", borderRadius: 100, background: "rgba(255,107,53,0.1)", color: "#FF6B35", fontSize: 12, fontWeight: 700 }}>{m.exp} опыта</span>
                    <span style={{ padding: "4px 12px", borderRadius: 100, background: "rgba(255,209,0,0.1)", color: "#FFD100", fontSize: 12, fontWeight: 700 }}>★ {m.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" style={{ padding: "100px 0", background: "#F5F7FA" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Полезное</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#111827", marginTop: 12, letterSpacing: "-0.5px" }}>
              Блог с советами<br /><span style={{ color: "#FF6B35" }}>по уходу за техникой</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
            {BLOG_POSTS.map((post) => (
              <div key={post.title} style={{
                borderRadius: 20, overflow: "hidden",
                background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)",
                cursor: "pointer", transition: "all 0.3s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,53,0.3)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.08)";
                }}>
                <div style={{ padding: "36px 28px 20px", background: "linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,107,53,0.03))", fontSize: 44 }}>{post.emoji}</div>
                <div style={{ padding: "20px 28px 28px" }}>
                  <h3 style={{ color: "#111827", fontWeight: 800, fontSize: 17, marginBottom: 10, lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ color: "rgba(0,0,0,0.45)", fontSize: 14, fontFamily: "'Inter', sans-serif", lineHeight: 1.6, marginBottom: 18 }}>{post.desc}</p>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: "rgba(0,0,0,0.3)", fontSize: 12, fontFamily: "'Inter', sans-serif" }}>{post.date}</span>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(0,0,0,0.2)", display: "inline-block" }} />
                    <span style={{ color: "rgba(0,0,0,0.3)", fontSize: 12, fontFamily: "'Inter', sans-serif" }}>{post.readTime} чтения</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" style={{ padding: "100px 0", background: "#F0F2F5" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Онлайн-запись</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#111827", marginTop: 12, letterSpacing: "-0.5px" }}>
              Записаться на <span style={{ color: "#FF6B35" }}>ремонт</span>
            </h2>
          </div>

          {bookingDone ? (
            <div style={{ textAlign: "center", padding: "80px 40px", background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 24 }}>
              <div style={{ fontSize: 60, marginBottom: 20 }}>🎉</div>
              <h3 style={{ color: "#111827", fontSize: 26, fontWeight: 800, marginBottom: 10 }}>Заявка принята!</h3>
              <p style={{ color: "rgba(0,0,0,0.55)", fontSize: 15, fontFamily: "'Inter', sans-serif", marginBottom: 28 }}>
                Мастер {selectedMaster} свяжется с вами в ближайшее время для подтверждения.
              </p>
              <button onClick={() => { setBookingDone(false); setBookingStep(1); setSelectedDate(null); setSelectedTime(null); setSelectedMaster(null); setForm({ name: "", phone: "", comment: "" }); }}
                style={{ padding: "13px 30px", borderRadius: 12, border: "none", cursor: "pointer", background: "#FF6B35", color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "'Montserrat', sans-serif" }}>
                Новая запись
              </button>
            </div>
          ) : (
            <div style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 24, overflow: "hidden" }}>
              <div style={{ display: "flex", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                {["Дата", "Время", "Мастер", "Данные"].map((step, idx) => (
                  <div key={step} style={{
                    flex: 1, padding: "18px 12px", textAlign: "center", cursor: idx + 1 < bookingStep ? "pointer" : "default",
                    borderRight: idx < 3 ? "1px solid rgba(0,0,0,0.08)" : "none",
                    background: bookingStep === idx + 1 ? "rgba(255,107,53,0.1)" : "transparent",
                  }} onClick={() => idx + 1 < bookingStep && setBookingStep(idx + 1)}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", margin: "0 auto 6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800,
                      background: bookingStep > idx + 1 ? "#10B981" : bookingStep === idx + 1 ? "#FF6B35" : "rgba(0,0,0,0.1)",
                      color: "#fff" }}>
                      {bookingStep > idx + 1 ? "✓" : idx + 1}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: bookingStep === idx + 1 ? "#FF6B35" : "rgba(0,0,0,0.35)" }}>{step}</div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "40px 36px" }}>
                {bookingStep === 1 && (
                  <div>
                    <h3 style={{ color: "#111827", fontWeight: 800, fontSize: 19, marginBottom: 6, textAlign: "center" }}>Выберите дату</h3>
                    <p style={{ color: "rgba(0,0,0,0.35)", fontSize: 14, textAlign: "center", marginBottom: 28, fontFamily: "'Inter', sans-serif" }}>{monthNames[calendarMonth]} {calendarYear}</p>
                    <div style={{ maxWidth: 380, margin: "0 auto 20px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 8 }}>
                        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map(d => (
                          <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, color: "rgba(0,0,0,0.35)", padding: "4px 0" }}>{d}</div>
                        ))}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
                        {Array.from({ length: adjustedFirstDay }).map((_, i) => <div key={`e${i}`} />)}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const isPast = day < todayDay && calendarMonth <= today.getMonth();
                          const isSelected = selectedDate === day;
                          const isWeekend = ((adjustedFirstDay + i) % 7) >= 5;
                          return (
                            <button key={day} disabled={isPast} onClick={() => setSelectedDate(day)} style={{
                              aspectRatio: "1", borderRadius: 8, border: "none", cursor: isPast ? "not-allowed" : "pointer",
                              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
                              background: isSelected ? "#FF6B35" : isWeekend && !isPast ? "rgba(255,107,53,0.12)" : "rgba(0,0,0,0.05)",
                              color: isPast ? "rgba(0,0,0,0.12)" : isSelected ? "#fff" : isWeekend ? "#FF8C42" : "rgba(0,0,0,0.75)",
                              boxShadow: isSelected ? "0 4px 16px rgba(255,107,53,0.35)" : "none",
                            }}>{day}</button>
                          );
                        })}
                      </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: 28 }}>
                      <button disabled={!selectedDate} onClick={() => setBookingStep(2)} style={{
                        padding: "13px 36px", borderRadius: 11, border: "none", cursor: selectedDate ? "pointer" : "not-allowed",
                        background: selectedDate ? "linear-gradient(135deg, #FF6B35, #FF8C42)" : "rgba(0,0,0,0.08)",
                        color: "#fff", fontWeight: 800, fontSize: 14, fontFamily: "'Montserrat', sans-serif",
                      }}>Выбрать время →</button>
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div>
                    <h3 style={{ color: "#111827", fontWeight: 800, fontSize: 19, marginBottom: 6, textAlign: "center" }}>Выберите время</h3>
                    <p style={{ color: "rgba(0,0,0,0.35)", fontSize: 14, textAlign: "center", marginBottom: 28, fontFamily: "'Inter', sans-serif" }}>{selectedDate} {monthNames[calendarMonth]}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, maxWidth: 380, margin: "0 auto 28px" }}>
                      {TIME_SLOTS.map(time => (
                        <button key={time} onClick={() => setSelectedTime(time)} style={{
                          padding: "12px 6px", borderRadius: 10, border: "none", cursor: "pointer",
                          fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14,
                          background: selectedTime === time ? "#FF6B35" : "rgba(0,0,0,0.07)",
                          color: selectedTime === time ? "#fff" : "#111827",
                          boxShadow: selectedTime === time ? "0 4px 16px rgba(255,107,53,0.35)" : "none",
                        }}>{time}</button>
                      ))}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <button disabled={!selectedTime} onClick={() => setBookingStep(3)} style={{
                        padding: "13px 36px", borderRadius: 11, border: "none", cursor: selectedTime ? "pointer" : "not-allowed",
                        background: selectedTime ? "linear-gradient(135deg, #FF6B35, #FF8C42)" : "rgba(0,0,0,0.08)",
                        color: "#fff", fontWeight: 800, fontSize: 14, fontFamily: "'Montserrat', sans-serif",
                      }}>Выбрать мастера →</button>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div>
                    <h3 style={{ color: "#111827", fontWeight: 800, fontSize: 19, marginBottom: 28, textAlign: "center" }}>Выберите мастера</h3>
                    <div style={{ display: "grid", gap: 14, maxWidth: 480, margin: "0 auto" }}>
                      {MASTERS.map(m => (
                        <div key={m.name} onClick={() => setSelectedMaster(m.name)} style={{
                          padding: "18px 22px", borderRadius: 14, cursor: "pointer",
                          border: selectedMaster === m.name ? "2px solid #FF6B35" : "1px solid rgba(0,0,0,0.12)",
                          background: selectedMaster === m.name ? "rgba(255,107,53,0.08)" : "rgba(0,0,0,0.03)",
                          display: "flex", alignItems: "center", gap: 14, transition: "all 0.2s",
                        }}>
                          <div style={{ width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg, #FF6B35, #FF8C42)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>👨‍🔧</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ color: "#111827", fontWeight: 700, fontSize: 14 }}>{m.name}</div>
                            <div style={{ color: "rgba(0,0,0,0.4)", fontSize: 12, fontFamily: "'Inter', sans-serif" }}>{m.spec}</div>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <div style={{ color: "#FFD100", fontSize: 14, fontWeight: 700 }}>★ {m.rating}</div>
                            <div style={{ color: "rgba(0,0,0,0.3)", fontSize: 11 }}>{m.exp}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: 28 }}>
                      <button disabled={!selectedMaster} onClick={() => setBookingStep(4)} style={{
                        padding: "13px 36px", borderRadius: 11, border: "none", cursor: selectedMaster ? "pointer" : "not-allowed",
                        background: selectedMaster ? "linear-gradient(135deg, #FF6B35, #FF8C42)" : "rgba(0,0,0,0.08)",
                        color: "#fff", fontWeight: 800, fontSize: 14, fontFamily: "'Montserrat', sans-serif",
                      }}>Оставить данные →</button>
                    </div>
                  </div>
                )}

                {bookingStep === 4 && (
                  <div>
                    <h3 style={{ color: "#111827", fontWeight: 800, fontSize: 19, marginBottom: 8, textAlign: "center" }}>Ваши контакты</h3>
                    <div style={{ background: "rgba(255,107,53,0.07)", border: "1px solid rgba(255,107,53,0.18)", borderRadius: 10, padding: "10px 18px", margin: "0 auto 28px", maxWidth: 480, textAlign: "center" }}>
                      <span style={{ color: "rgba(0,0,0,0.5)", fontSize: 13, fontFamily: "'Inter', sans-serif" }}>
                        📅 {selectedDate} {monthNames[calendarMonth]} в {selectedTime} · {selectedMaster}
                        {selectedIssue && ` · ${selectedIssue}`}
                      </span>
                    </div>
                    <div style={{ maxWidth: 480, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
                      <div>
                        <label style={{ display: "block", color: "rgba(0,0,0,0.5)", fontSize: 11, fontWeight: 700, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Имя *</label>
                        <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Как вас зовут?"
                          style={{ width: "100%", padding: "13px 15px", borderRadius: 10, border: "1px solid rgba(0,0,0,0.15)", background: "rgba(0,0,0,0.04)", color: "#111827", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", color: "rgba(0,0,0,0.5)", fontSize: 11, fontWeight: 700, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Телефон *</label>
                        <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+7 (___) ___-__-__"
                          style={{ width: "100%", padding: "13px 15px", borderRadius: 10, border: "1px solid rgba(0,0,0,0.15)", background: "rgba(0,0,0,0.04)", color: "#111827", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", boxSizing: "border-box" }} />
                      </div>
                      <div>
                        <label style={{ display: "block", color: "rgba(0,0,0,0.5)", fontSize: 11, fontWeight: 700, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Комментарий</label>
                        <textarea value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })}
                          placeholder="Опишите проблему подробнее..."
                          rows={3}
                          style={{ width: "100%", padding: "13px 15px", borderRadius: 10, border: "1px solid rgba(0,0,0,0.15)", background: "rgba(0,0,0,0.04)", color: "#111827", fontSize: 14, fontFamily: "'Inter', sans-serif", outline: "none", resize: "none", boxSizing: "border-box" }} />
                      </div>
                      <button onClick={handleBookingSubmit} style={{
                        padding: "15px", borderRadius: 11, border: "none", cursor: "pointer",
                        background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
                        color: "#fff", fontWeight: 800, fontSize: 15, fontFamily: "'Montserrat', sans-serif",
                        boxShadow: "0 8px 32px rgba(255,107,53,0.3)",
                      }}>Подтвердить запись</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" style={{ padding: "100px 0", background: "#F5F7FA" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ color: "#FF6B35", fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Связь</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#111827", marginTop: 12, letterSpacing: "-0.5px" }}>
              Свяжитесь <span style={{ color: "#FF6B35" }}>с нами</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (800) 123-45-67", sub: "Бесплатно по России" },
              { icon: "MessageCircle", label: "WhatsApp", value: "+7 (900) 123-45-67", sub: "Ответим за 5 минут" },
              { icon: "Clock", label: "Режим работы", value: "Ежедневно 8:00–21:00", sub: "Приём заявок 24/7" },
              { icon: "MapPin", label: "Адрес", value: "ул. Ремонтная, 42", sub: "Мастера приедут к вам" },
            ].map(c => (
              <div key={c.label} style={{ padding: 26, borderRadius: 18, background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.08)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(255,107,53,0.13)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <Icon name={c.icon} fallback="CircleAlert" size={20} style={{ color: "#FF6B35" }} />
                </div>
                <div style={{ color: "rgba(0,0,0,0.35)", fontSize: 11, fontWeight: 700, letterSpacing: 1, marginBottom: 5, textTransform: "uppercase" }}>{c.label}</div>
                <div style={{ color: "#111827", fontWeight: 800, fontSize: 15, marginBottom: 4 }}>{c.value}</div>
                <div style={{ color: "rgba(0,0,0,0.35)", fontSize: 13, fontFamily: "'Inter', sans-serif" }}>{c.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 60, padding: "40px", borderRadius: 24, background: "linear-gradient(135deg, rgba(255,107,53,0.1), rgba(59,130,246,0.05))", border: "1px solid rgba(255,107,53,0.2)", textAlign: "center" }}>
            <h3 style={{ color: "#111827", fontWeight: 800, fontSize: 24, marginBottom: 10 }}>Нужен срочный ремонт?</h3>
            <p style={{ color: "rgba(0,0,0,0.5)", fontSize: 15, fontFamily: "'Inter', sans-serif", marginBottom: 24 }}>Позвоните прямо сейчас — мастер выедет в течение 2 часов</p>
            <button onClick={() => scroll("booking")} style={{
              padding: "14px 36px", borderRadius: 12, border: "none", cursor: "pointer",
              background: "linear-gradient(135deg, #FF6B35, #FF8C42)", color: "#fff",
              fontWeight: 800, fontSize: 15, fontFamily: "'Montserrat', sans-serif",
              boxShadow: "0 8px 32px rgba(255,107,53,0.3)",
            }}>Записаться онлайн</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1a1a2e", padding: "36px 24px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg, #FF6B35, #F7C59F)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>🔧</div>
            <span style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>Мастер<span style={{ color: "#FF6B35" }}>Фикс</span></span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, fontFamily: "'Inter', sans-serif" }}>© 2026 МастерФикс. Профессиональный ремонт бытовой техники.</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {navItems.slice(0, 5).map(item => (
              <button key={item.id} onClick={() => scroll(item.id)} style={{
                background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.35)", fontSize: 12, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, padding: "4px 8px",
              }}>{item.label}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

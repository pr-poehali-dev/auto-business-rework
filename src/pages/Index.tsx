import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/0f321aa2-e02f-41e2-b63c-5e4855c32683/files/fcdb6914-cc8a-4486-8dbd-c40526949653.jpg";
const ABOUT_IMG = "https://cdn.poehali.dev/projects/0f321aa2-e02f-41e2-b63c-5e4855c32683/files/0ddba375-6a91-4cd2-a05f-e18459eec894.jpg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "О компании", href: "#about" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Контакты", href: "#contact" },
];

const SERVICES = [
  {
    icon: "TrendingUp",
    title: "Интернет-реклама",
    desc: "Контекст, таргет, маркетплейсы авто. Заявки на покупку и поставку техники из Китая, ОАЭ, Европы.",
  },
  {
    icon: "Globe",
    title: "Разработка сайтов",
    desc: "Продающие сайты и лендинги для дилеров, импортёров и поставщиков спецтехники.",
  },
  {
    icon: "BarChart3",
    title: "SEO-продвижение",
    desc: "Вывод в ТОП по коммерческим запросам: купить авто, спецтехника, поставка из-за рубежа.",
  },
  {
    icon: "Users",
    title: "Консультации для РОМа",
    desc: "Регулярная работа с отделом маркетинга: стратегия, инструменты, контроль подрядчиков.",
  },
  {
    icon: "Megaphone",
    title: "SMM и контент",
    desc: "Экспертный контент об автомобилях, спецтехнике и поставках под вашу аудиторию.",
  },
  {
    icon: "Search",
    title: "Аналитика и трекинг",
    desc: "Сквозная аналитика от клика до сделки. Понимаем, что реально приносит деньги.",
  },
];

const CASES = [
  {
    tag: "Трафик + Разработка",
    company: "Тайфун",
    niche: "Спецтехника и внедорожная техника",
    result1: { value: "+340%", label: "рост органического трафика" },
    result2: { value: "×2.8", label: "увеличение заявок за 6 мес." },
    desc: "Разработали новый сайт с нуля и запустили комплексное продвижение. Выстроили воронку привлечения корпоративных клиентов на покупку и аренду спецтехники.",
    color: "from-corp-navy to-corp-steel",
  },
  {
    tag: "Консультации РОМа",
    company: "ЯмалМото",
    niche: "Мотоциклы и квадроциклы, Ямал",
    result1: { value: "+180%", label: "рост продаж в сезон" },
    result2: { value: "12 мес.", label: "регулярного сопровождения" },
    desc: "Регулярные стратегические консультации для руководителя отдела маркетинга. Помогаем выстроить системный маркетинг в условиях сезонного спроса на Севере.",
    color: "from-corp-steel to-corp-mid",
  },
];

const HOW_WE_WORK = [
  {
    num: "01",
    title: "Аудит и стратегия",
    desc: "Анализируем текущую ситуацию, конкурентов и точки роста. Формируем стратегию под ваши задачи.",
  },
  {
    num: "02",
    title: "Запуск и тест",
    desc: "Быстро запускаем гипотезы, проверяем каналы и отсекаем неэффективные инструменты.",
  },
  {
    num: "03",
    title: "Масштабирование",
    desc: "Усиливаем то, что работает. Увеличиваем бюджет на рабочие каналы, снижаем стоимость заявки.",
  },
  {
    num: "04",
    title: "Отчётность и контроль",
    desc: "Еженедельные отчёты, прозрачные метрики, прямой доступ к рекламным кабинетам.",
  },
];

const ADVANTAGES = [
  { icon: "Shield", title: "Специализация на авто", desc: "Работаем только с автомобильным бизнесом и спецтехникой — глубоко понимаем нишу." },
  { icon: "Clock", title: "Быстрый старт", desc: "Первые результаты через 2 недели после старта. Без долгих согласований." },
  { icon: "LineChart", title: "Фокус на заявки", desc: "Нас интересует не трафик, а реальные обращения от покупателей техники." },
  { icon: "Handshake", title: "Работаем как партнёр", desc: "Погружаемся в бизнес, а не просто «ведём рекламу». Ваш успех — наша репутация." },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-corp-dark text-corp-white font-body min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-corp-dark/95 backdrop-blur-sm border-b border-corp-steel/40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-heading text-2xl font-bold tracking-widest text-corp-white">
            ТОЛКА<span className="text-corp-gold">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-corp-silver hover:text-corp-gold transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:block bg-corp-gold hover:bg-corp-gold-light text-corp-dark font-heading font-semibold text-sm px-5 py-2 tracking-wider uppercase transition-colors"
          >
            Заявка
          </a>
          <button
            className="md:hidden text-corp-silver"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-corp-navy border-t border-corp-steel/40 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-corp-silver hover:text-corp-gold transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-corp-gold text-corp-dark font-heading font-semibold text-sm px-5 py-2 tracking-wider uppercase text-center"
            >
              Оставить заявку
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corp-dark via-corp-dark/85 to-corp-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-corp-dark/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-corp-gold/40 bg-corp-gold/10 px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-corp-gold rounded-full" />
              <span className="text-corp-gold text-xs font-medium tracking-widest uppercase">
                Маркетинг для автобизнеса
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up">
              БОЛЬШЕ ПРОДАЖ<br />
              <span className="text-corp-gold">АВТО И ТЕХНИКИ</span><br />
              ИЗ ЛЮБОЙ ТОЧКИ МИРА
            </h1>

            <p className="text-corp-light text-lg md:text-xl mb-10 leading-relaxed max-w-xl opacity-90 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Привлекаем корпоративных и частных покупателей для дилеров, импортёров и поставщиков спецтехники. Работаем на результат — заявки и сделки.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#contact"
                className="bg-corp-gold hover:bg-corp-gold-light text-corp-dark font-heading font-bold text-base px-8 py-4 tracking-wider uppercase transition-all hover:scale-105 text-center"
              >
                Получить стратегию
              </a>
              <a
                href="#cases"
                className="border border-corp-silver/40 hover:border-corp-gold text-corp-light hover:text-corp-gold font-heading font-medium text-base px-8 py-4 tracking-wider uppercase transition-all text-center"
              >
                Смотреть кейсы
              </a>
            </div>

            <div className="flex gap-10 mt-14 animate-fade-up" style={{ animationDelay: "0.45s" }}>
              {[
                { val: "7+", label: "лет в авторынке" },
                { val: "40+", label: "проектов сдано" },
                { val: "3×", label: "средний рост заявок" },
              ].map((s) => (
                <div key={s.val}>
                  <div className="font-heading text-3xl font-bold text-corp-gold">{s.val}</div>
                  <div className="text-corp-silver text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-corp-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-corp-gold text-xs font-medium tracking-widest uppercase">Что мы делаем</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-corp-white">
              УСЛУГИ ДЛЯ<br />
              <span className="text-corp-gold">АВТОБИЗНЕСА</span>
            </h2>
            <div className="w-16 h-0.5 bg-corp-gold mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-corp-steel/30">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-corp-navy p-8 hover:bg-corp-steel/20 transition-colors group"
              >
                <div className="w-12 h-12 border border-corp-gold/40 flex items-center justify-center mb-5 group-hover:border-corp-gold transition-colors">
                  <Icon name={s.icon} size={22} className="text-corp-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-corp-white mb-3 tracking-wide">
                  {s.title}
                </h3>
                <p className="text-corp-silver text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24 bg-corp-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-corp-gold text-xs font-medium tracking-widest uppercase">Результаты клиентов</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-corp-white">
              НАШИ <span className="text-corp-gold">КЕЙСЫ</span>
            </h2>
            <div className="w-16 h-0.5 bg-corp-gold mt-5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CASES.map((c) => (
              <div
                key={c.company}
                className={`bg-gradient-to-br ${c.color} p-10 border border-corp-steel/40 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-corp-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <span className="inline-block bg-corp-gold/20 text-corp-gold text-xs font-medium tracking-widest uppercase px-3 py-1 mb-4">
                    {c.tag}
                  </span>
                  <h3 className="font-heading text-3xl font-bold text-corp-white mb-1">{c.company}</h3>
                  <p className="text-corp-silver text-sm mb-7">{c.niche}</p>

                  <div className="flex gap-8 mb-7">
                    <div>
                      <div className="font-heading text-3xl font-bold text-corp-gold">{c.result1.value}</div>
                      <div className="text-corp-light text-xs mt-1 max-w-[120px] leading-snug">{c.result1.label}</div>
                    </div>
                    <div className="w-px bg-corp-steel/60" />
                    <div>
                      <div className="font-heading text-3xl font-bold text-corp-gold">{c.result2.value}</div>
                      <div className="text-corp-light text-xs mt-1 max-w-[120px] leading-snug">{c.result2.label}</div>
                    </div>
                  </div>

                  <p className="text-corp-light text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 bg-corp-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-corp-gold text-xs font-medium tracking-widest uppercase">Процесс</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-corp-white">
              КАК МЫ <span className="text-corp-gold">РАБОТАЕМ</span>
            </h2>
            <div className="w-16 h-0.5 bg-corp-gold mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {HOW_WE_WORK.map((step, i) => (
              <div key={step.num} className="relative group">
                <div className="p-8 border-l border-corp-steel/40 hover:border-corp-gold transition-colors h-full">
                  <div className="font-heading text-5xl font-bold text-corp-steel/60 group-hover:text-corp-gold/30 transition-colors mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-corp-white mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-corp-silver text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < HOW_WE_WORK.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-4 h-px bg-corp-steel/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-corp-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-corp-gold text-xs font-medium tracking-widest uppercase">О компании</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6 text-corp-white">
                DIGITAL-АГЕНТСТВО<br />
                <span className="text-corp-gold">СПЕЦИАЛЬНО ДЛЯ</span><br />
                АВТОБИЗНЕСА
              </h2>
              <div className="w-16 h-0.5 bg-corp-gold mb-8" />

              <p className="text-corp-light text-base leading-relaxed mb-6">
                ТОЛКА — маркетинговое агентство с глубокой специализацией на автомобильном рынке. Мы работаем с дилерами, импортёрами, поставщиками спецтехники и компаниями, занимающимися поставками авто из Китая, ОАЭ и Европы.
              </p>
              <p className="text-corp-silver text-base leading-relaxed mb-8">
                Мы не просто «ведём рекламу» — мы строим маркетинговую систему, которая генерирует стабильный поток квалифицированных заявок и масштабируется вместе с вашим бизнесом.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "7+", label: "лет на авторынке" },
                  { val: "40+", label: "реализованных проектов" },
                  { val: "₽1.2 млрд", label: "объём рекламных бюджетов" },
                  { val: "NPS 92", label: "индекс лояльности клиентов" },
                ].map((s) => (
                  <div key={s.label} className="border-l-2 border-corp-gold pl-4">
                    <div className="font-heading text-2xl font-bold text-corp-gold">{s.val}</div>
                    <div className="text-corp-silver text-xs mt-1 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={ABOUT_IMG}
                alt="Команда ТОЛКА"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-corp-gold p-6 hidden lg:block">
                <div className="font-heading text-3xl font-bold text-corp-dark">7+</div>
                <div className="text-corp-dark text-xs font-semibold mt-1">лет<br />экспертизы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 bg-corp-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-corp-gold text-xs font-medium tracking-widest uppercase">Почему ТОЛКА</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-corp-white">
              НАШИ <span className="text-corp-gold">ПРЕИМУЩЕСТВА</span>
            </h2>
            <div className="w-16 h-0.5 bg-corp-gold mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADVANTAGES.map((a) => (
              <div
                key={a.title}
                className="flex gap-6 p-8 border border-corp-steel/40 hover:border-corp-gold/40 transition-colors group"
              >
                <div className="w-14 h-14 border border-corp-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-corp-gold transition-colors">
                  <Icon name={a.icon} size={24} className="text-corp-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-corp-white mb-2 tracking-wide">
                    {a.title}
                  </h3>
                  <p className="text-corp-silver text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 bg-corp-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-corp-gold text-xs font-medium tracking-widest uppercase">Связаться с нами</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-6 text-corp-white">
                ОБСУДИМ ВАШИ<br />
                <span className="text-corp-gold">ЗАДАЧИ</span>
              </h2>
              <div className="w-16 h-0.5 bg-corp-gold mb-8" />

              <p className="text-corp-light text-base leading-relaxed mb-10">
                Расскажите о вашем бизнесе — за 30 минут разберём текущую ситуацию и предложим стратегию роста. Бесплатная консультация для новых клиентов.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "Phone", text: "+7 (xxx) xxx-xx-xx" },
                  { icon: "Mail", text: "hello@tolkadigital.ru" },
                  { icon: "MapPin", text: "Москва / удалённо по всей России" },
                ].map((c) => (
                  <div key={c.icon} className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-corp-gold/30 flex items-center justify-center">
                      <Icon name={c.icon} size={16} className="text-corp-gold" />
                    </div>
                    <span className="text-corp-light text-sm">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="border border-corp-gold/40 bg-corp-gold/5 p-12 flex flex-col items-center justify-center text-center h-full min-h-80">
                  <Icon name="CheckCircle" size={48} className="text-corp-gold mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-corp-white mb-2">Заявка отправлена!</h3>
                  <p className="text-corp-silver text-sm">Свяжемся с вами в течение рабочего дня</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-corp-silver text-xs tracking-widest uppercase block mb-2">Ваше имя *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-corp-navy border border-corp-steel/40 focus:border-corp-gold text-corp-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-corp-steel"
                        placeholder="Иван Петров"
                      />
                    </div>
                    <div>
                      <label className="text-corp-silver text-xs tracking-widest uppercase block mb-2">Телефон *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-corp-navy border border-corp-steel/40 focus:border-corp-gold text-corp-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-corp-steel"
                        placeholder="+7 (900) 000-00-00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-corp-silver text-xs tracking-widest uppercase block mb-2">Компания</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-corp-navy border border-corp-steel/40 focus:border-corp-gold text-corp-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-corp-steel"
                      placeholder="Название компании или сайт"
                    />
                  </div>

                  <div>
                    <label className="text-corp-silver text-xs tracking-widest uppercase block mb-2">Задача / вопрос</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-corp-navy border border-corp-steel/40 focus:border-corp-gold text-corp-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-corp-steel resize-none"
                      placeholder="Расскажите о вашем бизнесе и задачах..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-corp-gold hover:bg-corp-gold-light text-corp-dark font-heading font-bold text-sm px-8 py-4 tracking-widest uppercase transition-all hover:scale-[1.02] w-full"
                  >
                    Получить бесплатную консультацию
                  </button>
                  <p className="text-corp-silver/60 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-corp-navy border-t border-corp-steel/40 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading text-xl font-bold tracking-widest text-corp-white">
            ТОЛКА<span className="text-corp-gold">.</span>
          </div>
          <div className="text-corp-silver/50 text-xs">
            © 2024 ТОЛКА. Маркетинговое агентство для автобизнеса
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-corp-silver/50 hover:text-corp-gold text-xs tracking-wide uppercase transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

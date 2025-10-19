<div align="center">
  <h1>👻 GhostScore</h1>
  <p><strong>İş Başvurularından Sonra Sessizlik mi?</strong></p>
  <p>Başvurduğun şirketleri kaydet, cevap gelip gelmediğini işaretle.<br/>Hangi şirketlerin ghost yaptığını birlikte ortaya çıkaralım.</p>

  <p>
    <a href="#"><img src="https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js" alt="Next.js"/></a>
    <a href="#"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React"/></a>
    <a href="#"><img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript"/></a>
    <a href="#"><img src="https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind"/></a>
  </p>

  <p>
    <a href="#turkish">🇹🇷 Türkçe</a> • <a href="#english">🇬🇧 English</a>
  </p>
</div>

---

<div id="turkish"></div>

## 🇹🇷 Türkçe

### 💡 Nedir?

GhostScore, Türkiye'deki iş başvuru süreçlerinde **transparansı artırmak** için topluluk destekli bir platformdur. İş arayan bireyler başvurularını kaydeder, şirketlerden cevap alıp almadıklarını işaretler. Topluluk datası ile hangi şirketlerin ghosting yaptığını birlikte ortaya çıkarırız.

### ✨ Özellikler

- 🔐 **LinkedIn ile Güvenli Giriş** - Fake veri önlemek için OAuth 2.0
- 📊 **Şirket Ghost Skorları** - Topluluk datasına dayalı şeffaf, gerçek zamanlı puanlama
- 📝 **Manuel Takip** - Kullanıcı başvurusunu kaydeder, cevap durumunu işaretler
- 🌍 **Çift Dil Desteği** - Türkçe ve İngilizce arayüz
- 📱 **Modern & Responsive** - Tüm cihazlarda kusursuz deneyim
- 🌓 **Dark Mode** - Göz dostu karanlık tema
- ⚡ **Blazing Fast** - Next.js 15.5 App Router + Turbopack
- 🎨 **Beautiful UI** - shadcn/ui bileşenleri ile modern tasarım

### 🚀 Teknolojiler

#### Frontend
- **Framework**: Next.js 15.5 (App Router, React Server Components)
- **UI Library**: React 19
- **Language**: TypeScript 5.7 (strict mode)
- **Styling**: Tailwind CSS 3.4 + shadcn/ui
- **Icons**: Lucide React

#### Backend (Planlanan)
- **Authentication**: NextAuth v5 (LinkedIn OAuth)
- **Database**: Supabase (PostgreSQL + Realtime)
- **API**: Next.js API Routes

#### DevOps
- **Deployment**: Vercel
- **Version Control**: Git & GitHub
- **Package Manager**: npm

### 🛠️ Kurulum

#### Gereksinimler
- Node.js 18+ 
- npm veya yarn

#### Adımlar

```bash
# Repository'yi klonla
git clone https://github.com/mahsumaktas/ghostscore.git
cd ghostscore

# Dependencies'leri yükle
npm install

# Development server'ı başlat (Turbopack ile)
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

#### Production Build

```bash
npm run build
npm start
```

### 📁 Proje Yapısı

```
ghostscore/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Türkçe)
│   ├── page.tsx            # Ana sayfa (Türkçe)
│   ├── en/                 # İngilizce sayfalar
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── globals.css         # Global stiller & CSS variables
├── components/
│   ├── landing/            # Landing page bölümleri
│   │   ├── hero-section.tsx
│   │   ├── ghost-score-table.tsx
│   │   ├── how-it-works.tsx
│   │   ├── stats-section.tsx
│   │   ├── cta-section.tsx
│   │   └── footer.tsx
│   ├── ui/                 # shadcn/ui bileşenleri
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── table.tsx
│   ├── language-switcher.tsx
│   └── theme-provider.tsx
├── lib/
│   ├── utils.ts            # Utility fonksiyonlar
│   └── translations.ts     # İki dilli çeviri sistemi
└── public/                 # Static assets
```

### 🎨 Design System

#### Renkler
- **Primary (Blue)**: #3B82F6 - Güven, profesyonellik
- **Secondary (Emerald)**: #10B981 - Başarı, pozitif yanıt
- **Accent (Amber)**: #F59E0B - Dikkat, uyarı
- **Danger (Red)**: #EF4444 - Ghost durumu
- **Neutral (Slate)**: #6B7280 - Metin, border

#### Tipografi
- **Font**: Inter (Google Fonts)
- **Headings**: 700 (Bold)
- **Body**: 400 (Regular)
- **Small**: 500 (Medium)

#### Animasyonlar
- Float effect (ghost emoji)
- Pulsing backgrounds
- Smooth transitions (200ms)
- Hover states

### 🗺️ Roadmap

#### Phase 1: MVP ✅
- [x] Modern landing page (TR/EN)
- [x] Responsive design + Dark mode
- [x] Ghost score table UI
- [ ] LinkedIn OAuth entegrasyonu
- [ ] Başvuru ekleme & düzenleme
- [ ] Kullanıcı dashboard'u
- [ ] Supabase database setup

#### Phase 2: Community Features 🚧
- [ ] Şirket yorumları & rating
- [ ] Upvote/downvote mekanizması
- [ ] Email bildirimleri
- [ ] Fuzzy matching (şirket isim düzeltme)
- [ ] Kullanıcı profili & istatistikler
- [ ] Moderation paneli

#### Phase 3: Analytics & Scale 📊
- [ ] Sektörel istatistikler
- [ ] Şehir/bölge analizi
- [ ] Public API (REST/GraphQL)
- [ ] Data export (CSV/JSON)
- [ ] Advanced filters & search
- [ ] Mobile app (React Native)

#### Phase 4: Enterprise 🏢
- [ ] Şirket hesapları
- [ ] Response rate tracking
- [ ] Employer branding tools
- [ ] Premium insights

### 🤝 Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Bu bir **açık kaynak topluluk projesi**.

#### Nasıl Katkı Sağlanır?

1. **Fork** edin ve klonlayın
2. **Feature branch** oluşturun: `git checkout -b feature/amazing-feature`
3. Değişikliklerinizi **commit** edin: `git commit -m 'feat: add amazing feature'`
4. Branch'inizi **push** edin: `git push origin feature/amazing-feature`
5. **Pull Request** açın

#### Katkı Alanları

- 🐛 Bug fixes
- ✨ Yeni özellikler
- 📝 Dokümantasyon iyileştirme
- 🌍 Çeviri eklemeleri
- 🎨 UI/UX iyileştirmeleri
- ⚡ Performance optimizasyonları

#### Kod Standartları

- TypeScript strict mode
- ESLint kurallarına uyum
- Anlaşılır commit mesajları
- Component'ler için JSDoc

---

<div id="english"></div>

## 🇬🇧 English

### 💡 What is GhostScore?

GhostScore is a **community-powered platform** to bring transparency to job application processes in Turkey. Job seekers track their applications, mark whether they received responses, and together we reveal which companies ghost candidates.

### ✨ Features

- 🔐 **LinkedIn Authentication** - Prevent fake data with OAuth 2.0
- 📊 **Company Ghost Scores** - Transparent, real-time ratings based on community data
- 📝 **Manual Tracking** - Users record applications and mark response status
- 🌍 **Bilingual** - Turkish and English interface
- 📱 **Fully Responsive** - Perfect experience on all devices
- 🌓 **Dark Mode** - Eye-friendly dark theme
- ⚡ **Lightning Fast** - Next.js 15.5 App Router + Turbopack
- 🎨 **Beautiful UI** - Modern design with shadcn/ui

### 🚀 Tech Stack

See the Turkish section above for detailed tech stack.

### 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/mahsumaktas/ghostscore.git
cd ghostscore

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🤝 Contributing

Contributions are welcome! This is an **open-source community project**.

1. Fork & clone
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👥 Contact & Links

- **Website**: [ghostscore.vercel.app](https://ghostscore-acp0irwvk-mahsumaktas-projects.vercel.app)
- **GitHub**: [@mahsumaktas](https://github.com/mahsumaktas)
- **Email**: [hello@ghostscore.co](mailto:hello@ghostscore.co)
- **Twitter**: Coming soon

## 🌟 Support

Bu projeyi beğendiyseniz ⭐ vermeyi unutmayın!

If you like this project, don't forget to give it a ⭐!

---

<div align="center">
  <p><strong>Made with ❤️ in Istanbul</strong></p>
  <p>© 2025 GhostScore • Open Source • Community-Driven</p>
</div>

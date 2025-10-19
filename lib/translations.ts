export type Language = 'tr' | 'en'

export const translations = {
  tr: {
    hero: {
      emoji: '👻',
      title: 'İş Başvurularından Sonra\nSessizlik mi?',
      subtitle: 'Başvurduğun şirketleri kaydet, cevap gelip gelmediğini işaretle. Hangi şirketlerin ghost yaptığını birlikte ortaya çıkaralım.',
      stats: {
        applications: 'Toplam Başvuru',
        companies: 'Şirket',
        users: 'Aktif Kullanıcı',
      },
      cta: {
        login: 'LinkedIn ile Giriş Yap',
        viewScores: 'Ghost Skorları Gör',
      },
      trust: '🔒 Verileriniz güvende • 👥 Topluluk destekli • ⚡ Tamamen ücretsiz',
    },
    table: {
      title: '🇹🇷 Türkiye\'nin Ghost Skoru',
      subtitle: 'En çok ve en az ghost yapan şirketler',
      headers: {
        rank: '#',
        company: 'Şirket',
        score: 'Ghost Skoru',
        applications: 'Başvuru',
        status: 'Durum',
      },
      status: {
        excellent: 'Çok İyi',
        moderate: 'Orta',
        poor: 'Kötü',
      },
      viewAll: 'Tüm Şirketleri Gör',
    },
    howItWorks: {
      title: 'Nasıl Çalışır?',
      subtitle: '3 basit adımda başlayın',
      steps: [
        {
          title: 'LinkedIn ile Giriş',
          description: 'Fake veri önlemek için LinkedIn hesabınızla güvenli giriş yapın. Sadece profil bilgilerinizi kullanırız.',
        },
        {
          title: 'Başvurularını Kaydet',
          description: 'Başvurduğun şirketleri ekle, cevap gelip gelmediğini işaretle. Sen bilgileri gir, biz birlikte istatistik oluşturalım.',
        },
        {
          title: 'Skorları Gör',
          description: 'Hangi şirketler cevap veriyor, hangiler ghost yapıyor? Topluluğun datası ile karar ver.',
        },
      ],
    },
    stats: {
      totalApplications: 'Toplam Başvuru',
      companyData: 'Şirket Datası',
      activeUsers: 'Aktif Kullanıcı',
      avgGhostRate: 'Avg. Ghost Oranı',
    },
    cta: {
      title: 'İş Başvurularınızı\nTakip Etmeye Başlayın',
      subtitle: 'Ücretsiz, hızlı ve tamamen şeffaf.',
      button: 'LinkedIn ile Başla',
      social: '127 kişi bugün katıldı • 2,547 başvuru takip ediliyor',
    },
    footer: {
      tagline: 'İş başvuru transparansı için topluluk projesi',
      links: {
        about: 'Hakkımızda',
        privacy: 'Gizlilik',
        terms: 'Kullanım Şartları',
        github: 'GitHub',
      },
      copyright: '© 2025 GhostScore.co • Made with ❤️ in Istanbul',
    },
  },
  en: {
    hero: {
      emoji: '👻',
      title: 'Radio Silence After\nJob Applications?',
      subtitle: 'Track your applications, mark whether you got a response. Let\'s uncover which companies ghost candidates together.',
      stats: {
        applications: 'Total Applications',
        companies: 'Companies',
        users: 'Active Users',
      },
      cta: {
        login: 'Sign in with LinkedIn',
        viewScores: 'View Ghost Scores',
      },
      trust: '🔒 Your data is safe • 👥 Community-powered • ⚡ Completely free',
    },
    table: {
      title: '🇹🇷 Turkey\'s Ghost Score',
      subtitle: 'Companies that ghost the most and the least',
      headers: {
        rank: '#',
        company: 'Company',
        score: 'Ghost Score',
        applications: 'Applications',
        status: 'Status',
      },
      status: {
        excellent: 'Excellent',
        moderate: 'Moderate',
        poor: 'Poor',
      },
      viewAll: 'View All Companies',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Get started in 3 simple steps',
      steps: [
        {
          title: 'Sign in with LinkedIn',
          description: 'Securely sign in with your LinkedIn account to prevent fake data. We only use your profile information.',
        },
        {
          title: 'Track Your Applications',
          description: 'Add the companies you applied to, mark whether you got a response. You provide the info, we build the statistics together.',
        },
        {
          title: 'View the Scores',
          description: 'Which companies respond and which ghost? Make decisions with community data.',
        },
      ],
    },
    stats: {
      totalApplications: 'Total Applications',
      companyData: 'Company Data',
      activeUsers: 'Active Users',
      avgGhostRate: 'Avg. Ghost Rate',
    },
    cta: {
      title: 'Start Tracking Your\nJob Applications',
      subtitle: 'Free, fast, and completely transparent.',
      button: 'Get Started with LinkedIn',
      social: '127 people joined today • 2,547 applications being tracked',
    },
    footer: {
      tagline: 'A community project for job application transparency',
      links: {
        about: 'About',
        privacy: 'Privacy',
        terms: 'Terms of Use',
        github: 'GitHub',
      },
      copyright: '© 2025 GhostScore.co • Made with ❤️ in Istanbul',
    },
  },
}

export function getTranslations(lang: Language) {
  return translations[lang]
}

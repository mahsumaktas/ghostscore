# 📤 GitHub'a Yükleme Talimatları

## 1️⃣ GitHub'da Repository Oluştur

1. [GitHub](https://github.com)'a git
2. Sağ üstteki **+** butonuna tıkla → **New repository**
3. Ayarlar:
   - **Repository name**: `ghostscore`
   - **Description**: `👻 İş başvurularında transparans için topluluk projesi | Community-powered job application transparency platform`
   - **Public** seçeneğini işaretle ✅
   - ❌ README, .gitignore veya license EKLEME (zaten var)
4. **Create repository** butonuna tıkla

## 2️⃣ Local'den GitHub'a Push Et

GitHub'da yeni oluşturduğun repository sayfasında şu komutları göreceksin:

```bash
# Remote ekle
git remote add origin https://github.com/mahsumaktas/ghostscore.git

# Push et
git push -u origin main
```

Ya da SSH kullanıyorsan:

```bash
git remote add origin git@github.com:mahsumaktas/ghostscore.git
git push -u origin main
```

## 3️⃣ Repository Ayarlarını Düzenle

### About (Sağ üstte)
- **Description**: 👻 İş başvurularında transparans için topluluk projesi
- **Website**: `https://ghostscore.co` (hazır olunca)
- **Topics** ekle:
  - `job-application`
  - `transparency`
  - `nextjs`
  - `react`
  - `typescript`
  - `tailwindcss`
  - `open-source`
  - `community`
  - `turkey`
  - `ghosting`

### Social Preview (Settings → General)
Güzel bir cover image oluştur (1280x640px) ve yükle.

Şunları içerebilir:
- 👻 Ghost emoji
- "GhostScore" yazısı
- "Hangi şirketler ghost yapıyor?"
- Modern gradient background

## 4️⃣ İsteğe Bağlı: GitHub Pages / Vercel Deploy

### Vercel'e Deploy:
1. [Vercel](https://vercel.com)'e git
2. **Import Project**
3. GitHub repository'sini seç
4. Deploy!

## 5️⃣ README'de Güncelle

Deploy ettikten sonra README.md'deki şu satırları güncelle:

```markdown
- **Website**: [ghostscore.co](https://ghostscore.co) _(coming soon)_
```

Bunu şununla değiştir:
```markdown
- **Website**: [ghostscore.vercel.app](https://ghostscore.vercel.app)
```

## ✅ Checklist

- [ ] GitHub'da public repository oluşturuldu
- [ ] Code push edildi
- [ ] Topics eklendi
- [ ] Description güncellendi
- [ ] (İsteğe bağlı) Social preview image eklendi
- [ ] (İsteğe bağlı) Vercel'e deploy edildi
- [ ] Repository'ye ⭐ verildi (kendi repo'na bile olsa 😄)

---

## 🎯 Sonraki Adımlar

1. **Issues** oluştur (roadmap'teki özellikler için)
2. **Discussions** aktif et (community feedback için)
3. **Projects** board oluştur (task tracking)
4. Social media'da paylaş!

---

Bu dosyayı silmeyi unutma! 😊

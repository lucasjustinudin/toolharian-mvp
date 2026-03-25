# ToolHarian MVP

Website tools statis sederhana siap deploy.

## Preview lokal

```bash
cd /home/abuy/.openclaw/workspace/toolharian-mvp
python3 -m http.server 8080
```

Buka `http://localhost:8080`

## Deploy cepat

### Vercel
- Import folder/project ini ke Vercel
- Framework preset: Other / Static
- Build command: kosong
- Output directory: `.`

### Netlify
- Deploy folder ini sebagai static site
- Publish directory: `.`

### Cloudflare Pages
- Connect repo atau upload sebagai static files
- Build command: kosong
- Build output directory: `.`

## Catatan
- Ganti domain contoh di `sitemap.xml` dan `robots.txt`
- Rapikan halaman legal sebelum produksi
- Tambah analytics/ads setelah situs stabil

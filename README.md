# Nena Mala Website (App)

Sous-projet Next.js principal avec App Router, i18n et e‑commerce léger.

## 🚀 Stack
- Next.js 13.4.12, React 18, TypeScript, TailwindCSS
- i18n: middleware + préfixes `/en`, `/fr`, `/mx`

## Fonctionnalités
- Header dynamique + sélecteur 🇬🇧🇲🇽🇫🇷, hamburger, CartDrawer
- Pages: Home, Shop, Catégories, PDP, Cart, Checkout, About, Contact, Legal
- Prix localisés: USD/EUR/MXN avec `lib/locale.ts` et composant `Price`
- Panier localStorage + événements `cart:add`

## Démarrage
```bash
npm install
npm run dev
```

## Routes
- `/[locale]/shop`, `/[locale]/shop/[category]`
- `/[locale]/product/[slug]`, `/[locale]/cart`, `/[locale]/checkout`
- `/[locale]/legal/{terms,privacy,cookies,csr}`

## À suivre
- hreflang/canoniques + dictionnaires de traduction
- Contenus légaux FR/ES‑MX (remplacer les placeholders)
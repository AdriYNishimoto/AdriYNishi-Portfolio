# Portfólio — Adriano Nishimoto

Portfólio pessoal de [Adriano Nishimoto](https://github.com/AdriYNishimoto), estudante de
Engenharia de Software com foco em back-end. Site bilíngue (PT/EN), com tema claro/escuro, formulário de contato
funcional e páginas de case study para cada projeto.

## Stack

| Área | Tecnologia |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript, Tailwind CSS 4 |
| Animação | Motion 12 |
| i18n | next-intl (`/pt` e `/en`) |
| Tema | next-themes |
| E-mail | Resend + Zod |
| Ícones | lucide-react |
| Deploy | Vercel |

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha os valores
npm run dev
```

O site sobe em `http://localhost:3000` e redireciona para `/pt`.

### Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Serve o build de produção |
| `npm run lint` | ESLint |
| `npm run typecheck` | Checagem de tipos (sem emitir) |

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. **Nunca faça commit de `.env.local`** — ele já está no
`.gitignore`.

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `RESEND_API_KEY` | sim | Chave da API do [Resend](https://resend.com) (server-only) |
| `CONTACT_TO_EMAIL` | sim | E-mail que recebe as mensagens do formulário |
| `CONTACT_FROM_EMAIL` | sim | Remetente. Use `onboarding@resend.dev` até verificar um domínio |
| `NEXT_PUBLIC_SITE_URL` | não | URL pública (usada em SEO/sitemap). Na Vercel é detectada sozinha |

## Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e importe este repositório.
2. A Vercel detecta o Next.js sozinha — não mexa em build command nem output directory.
3. Em **Settings → Environment Variables**, cadastre `RESEND_API_KEY`, `CONTACT_TO_EMAIL` e
   `CONTACT_FROM_EMAIL` (marque *Production*, *Preview* e *Development*).
4. Clique em **Deploy**.

Depois do primeiro deploy, opcionalmente defina `NEXT_PUBLIC_SITE_URL` com o domínio final
para que sitemap, canonical e Open Graph usem a URL definitiva.

### Domínio próprio

Em **Settings → Domains**, adicione o domínio e siga as instruções de DNS. Atualize
`NEXT_PUBLIC_SITE_URL` em seguida.

## Formulário de contato (Resend)

O envio acontece em `src/app/api/contact/route.ts` (runtime Node). O fluxo:

1. Valida os campos no servidor com Zod.
2. Descarta bots com um campo honeypot invisível (responde 200 sem enviar nada).
3. Aplica um rate limit simples por IP (5 envios por minuto).
4. Envia via Resend com `replyTo` no e-mail de quem preencheu.

**Remetente:** com `onboarding@resend.dev` o Resend só entrega para o e-mail dono da conta —
o que já atende, já que o formulário sempre envia para você. Para um remetente próprio
(ex.: `contato@seudominio.com`), verifique o domínio no Resend e atualize `CONTACT_FROM_EMAIL`.

## Atualizando o conteúdo

Quase tudo está separado do código:

| O que | Onde |
| --- | --- |
| Currículo | `public/cv/adriano-nishimoto-cv-pt.pdf` — PDF atualizado em português |
| Foto | `public/adriano.webp` |
| Links, e-mail, WhatsApp | `src/config/site.ts` |
| Projetos e case studies | `src/content/projects.ts` |
| Experiência e formação | `src/content/career.ts` |
| Stack e níveis | `src/content/tech.ts` |
| Textos da interface | `messages/pt.json` e `messages/en.json` |

O botão de download usa o currículo atualizado em português nas duas versões do site.
Na versão em inglês, o botão informa o idioma do arquivo. Os caminhos ficam em
`src/config/site.ts`; os demais PDFs em `public/cv/` são versões anteriores, sem link na interface.

## Estrutura

```
src/
  app/
    [locale]/          # páginas por idioma (home + /projects/[slug])
    api/contact/       # route handler do formulário
    sitemap.ts · robots.ts · manifest.ts
  components/
    layout/            # navbar, footer, primitivas de seção
    sections/          # cada seção da home
    motion/            # primitivas de animação
    ui/                # componentes base
  content/             # dados (projetos, carreira, stack)
  i18n/                # configuração do next-intl
  config/site.ts       # configuração central do site
messages/              # traduções pt/en
```

## Acessibilidade e performance

- Renderização estática (SSG) das duas versões de idioma.
- Skip link, landmarks semânticos, foco visível e navegação por teclado.
- Contraste verificado nos dois temas; animações respeitam `prefers-reduced-motion`.
- Imagens otimizadas via `next/image` (AVIF/WebP) e fontes via `next/font`.

## Licença

Código sob licença MIT. O conteúdo (textos, currículo, foto e identidade visual) é pessoal e
não deve ser reutilizado.

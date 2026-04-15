<p align="center">
  <img src="./app/icon.svg" width="112" alt="AI Product Studio logo" />
</p>

<h1 align="center">AI Product Studio Landing Page</h1>

<p align="center">
  Стильный футуристичный SaaS-лендинг с акцентом на motion-дизайн, glassmorphism и интерактивные UI-блоки.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animations-111827?logo=framer&logoColor=white" alt="Framer Motion" />
</p>

## Preview

![Hero preview](./assets/readme/hero-preview.gif)

<p>
  <img src="./assets/readme/product-flow.gif" width="70%" alt="Landing flow preview" />
  <img src="./assets/readme/mobile-preview.gif" width="27%" alt="Mobile preview" />
</p>

## О проекте

Этот проект демонстрирует визуально насыщенный landing page для AI-продукта:

- сильный первый экран с анимированным hero-блоком;
- карточки возможностей платформы;
- интерактивная demo-секция с имитацией AI generation;
- dashboard preview с анимированными графиками;
- pricing-блок и финальный CTA.

## Технологический стек

- `Next.js 16` (App Router)
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Framer Motion`
- `lucide-react` (иконки)

## Что использовано в лендинге

- секционная архитектура на переиспользуемых компонентах в `components/landing`;
- плавные reveal-анимации и микро-взаимодействия;
- кастомный курсор и magnetic button-эффекты;
- glassmorphism-стиль, градиенты и glow-элементы;
- адаптивная верстка для desktop и mobile.

## Запуск локально

```bash
npm install
npm run dev
```

Откройте: [http://localhost:3000](http://localhost:3000)

## Скрипты

- `npm run dev` - запуск dev-сервера
- `npm run build` - production-сборка
- `npm run start` - запуск production-версии
- `npm run lint` - проверка ESLint

## Структура проекта

```text
app/
  layout.tsx
  page.tsx
  icon.svg
components/
  landing/
assets/
  readme/
```

# PeakViewer Astro

Современный веб-сайт, построенный с использованием Astro и Tailwind CSS. Проект демонстрирует лучшие практики разработки статических сайтов с интерактивными компонентами.

## 📋 Требования

Перед началом работы убедитесь, что у вас установлены:

- **Node.js** версии 18.0.0 или выше
- **npm** или **bun** пакетный менеджер

## 🚀 Установка

1. Клонируйте репозиторий:
```bash
git clone <repository-url>
cd peakviewer-astro
```

2. Установите зависимости:
```bash
bun install
# или если используете npm
npm install
```

## 🔧 Запуск проекта

### Разработка
Запустить сервер разработки на [localhost:3000](http://localhost:3000):
```bash
bun dev
# или
npm run dev
```

### Сборка
Собрать проект для продакшена:
```bash
bun run build
# или
npm run build
```

Результаты сборки будут находиться в папке `./build/`

### Предпросмотр
Запустить сервер для предпросмотра собранного сайта:
```bash
bun start
# или
npm start
```

## 📁 Структура проекта

```
├── src/
│   ├── components/       # Компоненты Astro
│   │   ├── sections/     # Секции страниц
│   │   └── ui/           # UI компоненты (React)
│   ├── layouts/          # Шаблоны страниц
│   ├── pages/            # Маршруты сайта
│   ├── data/             # Данные и конфигурация
│   ├── styles/           # Глобальные стили
│   └── lib/              # Утилиты и функции
├── public/               # Статические файлы
│   └── images/           # Изображения сайта
├── build/                # Собранный проект (генерируется)
├── astro.config.mjs      # Конфигурация Astro
├── tailwind.config.js    # Конфигурация Tailwind CSS
└── package.json          # Зависимости проекта
```

## 🎨 Технологии

- **[Astro](https://astro.build/)** - фреймворк для создания быстрых веб-сайтов
- **[Tailwind CSS](https://tailwindcss.com)** - утилит-первый CSS фреймворк
- **[React](https://react.dev/)** - для интерактивных компонентов
- **[Radix UI](https://www.radix-ui.com/)** - примитивы для UI компонентов
- **[Lucide Icons](https://lucide.dev/)** - иконки в формате SVG
- **[Swiper](https://swiperjs.com/)** - библиотека для слайдеров

## 📝 Доступные команды

| Команда | Описание |
|---------|---------|
| `bun dev` | Запустить сервер разработки |
| `bun run build` | Собрать проект для продакшена |
| `bun start` | Запустить предпросмотр собранного проекта |
| `bun astro` | Команды Astro CLI |

## 🌐 Развертывание

Проект готов к развертыванию на популярных платформах:

- **Vercel** - рекомендуется для Astro проектов
- **Netlify** - поддержка статических сайтов
- **GitHub Pages** - бесплатный хостинг
- **AWS S3 + CloudFront** - для масштабных проектов

Папка `./build/` содержит полностью собранный статический сайт, готовый к развертыванию.

## 🤝 Внесение изменений

1. Создайте новую ветку для вашей функции:
```bash
git checkout -b feature/название-функции
```

2. Внесите изменения и протестируйте их локально

3. Отправьте изменения на сервер:
```bash
git push origin feature/название-функции
```

4. Создайте Pull Request

## 📚 Полезные ссылки

- [Документация Astro](https://docs.astro.build/)
- [Документация Tailwind CSS](https://tailwindcss.com/docs)
- [Документация Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [Интеграция React в Astro](https://docs.astro.build/en/guides/integrations-guide/react/)

## 📄 Лицензия

MIT License - см. файл LICENSE для деталей

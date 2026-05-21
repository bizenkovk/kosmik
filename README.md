# КоСМиК.ру-2026

Официальный статический сайт конференции «КоСМиК.ру-2026» на Next.js App Router, TypeScript и Tailwind CSS.

## Команды

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

Сайт собирается в статический экспорт (`out/`) и готов для GitHub Pages или обычного статического хостинга.

## GitHub Pages

Публикация настроена через `.github/workflows/deploy.yml`.

- Домен: `kosmik.ians.academy`
- Файл домена: `public/CNAME`
- Build command: `npm run build`
- Output directory: `out`

В настройках GitHub Pages нужно выбрать источник `GitHub Actions`.

## Управление контентом

- Основные данные и статусы: `data/conference.ts`
- Программа конференции: `data/program.ts`
- Файлы для скачивания: `public/files/`
- Логотипы организаторов: `public/logos/`

Для Яндекс.Метрики задайте `NEXT_PUBLIC_YANDEX_METRIKA_ID`. Если переменная не задана, код Метрики не подключается.

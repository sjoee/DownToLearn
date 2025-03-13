<a name="readme-top"></a>
<!-- Table of Contents -->

## 🌟 Description

**DownToLearn** is a web application specifically designed to support individuals with Down syndrome in their learning journey. Focusing on the unique needs of pupils with Down syndrome, the platform offers a gamified learning experience aimed at improving cognitive skills in areas such as sign language, social skills, and language learning (English, Malay, and Spanish). 

Through interactive, fun lessons, **DownToLearn** engages students in a way that encourages active participation. Pupils' progress and activities are tracked and recorded, providing valuable insights for parents and guardians, similar to a digital report card. The platform ensures that learning is not only effective but also enjoyable, helping to build essential skills and boost confidence in daily life.



# :notebook_with_decorative_cover: Table of Contents


- [Description](#-description)
- [Folder Structure](#bangbang-folder-structure)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Acknowledgements](#gem-acknowledgements)



## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
duolingo-clone/
  |- actions/
    |- challenge-progress.ts
    |- user-progress.ts
    |- user-subscription.ts
  |- app/
    |-- (main)/
        |--- courses/
        |--- leaderboard/
        |--- learn/
        |--- quests/
        |--- report/
        |--- shop/
        |--- layout.tsx
    |-- (marketing)/
        |--- banner.tsx
        |--- footer.tsx
        |--- header.tsx
        |--- layout.tsx
        |--- page.tsx
    |-- admin/
        |--- challenge/
        |--- challengeOption/
        |--- course/
        |--- lesson/
        |--- unit/
        |--- app.tsx
        |--- page.tsx
    |-- api/
        |--- challengeOptions/
        |--- challenges/
        |--- courses/
        |--- lessons/
        |--- units/
        |--- webhooks/stripe/
    |-- lesson/
        |--- [lessonId]/
        |--- card.tsx
        |--- challenge.tsx
        |--- footer.tsx
        |--- header.tsx
        |--- layout.tsx
        |--- page.tsx
        |--- question-bubble.tsx
        |--- quiz.tsx
        |--- result-card.tsx
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
  |- components/
    |-- modals/
    |-- ui/
    |-- feed-wrapper.tsx
    |-- mobile-wrapper.tsx
    |-- mobile-sidebar.tsx
    |-- promo.tsx
    |-- quests.tsx
    |-- sidebar-item.tsx
    |-- sidebar.tsx
    |-- sticky-wrapper.tsx
    |-- user-progress.tsx
  |- config/
    |-- index.ts
  |- db/
    |-- drizzle.ts
    |-- queries.ts
    |-- schema.ts
  |- lib/
    |-- admin.ts
    |-- stripe.ts
    |-- utils.ts
  |- public/
  |- scripts/
    |-- prod.ts
    |-- reset.ts
    |-- seed.ts
  |- store/
    |-- use-exit-modal.ts
    |-- use-hearts-modal.ts
    |-- use-practice-modal.ts
  |- types/
    |-- canvas.ts
  |- .env
  |- .eslintrc.js
  |- .gitignore
  |- .prettierrc.json
  |- components.json
  |- constants.ts
  |- drizzle.config.ts
  |- environment.d.ts
  |- middleware.ts
  |- next.config.mjs
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :camera: Screenshots

![Modern UI/UX](/.github/images/img1.jpg "Modern UI/UX")

![Leaderboard](/.github/images/img2.jpg "Leaderboard")

![Shop](/.github/images/img3.jpg "Shop")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Postgresql](https://skillicons.dev/icons?i=postgres "Postgresql")](https://www.postgresql.org/ "Postgresql")


## :gem: Acknowledgements

Useful resources and dependencies that are used in DownToLearn.

- Kenney Assets: https://kenney.nl/
- Freesound: https://freesound.org/
- Elevenlabs AI: https://elevenlabs.io/
- Flagpack: https://flagpack.xyz/

- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs): ^4.29.9
- [@neondatabase/serverless](https://www.npmjs.com/package/@neondatabase/serverless): ^0.9.0
- [@radix-ui/react-avatar](https://www.npmjs.com/package/@radix-ui/react-avatar): ^1.0.4
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog): ^1.0.5
- [@radix-ui/react-progress](https://www.npmjs.com/package/@radix-ui/react-progress): ^1.0.3
- [@radix-ui/react-separator](https://www.npmjs.com/package/@radix-ui/react-separator): ^1.0.3
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.0.2
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.0
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.0
- [dotenv](https://www.npmjs.com/package/dotenv): ^16.4.5
- [drizzle-orm](https://www.npmjs.com/package/drizzle-orm): ^0.30.4
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.359.0
- [next](https://www.npmjs.com/package/next): 14.1.4
- [next-themes](https://www.npmjs.com/package/next-themes): ^0.3.0
- [ra-data-simple-rest](https://www.npmjs.com/package/ra-data-simple-rest): ^4.16.12
- [react](https://www.npmjs.com/package/react): ^18
- [react-admin](https://www.npmjs.com/package/react-admin): ^4.16.13
- [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar): ^2.1.0
- [react-confetti](https://www.npmjs.com/package/react-confetti): ^6.1.0
- [react-dom](https://www.npmjs.com/package/react-dom): ^18
- [react-use](https://www.npmjs.com/package/react-use): ^17.5.0
- [sonner](https://www.npmjs.com/package/sonner): ^1.4.32
- [stripe](https://www.npmjs.com/package/stripe): ^14.22.0
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.2.2
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [zustand](https://www.npmjs.com/package/zustand): ^4.5.2

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>

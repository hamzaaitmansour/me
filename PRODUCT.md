# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no framework and no build step, hosted on GitHub Pages (owner's answer, 13/10/2026). The site must open straight from the folder.

## Users

- **Primary:** recruiters and tech leads hiring a **Flutter / mobile engineer**. They give it a short first look, often from a link in a job application or on LinkedIn, on a laptop or on a phone. They want to know who he is, what he has shipped, which stack, and how to reach him or get the CV.
- **Secondary:** hiring managers for backend, cloud or DevOps roles. For them, Spring Boot, Node, AWS and Terraform show up as depth behind the mobile profile, not as a second headline.
- **Bilingual:** visitors choose FR or EN. The CV download follows the language and is always the **Flutter CV** (`cv/fr/hamza.aitmansour-flutter.pdf`, `cv/eng/hamza.aitmansour-flutter-en.pdf`). The SE/DevOps CV (`cv/fr/hamza.aitmansour.se.pdf`) is kept but never linked.

## Product Purpose

The personal portfolio of **Hamza Ait Mansour**: Ingénieur d'État en Génie Informatique (ENSA Agadir, 2021–2026), Mobile Engineer at Tandeem (Rabat) since 02/2026. It turns the CV into proof: products shipped, what he built in each, hackathons and volunteering. Success means a recruiter downloads the CV or makes contact (e-mail, phone, GitHub).

## Positioning

A mobile engineer who ships the whole slice: the Flutter app, the API behind it and the cloud it runs on. The evidence below is his own work:
- **Tandeem carpooling:** Flutter + API + routing engine, built end to end.
- **OptiFood:** Flutter manager app + Spring Boot OMS + offline sync.
- **Tandeem intranet:** AWS infrastructure in Terraform.

## Operating Context

- **Tandeem** (Rabat, 02/02/2026 – today), Mobile Engineer:
  - The Tandeem app is a multi-tenant employee-engagement SaaS: perks, events, forms, polls, a booking flow and an HR chatbot.
  - He built the **carpooling** module end to end:
    - Flutter, 11 screens, Provider/MVVM.
    - API: PostGIS corridor matching, a self-hosted OSRM on Morocco OSM data, an HMAC-signed rotating QR check-in, reward ledger and CSR stats. About 45 API routes and 14 Prisma models.
  - His PFE (defended 26/06/2026) covered **Events** and **dynamic Forms** in Flutter/Firebase.
  - Also an **intranet portal for a banking client**: Next.js, NestJS, Prisma, Keycloak SSO, Redis, with AWS infra in Terraform (VPC, ALB, ECS, ECR, RDS, WAF, CloudWatch) and Dev/Staging/Prod CI/CD.
- **OptiFood** (France, remote, 04/2026 – 09/2026), Software Engineer – Mobile & Backend, on a restaurant SaaS:
  - KDS, kiosk, customer display (CDS) and delivery modules.
  - Flutter manager app: Clean Architecture, Provider, Dio, PubNub realtime chat.
  - Offline-first local storage with sync; an 8-hour soak test passed.
  - OMS in Java 21 / Spring Boot with Redis/Valkey: about 200 endpoints, database-per-tenant PostgreSQL, Flyway migrations, about 2,000 tests.
  - Deployed on cloud (AWS per CV; GKE staging).
- **ADMDI** (Agadir, 02/2025 – 05/2025), Software Engineer Intern:
  - **EDUTRAQ**, a biometric attendance system: a Spring Boot web app with the ZK9500 fingerprint reader, Spring Security, roles (student, teacher, head of department, coordinator), absence justifications, Docker on AWS ECS, MySQL on RDS.
  - Repo: github.com/hamzaaitmansour/EDUTRAQ_app_SPRINGBOOT.
- **EducazenKids** (10/2026), side project:
  - Student app prototype, families site and staff dashboard for an inclusive school in Agadir.
  - Live at hamzaaitmansour.github.io/educat-mobile.
- **huban** (08–10/2026), online jewellery brand for Morocco, cash on delivery:
  - Next.js 15 storefront (collection, product pages, the « Mon Look » composer, checkout, order tracking) and a back office (phone-confirmation call queue, dashboard, catalogue, reviews).
  - Express 5 + TypeScript API, PostgreSQL / Prisma, 14-state order lifecycle, S3 media, Docker Compose, CI. Brand kit generated in code.
  - Not deployed yet and the repository is private, so no link. Screens in `assets/img/huban-*.webp`.
- **DAMI** (2026), site for a Moroccan kimono label, live at dami-vitrine.vercel.app:
  - Campaign film, signature-piece carousel, FR / EN / AR with right-to-left Arabic, cart and WhatsApp ordering recorded by a Vercel serverless function. Plain HTML, CSS and JS.
- **School projects:**
  - Event management backend (2025): Spring Boot, WebSockets, Spring Security, Spring AI, Docker on AWS.
  - Classroom booking system (2024): Java EE, Hibernate JPA, MySQL.
  - Open source: `fddp_cli`, a Dart CLI that scaffolds feature-first Flutter architecture.
- **Hackathons:**
  - **NASA Space Apps Challenge 2025**, Agadir: Technopark Agadir, 4–5 October 2025, 48 h. Challenge: "Build a Space Biology Knowledge Engine" over NASA's 608 bioscience publications. Team project **BioQuest** (the owner's name for it).
  - **Challenge Agadir 2030 – « ville intelligente et accessible à tous »**, run by the RNI youth branch in Agadir: ideathon 7–8 December 2024 (60 participants), then a hackathon phase in April 2025. His idea is a platform for visitors and residents to discover and book Agadir's sports fields and stadiums ahead of the 2030 World Cup; Stade Adrar is a host venue.
- **Volunteering:**
  - Motatawi3 2024: workshops, then two weeks of volunteering in a neighbourhood hospital.
  - Orientation 2024: three guidance sessions for high-school students on studies after the bac and ENSA.
- **Certification:** Oracle Certified Professional, Java SE 17 Developer.
- **Languages:** Arabic (native), French B2, English B2.

## Capabilities and Constraints

- FR / EN switch on every section; the language choice also picks the CV file.
- Contact shown publicly (owner approved): e-mail hamza.aitmansour@edu.uiz.ac.ma, phone +212 6 45 38 63 60, GitHub github.com/hamzaaitmansour, and photo.
- **Never name the Tandeem banking client.** Do not use the carpooling mockups that carry the client's branding.
- OptiFood may be named, with its apps.
- **Undecided:**
  - LinkedIn URL (not provided yet; no placeholder link ships).
  - Whether the Agadir 2030 idea placed (the press lists four winning projects but no team names, so no ranking claim).

## Brand Commitments

- Pinned structure and motion reference from the owner: Dribbble "Personal Portfolio Website – Animations" (Dymas Alfin / Mikan Team).
  - Structure: an availability pill and a nav with counts, then a giant two-tone name with a cut-out portrait overlapping it, then role and CTA.
  - Then a social column, then /SELECTED WORK (ghost word behind, filters, cards), /SERVICE as a large-type accordion, a dark /EXPERIENCE list with a hover preview, project detail pages, and a "Have a project in mind?" close.
  - Motion: preloader, letter reveals, text-roll hovers, cursor-following previews.
- Hero photo: the owner's own PFE photos (`Desktop/pfe-pics`), web copies in `assets/img/`.

## Evidence on Hand

- **CVs:** `cv/fr/` (Flutter + SE, French), `cv/eng/` (Flutter, English).
- **Photos:**
  - `Desktop/pfe-pics`: portrait `profile.jpg`, graduation DSLR series `_MG_55xx.jpg`, `in-front.png` (PFE defence in front of the slides), `ensa-home.png` (in front of ENSA).
- **Screens:**
  - Tandeem events and forms screens in `Desktop/pfe/tandeem-pfe/Chapters/chapitre4|5/images/realisation/`.
  - OptiFood CDS renders in `optifood/cds/.impeccable/review/`.
  - EducazenKids screens in `mobile-educative-project/resources/screens/v3-college/`.
- **Absent:** testimonials, client logos, metrics on business impact, hackathon rankings. Do not fabricate any of them.

## Product Principles

1. **Proof over adjectives:** every claim points at something he built, with the stack and his part in it.
2. **Mobile first in the story:** Flutter leads; backend and cloud are the depth that makes him different.
3. **One glance, one action:** a recruiter knows who, what and how to reach him within the first viewport.
4. **Bilingual by default:** FR and EN are equal citizens, and the CV follows the language.
5. **Discretion with clients:** name OptiFood, never the bank.

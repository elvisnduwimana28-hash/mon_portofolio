import Image from 'next/image';
import { Github, Linkedin, Download, Mail } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="w-full px-4 py-6 flex justify-between items-center border-b border-zinc-800 bg-black/80 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight text-cyan-400">Elvis NDUWIMANA</span>
        </div>
        <nav className="hidden md:flex gap-8 text-zinc-200 text-sm">
          <a href="#skills" className="hover:text-cyan-400 transition">Compétences</a>
          <a href="#experience" className="hover:text-cyan-400 transition">Expériences</a>
          <a href="#education" className="hover:text-cyan-400 transition">Formation</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>
        <a
          href="/ELVIS_CV.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition text-sm font-medium shadow"
        >
          <Download size={18} /> Télécharger CV
        </a>
      </header>

      <main className="flex flex-col items-center w-full min-h-screen bg-black text-zinc-100">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center max-w-2xl mx-auto">
          <div className="mb-6">
              <div className="mx-auto mb-8 bg-zinc-800 w-64 h-64 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/photo.png"
                  alt="Photo de Elvis NDUWIMANA"
                  width={256}
                  height={256}
                  className="object-contain w-full h-full rounded-lg"
                  priority
                />
              </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-2">Administrateur Systèmes & Réseaux | Infrastructure & Data</h1>
            <p className="text-zinc-300 mb-4">
              Passionné par la gestion d'infrastructures et l'architecture réseaux, je mets mes compétences en programmation au service de l'automatisation. Mon approche combine la rigueur de l'administration système à la flexibilité du développement pour bâtir des environnements stables et sécurisés. Curieux des enjeux Data, j'intègre l'analyse de données pour optimiser la fiabilité des flux.
            </p>
            <a
              href="mailto:elvisnduwimana28@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition font-medium shadow"
            >
              <Mail size={18} /> Me contacter
            </a>
          </div>
          <div className="flex gap-4 justify-center mt-2">
            <a href="https://github.com/elvisnduwimana28-hash" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-cyan-400 transition">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/elvis-nduwimana-849692226/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-cyan-400 transition">
              <Linkedin size={28} />
            </a>
          </div>
        </section>

        {/* Compétences */}
        <section id="skills" className="w-full max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-200">Infra & OS</h3>
              <ul className="list-disc list-inside text-zinc-300">
                <li>Linux (Ubuntu, Debian, Kali)</li>
                <li>Windows Desktop & Server</li>
                <li>Virtualisation</li>
                <li>Conteneurisation & Orchestration (Docker, Kubernetes)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-200">Sécurité</h3>
              <ul className="list-disc list-inside text-zinc-300">
                <li>Wazuh, ZAP, Nikto,Nagios, CrowdSec, Wireguard</li>
                <li>Audit & Tests d'intrusion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-200">Dev & Scripting</h3>
              <ul className="list-disc list-inside text-zinc-300">
                <li>Python, Bash, PowerShell</li>
                <li>React, Node.js, PHP, Java</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-zinc-200">Data</h3>
              <ul className="list-disc list-inside text-zinc-300">
                <li>SQL, MySQL, PostgreSQL, MongoDB</li>
                <li>Power BI, Talend</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Expériences */}
        <section id="experience" className="w-full max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Expériences</h2>
          <ol className="relative border-l border-cyan-700">
            {/* Nouvelle Expérience */}
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-600 rounded-full ring-8 ring-black">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </span>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-0.5 rounded whitespace-nowrap">Avril 2026 - Mai 2026</span>
                <h3 className="text-lg font-semibold text-zinc-200 whitespace-nowrap">Administrateur Système & Infrastructure IA : Stage <span className="ml-2 text-cyan-400">@ MENGHI Covering (Corse, France)</span></h3>
              </div><br/>
              <ul className="mb-2 text-zinc-300 list-disc list-inside">
                <li><strong className="text-zinc-100">Architecture et Déploiement:</strong> Conception, installation et déploiement d'un système d'IA agentique (OpenClaw) sur un Serveur Privé Virtuel (VPS) Linux.</li><br/>
                <li><strong className="text-zinc-100">Orchestration et Automatisation:</strong> Développement d'un serveur métier asynchrone en Python (FastAPI) pour l'exécution de tâches complexes (génération de vidéos, recherche de clients sur LinkedIn, Envoie de mails).</li><br/>
                <li><strong className="text-zinc-100">Conteneurisation et Sécurité:</strong> Isolation des services (Agent OpenClaw et Serveur métier Python/FastAPI) à l'aide de Docker afin de garantir la sécurité de l'infrastructure.</li>
              </ul>
            </li>

            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-600 rounded-full ring-8 ring-black">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </span>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-0.5 rounded">2023 - 2024</span>
                <h3 className="text-lg font-semibold text-zinc-200">Ingénieur Admin Système : CDI<span className="ml-2 text-cyan-400">@ Mediabox SA (Burundi)</span></h3>
              </div><br/>
              <ul className="mb-2 text-zinc-300 list-disc list-inside">
                <li>Administration : Gestion serveurs (Linux/Windows), Scripting Bash et Automatisation via Git hooks.</li><br/>
                <li>Sécurité : Audits et tests d'intrusion (OWASP ZAP, Nikto) & correction de vulnérabilités.</li><br/>
                <li>Infrastructure Réseau : Extension d'architecture physique, segmentation et optimisation de bande passante.</li><br/>
                <li>Déploiment, Digitalisation & Gestion des projets : CGM, MINEDUC, PTBA, PMS, BPS, SYSPAP, EDRMS</li>
              </ul>
            </li>

            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-600 rounded-full ring-8 ring-black">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </span>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-0.5 rounded">2022</span>
                <h3 className="text-lg font-semibold text-zinc-200">Développeur Fullstack : Stage <span className="ml-2 text-cyan-400">@ AIPAD</span></h3>
              </div><br/>
              <ul className="mb-2 text-zinc-300 list-disc list-inside">
                <li>App Microfinance : Conception d'un système de gestion d'une microfinance.</li><br/>
                <li>Modélisation : Architecture de la base de données (Méthode Merise) et recueil de besoins.</li><br/>
                <li>Développement : PHP, MySQL, HTML/CSS</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Formation */}
        <section id="education" className="w-full max-w-3xl px-4 py-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Formation</h2>
          <ol className="relative border-l border-cyan-700">
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-600 rounded-full ring-8 ring-black">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </span>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-0.5 rounded">2025 - Actuellement</span>
                <span className="text-lg font-semibold text-cyan-300">Licence 3</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-200">Informatique</span>
                <span className="text-zinc-400 text-sm">Université de Corse Pasquale PAOLI</span>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-600 rounded-full ring-8 ring-black">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </span>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-0.5 rounded">2024 - 2025</span>
                <span className="text-lg font-semibold text-cyan-300">Master 1</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-200">Expert Informatique & Systèmes d'Information</span>
                <span className="text-zinc-400 text-sm">EPSI Bordeaux</span>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-600 rounded-full ring-8 ring-black">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </span>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-0.5 rounded">2019 - 2021</span>
                <span className="text-lg font-semibold text-cyan-300">Licence</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-200">Maintenance Informatique & Réseaux</span>
                <span className="text-zinc-400 text-sm">Université de Sagesse</span>
              </div>
            </li>
            <li className="ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-600 rounded-full ring-8 ring-black">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </span>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-0.5 rounded">2017</span>
                <span className="text-lg font-semibold text-cyan-300">Baccalauréat</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-200">Informatique d'Opérateur</span>
                <span className="text-zinc-400 text-sm">Ecole Technique Secondaire</span>
              </div>
            </li>
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full max-w-3xl px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Contact</h2>
          <p className="mb-4 text-zinc-300">elvisnduwimana28@gmail.com<br/>📍France</p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/elvisnduwimana" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-cyan-400 transition">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/elvisnduwimana" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-cyan-400 transition">
              <Linkedin size={28} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 flex flex-col md:flex-row items-center justify-between border-t border-zinc-800 bg-black/80 text-zinc-400 text-sm">
        <span>&copy; {new Date().getFullYear()} Elvis NDUWIMANA. Tous droits réservés.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://github.com/elvisnduwimana" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-cyan-400 transition">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/elvisnduwimana" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-cyan-400 transition">
            <Linkedin size={20} />
          </a>
        </div>
      </footer>
    </>
  );
}
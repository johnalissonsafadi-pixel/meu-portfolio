'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, Code2, Sparkles, Cpu, Database, Layout } from 'lucide-react';

export function BehindTheFactorySection() {
  const whatsappUrl =
    'https://wa.me/5545988359610?text=Olá%20John!%20Vim%20pelo%20site%20da%20SAFADI%20DEV%20STUDIO%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.';

  return (
    <section className="relative overflow-hidden py-20 bg-slate-950 text-slate-100">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0 w-full max-w-md"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-30 blur-lg transition duration-500 hover:opacity-50" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 shadow-xl">
              <Image
                src="/john-safadi.jpg"
                alt="John Safadi - SAFADI DEV STUDIO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
                <p className="text-sm font-semibold text-slate-100">John Safadi</p>
                <p className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
                  <Code2 className="w-3.5 h-3.5" /> Founder & Fullstack Developer
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              Agilidade & IA Aplicada
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
              A Mente por trás dos <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Projetos</span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Desenvolvo soluções end-to-end integrando o ecossistema moderno de <strong>Next.js, Node.js, Bancos de Dados Relacionais e APIs de Inteligência Artificial</strong>. O foco é transformar processos manuais e gargalos operacionais em softwares fluidos, rápidos e escaláveis.
            </p>

            {/* Badges Rápidas de Tecnologias */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/50 text-xs text-slate-300">
                <Layout className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Next.js / React</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/50 text-xs text-slate-300">
                <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>SQL / Node.js</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/50 text-xs text-slate-300">
                <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
                <span>IA & Automação</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Sem intermediários ou burocracia de agência: você alinha a estratégia diretamente com quem desenha a arquitetura, escreve o código e coloca o sistema no ar.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:brightness-110 hover:shadow-emerald-500/30 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                Falar Diretamente com John Safadi
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
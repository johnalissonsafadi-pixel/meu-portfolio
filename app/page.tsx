"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BehindTheFactorySection } from "@/components/BehindTheFactorySection";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  } as const;

  const projetos = [
    {
      id: "ecommerce-perfumes",
      titulo: "E-commerce de Perfumes Importados",
      categoria: "E-commerce & Banco de Dados",
      descricao: "Plataforma de vendas online de alta conversão, com catálogo inteligente, cálculo de frete, checkout otimizado e banco de dados para alta escala.",
      tag: "Fullstack",
      cor: "from-emerald-500/20 to-teal-500/5",
      imagens: [
        "/projetos/fragrance1.png",
        "/projetos/fragrance2.png"
      ],
    },
    {
      id: "sistema-erp-gestao",
      titulo: "Sistema ERP de Compras & Estoque",
      categoria: "Software de Gestão Corporativa",
      descricao: "Sistema web focado em controle avançado de estoque, rastreabilidade de compras, gestão multi-moeda e relatórios financeiros em tempo real.",
      tag: "Sistema Web / ERP",
      cor: "from-cyan-500/20 to-blue-500/5",
      imagens: [
        "/projetos/gestacom1.png",
        "/projetos/gestacom2.png",
        "/projetos/gestacom3.png"
      ],
    },
    {
      id: "transporte-escolar",
      titulo: "Portal de Gestão de Transporte Escolar",
      categoria: "Plataforma & Portal SaaS",
      descricao: "Plataforma web para otimização de rotas, gestão de passageiros/alunos, controle de mensalidades e canal direto de comunicação.",
      tag: "Plataforma SaaS",
      cor: "from-indigo-500/20 to-purple-500/5",
      imagens: [
        "/projetos/transpescolar1.png",
        "/projetos/transpescolar2.png",
        "/projetos/transpescolar3.png"
      ],
    },
    {
      id: "cucas-artesanais",
      titulo: "Cardápio Digital & Landing Page - Cucas Artesanais",
      categoria: "Landing Page & Conversão",
      descricao: "Página de altíssima conversão focada em experiência mobile, apresentação de produtos artesanais e recepção direta de pedidos via WhatsApp.",
      tag: "MVP / High Conversion",
      cor: "from-amber-500/20 to-orange-500/5",
      imagens: [
        "/projetos/henkel1.png",
        "/projetos/henkel2.png"
      ],
    },
  ];

  const passos = [
    {
      numero: "01",
      titulo: "Mapeamento & Estratégia",
      descricao: "Entendemos a dor do negócio, definimos o escopo mínimo viável (MVP) e desenhamos a melhor estrutura para o software.",
    },
    {
      numero: "02",
      titulo: "Desenvolvimento + IA",
      descricao: "Utilizamos as tecnologias mais modernas do mercado alinhadas a ferramentas de IA para entregar produtos funcionais com agilidade.",
    },
    {
      numero: "03",
      titulo: "Produto no Ar",
      descricao: "Configuramos hospedagem, domínio, banco de dados e entregamos o sistema 100% funcional e pronto para uso.",
    },
  ];

  const mensagemWhatsapp = encodeURIComponent(
    "Olá, John! Vi o seu portfólio na SAFADI DEV STUDIO e gostaria de conversar sobre um projeto."
  );
  const urlWhatsapp = `https://wa.me/5545988359610?text=${mensagemWhatsapp}`;

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start px-6 py-16 overflow-hidden">
      {/* 🌌 Fundo Decorativo Sutil (Grid) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnWrite">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 🚀 CAPA / HERO SECTION */}
      <motion.div
        className="relative z-10 max-w-4xl text-center space-y-6 my-12 sm:my-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Badge da Empresa */}
        <motion.div variants={itemVariants}>
          <span className="inline-block px-5 py-2 rounded-full border border-emerald-500/30 bg-slate-900/90 text-emerald-400 text-sm sm:text-base font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            SAFADI DEV STUDIO
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          className="text-5xl sm:text-7xl font-extrabold tracking-tighter leading-tight"
          variants={itemVariants}
        >
          Fábrica de <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            Negócios Digitais
          </span>
        </motion.h1>
        
        {/* Subtítulo */}
        <motion.p 
          className="text-slate-400 text-xl sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Desenvolvimento de softwares práticos, sistemas sob medida e automações inteligentes para transformar a operação do seu negócio.
        </motion.p>

        {/* Botões de Ação */}
        <motion.div 
          className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <a
            href="#projetos"
            className="inline-block px-10 py-4 rounded-full bg-white text-slate-950 font-semibold text-base hover:bg-slate-200 transition-all shadow-lg hover:scale-105 transform"
          >
            Conhecer Projetos
          </a>
          <a
            href={urlWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-slate-900 border border-slate-800 text-slate-200 font-medium text-base hover:bg-slate-800 transition-all"
          >
            Entrar em Contato
          </a>
        </motion.div>
      </motion.div>

      {/* 👤 SEÇÃO "POR TRÁS DA FÁBRICA" */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <BehindTheFactorySection />
      </div>

      {/* 🧱 SEÇÃO DE PROJETOS */}
      <section id="projetos" className="relative z-10 w-full max-w-5xl mx-auto pt-12 pb-20 space-y-12">
        <div className="text-center sm:text-left border-b border-slate-800/80 pb-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">Projetos & Cases</h2>
          <p className="text-slate-400 text-base mt-2">
            Soluções criadas para resolver problemas reais e automatizar processos com eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-3xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 transition-all duration-300 overflow-hidden"
            >
              <Link 
                href={`/projetos/${item.id}`} 
                className="p-8 flex flex-col justify-between h-full w-full relative z-10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.cor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/90 text-emerald-400 border border-emerald-500/20">
                      {item.tag}
                    </span>
                    <span className="text-xs text-slate-500">{item.categoria}</span>
                  </div>

                  {/* 📸 CAPA DO PROJETO */}
                  {item.imagens && item.imagens.length > 0 && (
                    <div className="relative w-full h-48 rounded-xl overflow-hidden my-3 border border-slate-800">
                      <img 
                        src={item.imagens[0]} 
                        alt={item.titulo} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.titulo}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.descricao}
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-4 border-t border-slate-800/50 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                  <span>Ver Detalhes do Projeto</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚙️ SEÇÃO DE METODOLOGIA / COMO TRABALHAMOS */}
      <section className="relative z-10 w-full max-w-5xl mx-auto py-16 space-y-12">
        <div className="text-center sm:text-left border-b border-slate-800/80 pb-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">Como Trabalhamos</h2>
          <p className="text-slate-400 text-base mt-2">
            Do conceito inicial ao software rodando com foco na melhor experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {passos.map((passo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="p-8 rounded-3xl border border-slate-800/60 bg-slate-900/20 space-y-4"
            >
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                {passo.numero}
              </span>
              <h3 className="text-xl font-bold text-white">{passo.titulo}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {passo.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📬 SEÇÃO DE CONTATO / CTA */}
      <section id="contato" className="relative z-10 w-full max-w-5xl mx-auto my-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-10 sm:p-16 rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-slate-900 to-slate-950 text-center space-y-6 overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tem um projeto ou ideia em mente?
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            Vamos transformar a sua visão em um software real, otimizado e pronto para gerar resultados.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={urlWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all shadow-lg hover:scale-105 transform flex items-center gap-2"
            >
              Iniciar Conversa no WhatsApp
              <span>→</span>
            </a>
            
            <a
              href="mailto:contato.safadi.dev@gmail.com"
              className="px-8 py-4 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 text-base font-medium transition-all"
            >
              Enviar por E-mail
            </a>
          </div>
        </motion.div>
      </section>

      {/* 🦶 RODAPÉ COM SUA ASSINATURA */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto pt-8 border-t border-slate-800/60 text-center text-xs text-slate-500 pb-8">
        <p>
          © {new Date().getFullYear()} SAFADI DEV STUDIO • Desenvolvido por <span className="text-slate-300 font-medium">John Safadi</span>
        </p>
      </footer>

      {/* Brilho Radial Sutil de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500 opacity-5 rounded-full blur-[140px] pointer-events-none" />
    </main>
  );
}
"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const dadosProjetos: Record<string, any> = {
  "ecommerce-perfumes": {
    titulo: "E-commerce de Perfumes Importados",
    categoria: "E-commerce & Banco de Dados",
    tag: "Fullstack",
    subtitulo: "Plataforma de alta performance para catálogo e vendas de perfumaria de luxo.",
    desafio: "Criar uma experiência visual sofisticada e rápida para apresentação de produtos, com navegação intuitiva, cálculo dinâmico de frete e gestão simplificada de catálogo.",
    solucao: "Desenvolvimento de uma aplicação web moderna com banco de dados relacional otimizado, integração de rotas de checkout e painel responsivo.",
    recursos: [
      "Catálogo dinâmico com filtros avançados por marca e fragrância",
      "Carrinho interativo e fluxo de checkout otimizado",
      "Banco de dados estruturado para alta escala",
      "Interface 100% responsiva focada na navegação mobile",
    ],
    tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL"],
    imagens: [
      "/projetos/fragrance1.png",
      "/projetos/fragrance2.png"
    ],
  },
  "sistema-erp-gestao": {
    titulo: "Sistema ERP de Compras & Estoque",
    categoria: "Software de Gestão Corporativa",
    tag: "Sistema Web / ERP",
    subtitulo: "Plataforma robusta para gestão de estoque, controle financeiro e operações de compra.",
    desafio: "Centralizar operações de entrada de mercadorias, movimentação de estoque multi-moeda e controle de margem de lucro em uma única interface ágil para operação de alta rotatividade.",
    solucao: "Construção de um ERP web sob medida, com dashboard financeiro, alertas automáticos de reposição e emissão de relatórios analíticos em tempo real.",
    recursos: [
      "Gestão de estoque com suporte a cotações e multi-moedas",
      "Histórico completo de compras e rastreabilidade de fornecedores",
      "Dashboard analítico de faturamento e margem operacional",
      "Controle de acesso por perfil de usuário",
    ],
    tecnologias: ["React", "Next.js", "Tailwind CSS", "TypeScript", "REST API"],
    imagens: [
      "/projetos/gestacom1.png",
      "/projetos/gestacom2.png",
      "/projetos/gestacom3.png"
    ],
  },
  "transporte-escolar": {
    titulo: "Portal de Gestão de Transporte Escolar",
    categoria: "Plataforma & Portal SaaS",
    tag: "Plataforma SaaS",
    subtitulo: "Solução digital para organização de vans, passageiros e comunicação com responsáveis.",
    desafio: "Eliminar o uso de planilhas manuais na gestão de passageiros, controle de pagamentos mensais e definição de itinerários diários.",
    solucao: "Criação de um portal dinâmico onde o gestor acompanha rotas, status de pagamento de cada aluno e envia avisos em tempo real.",
    recursos: [
      "Cadastro e acompanhamento da lista de passageiros por veículo",
      "Gestão de mensalidades e status financeiro dos clientes",
      "Otimização de rotas de coleta e desembarque",
      "Canal direto para comunicados e alertas",
    ],
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imagens: [
      "/projetos/transpescolar1.png",
      "/projetos/transpescolar2.png",
      "/projetos/transpescolar3.png"
    ],
  },
  "cucas-artesanais": {
    titulo: "Cardápio Digital - Cucas Artesanais",
    categoria: "Landing Page & Conversão",
    tag: "MVP / High Conversion",
    subtitulo: "Página focada em alta conversão de vendas e pedidos diretos.",
    desafio: "Apresentar produtos alimentícios de forma extremamente atraente, permitindo que o cliente monte o pedido e envie diretamente para o atendimento no WhatsApp.",
    solucao: "Landing page de altíssima velocidade de carregamento, com cardápio interativo e botão direto de pedido que gera a mensagem formatada para a cozinha.",
    recursos: [
      "Cardápio visual de alta resolução otimizado para celulares",
      "Seletor de sabores e adicionais em tempo real",
      "Integração de envio de pedido montado para o WhatsApp",
      "Carregamento ultra-rápido focado em SEO e conversão",
    ],
    tecnologias: ["Next.js", "Tailwind CSS", "Framer Motion", "WhatsApp API"],
    imagens: [
      "/projetos/henkel1.png",
      "/projetos/henkel2.png"
    ],
  },
};

export default function DetalhesProjeto({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const projeto = dadosProjetos[id];

  if (!projeto) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h1 className="text-3xl font-bold text-emerald-400">Projeto não encontrado</h1>
        <p className="text-slate-400">O case solicitado não está cadastrado ou foi movido.</p>
        <Link href="/" className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-all">
          ← Voltar para o Início
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-4xl space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <span>←</span> Voltar para Todos os Projetos
        </Link>

        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-emerald-400 border border-emerald-500/20">
              {projeto.tag}
            </span>
            <span className="text-xs text-slate-500">{projeto.categoria}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            {projeto.titulo}
          </h1>

          <p className="text-xl text-slate-300 font-light">
            {projeto.subtitulo}
          </p>
        </header>

        {/* 📸 SEÇÃO DE DEMONSTRAÇÃO VISUAL / GALERIA DE PRINTS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            Demonstração Visual do Sistema
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {projeto.imagens && projeto.imagens.length > 0 ? (
              projeto.imagens.map((img: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl"
                >
                  <img 
                    src={img} 
                    alt={`${projeto.titulo} - Print ${idx + 1}`} 
                    className="w-full h-auto object-cover" 
                  />
                </motion.div>
              ))
            ) : (
              <div className="p-12 text-center text-slate-500 rounded-2xl border border-slate-800 bg-slate-900/30">
                Nenhum print cadastrado para este projeto.
              </div>
            )}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-slate-800/80 bg-slate-900/30 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              🎯 O Desafio
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {projeto.desafio}
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-800/80 bg-slate-900/30 space-y-4">
            <h2 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
              🚀 A Solução Desenvolvida
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {projeto.solucao}
            </p>
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Principais Funcionalidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projeto.recursos.map((recurso: string, idx: number) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-800/60 bg-slate-900/20 flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="text-slate-300 text-sm">{recurso}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 pt-4 border-t border-slate-800">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Tecnologias Envolvidas</h3>
          <div className="flex flex-wrap gap-2">
            {projeto.tecnologias.map((tech: string, idx: number) => (
              <span key={idx} className="px-4 py-1.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="p-8 rounded-3xl border border-emerald-500/20 bg-slate-900/50 text-center space-y-4 mt-12">
          <h3 className="text-2xl font-bold text-white">Gostou desse formato de solução?</h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Podemos desenvolver um sistema com este mesmo padrão técnico ajustado para as necessidades do seu negócio.
          </p>
          <a
            href="https://wa.me/5545988359610?text=Ol%C3%A1%2C%20John!%20Gostei%20do%20projeto%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all"
          >
            Falar com John Safadi no WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
# 🌿 ONG Novo Caminho - Site Institucional (Versão SPA)

O **ONG Novo Caminho** é um projeto de site institucional desenvolvido. Focado em acessibilidade, usabilidade e um Design System robusto, ele segue as melhores práticas de desenvolvimento front-end moderno, oferecendo uma navegação fluida e instantânea.

## 🚀 Novidades desta Versão (SPA)

A arquitetura do site foi modernizada de um Multi Page Application (MPA) para um **Single Page Application (SPA)**.

* **Navegação Instantânea:** A navegação entre Início, Projetos e Cadastro agora é feita em memória usando o Roteamento JS (`History API`), eliminando o recarregamento (o "pisca-pisca") da página.
* **Código Centralizado:** O site utiliza apenas um arquivo HTML (`index.html`). O conteúdo das rotas (`/`, `/projetos`, `/cadastro`) é carregado dinamicamente via JavaScript (`templates.js`).
* **Validação Avançada:** A página de Cadastro agora utiliza uma validação programática (em `app.js`) para feedback de erro mais preciso e profissional, incluindo validação de CPF e CEP.

## 🎯 Sobre o Projeto

Este repositório contém o código-fonte do site da ONG Novo Caminho, uma organização dedicada a fortalecer famílias em situação de vulnerabilidade através de apoio social, educação e capacitação profissional.

O objetivo do site é:
1.  **Apresentar a Missão e os Valores** da ONG.
2.  **Divulgar os Projetos Ativos** .
3.  **Facilitar o Cadastro** de famílias, voluntários e doadores.
4.  **Garantir Transparência** e fácil acesso às informações de contato.

## ✨ Principais Funcionalidades

O site é composto por um único arquivo HTML que utiliza um **roteador JavaScript** para exibir as seguintes visualizações:

* **Visualização de Início :** Apresentação da missão, valores, e seção de transparência.
* **Visualização de Projetos :** Layout responsivo de cards (Grid) para exibir os projetos, com uma barra lateral de filtros (simulada).
* **Visualização de Cadastro :** Formulário completo para diferentes tipos de usuários (família, voluntário, doador).
    * **Máscaras de Input:** Utiliza JavaScript para formatar CPF, Telefone e CEP em tempo real.
    * **Validação Programática:** Lógica robusta de validação implementada em JS para campos como CPF e CEP, com feedback visual de erro consistente.
    * **Componente Modal:** Exemplo de uso para exibir a Política de Privacidade.
* **Navegação Sofisticada:** Menu responsivo com **Menu Hambúrguer** para mobile e **Dropdown (Submenu)** para desktop. A navegação entre rotas é instantânea.

## 💻 Especificações Técnicas de Destaque

O código CSS foi construído com base em um **Sistema de Design** rigoroso, garantindo consistência e escalabilidade:

| Especificação | Detalhe |
 Paleta de cores definida, tipografia hierárquica e um sistema de espaçamento modular (base 8px) utilizando variáveis CSS. |
 Implementação de um sistema de **Grid de 12 Colunas** customizado para fácil organização do conteúdo. |
 O layout é totalmente adaptável e foi desenvolvido com **5 Breakpoints** para cobrir diversos tamanhos de tela. |
 Componentes padronizados: **Botões** , **Formulários** , **Alerts**, **Badges** e **Modals**. |
 
 # ONG-NOVO-CAMINHO-3

 **ACESSE NOSSO SITE:**

 [**VERSAO 1**:](https://ongnovocaminho.neocities.org/)
 
 [**VERSAO 2**:](https://luanebonassoli.github.io/ONG-NOVO-CAMINHO-2/)
 
 [**VERSAO 3**:](novocaminho3.neocities.org)

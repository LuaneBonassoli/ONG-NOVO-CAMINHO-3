// assets/js/app.js
// Script principal da aplicação (SPA, Validação, Componentes)

(function() {
  // Executa quando o DOM está pronto
  document.addEventListener('DOMContentLoaded', () => {
    
    const main = document.getElementById('main');
    if (!main) return; // Se não houver <main>, não faz nada

    // Define as rotas e o template correspondente
    const routes = {
      '/': window.AppTemplates.getHome(),
      '/index.html': window.AppTemplates.getHome(),
      '/projetos.html': window.AppTemplates.getProjetos(),
      '/cadastro.html': window.AppTemplates.getCadastro(),
    };


    // ===============================================
    // 1. MÓDULOS DE COMPONENTES
    // ===============================================

    /**
     * Atualiza o ano no rodapé
     */
    const initFooterYear = () => {
      const anoEl = document.getElementById('ano');
      if (anoEl) {
        anoEl.textContent = new Date().getFullYear();
      }
    };

    /**
     * Inicializa a lógica do menu hambúrguer (mobile)
     */
    const initMobileMenu = () => {
      const navToggle = document.querySelector('.nav-toggle');
      const navList = document.getElementById('navList');
      
      if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
          const isOpen = navList.classList.toggle('is-open');
          navToggle.setAttribute('aria-expanded', isOpen);
          navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        });
      }
    };

    /**
     * Inicializa a lógica do Modal (Pol. de Privacidade)
     * O modal em si está no index.html.
     */
    const initModal = () => {
      const modal = document.getElementById('meuModal');
      if (!modal) return;

      const closeButtons = modal.querySelectorAll('.modal-close-btn');
      
      const closeModal = () => {
        if (modal) modal.style.display = 'none';
      };

      closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
      
      modal.addEventListener('click', (e) => {
        // Fecha o modal se clicar no overlay (fundo)
        if (e.target === modal) {
          closeModal();
        }
      });
    };

    /**
     * Anexa o gatilho para ABRIR o modal.
     * Isso precisa ser chamado DEPOIS que o template de cadastro é renderizado.
     */
    const attachModalTrigger = () => {
      const openModalLink = document.getElementById('openPrivacyModal');
      const modal = document.getElementById('meuModal');
      
      if (openModalLink && modal) {
        openModalLink.addEventListener('click', (e) => {
          e.preventDefault();
          modal.style.display = 'flex';
        });
      }
    };

    /**
     * Sistema de verificação de consistência de dados em formulários.
     */
    const initFormValidation = () => {
      const form = document.getElementById('cadastroForm');
      if (!form) return;

      // Define a data máxima de nascimento como hoje
      const nascimento = document.getElementById('nascimento');
      if (nascimento) {
        const hoje = new Date().toISOString().split('T')[0];
        nascimento.setAttribute('max', hoje);
      }

      // Mensagens de erro customizadas
      const errorMessages = {
        nome: 'Por favor, insira seu nome completo (mínimo 3 caracteres).',
        email: 'Por favor, insira um e-mail válido (ex: seu@email.com).',
        cpf: 'Por favor, insira um CPF no formato 000.000.000-00.',
        estado: 'Por favor, selecione um estado.',
        valueMissing: 'Este campo é obrigatório.',
        patternMismatch: 'O formato está incorreto.',
        tooShort: 'O valor é muito curto.',
      };

      /**
       * Mostra ou oculta a mensagem de erro para um campo
       * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input - O campo do formulário
       * @returns {boolean} - Retorna true se o campo for inválido, false se for válido
       */
      const showValidationMessage = (input) => {
        const field = input.closest('.form-field');
        if (!field) return false;
        
        const errorSpan = field.querySelector('.error-message');
        if (!errorSpan) return false;

        let message = '';
        const validity = input.validity;

        if (!validity.valid) {
          input.classList.add('is-invalid');
          errorSpan.classList.add('is-visible');

          if (validity.valueMissing) {
            message = errorMessages[input.name] || errorMessages.valueMissing;
          } else if (validity.typeMismatch) {
            message = errorMessages[input.name] || 'Tipo de dado inválido.';
          } else if (validity.patternMismatch) {
            message = errorMessages[input.name] || errorMessages.patternMismatch;
          } else if (validity.tooShort) {
            message = errorMessages[input.name] || errorMessages.tooShort;
          } else {
            message = input.validationMessage; // Fallback para mensagem do navegador
          }
        } else {
          input.classList.remove('is-invalid');
          errorSpan.classList.remove('is-visible');
        }
        
        errorSpan.textContent = message;
        return !validity.valid; // Retorna true se houver erro
      };
      
      const inputsToValidate = form.querySelectorAll('input[required], textarea[required], select[required], input[pattern]');

      // Valida o formulário no envio
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormInvalid = false;
        
        // Verifica todos os campos
        inputsToValidate.forEach(input => {
          if (showValidationMessage(input)) {
            isFormInvalid = true;
          }
        });
        
        if (!isFormInvalid) {
          // Se o formulário for válido...
          alert('Cadastro recebido! (Em demonstração; implemente envio real ao backend.)');
          form.reset();
          // Limpa as classes de erro
          inputsToValidate.forEach(input => {
             input.classList.remove('is-invalid');
             const errorSpan = input.closest('.form-field')?.querySelector('.error-message');
             if (errorSpan) {
               errorSpan.classList.remove('is-visible');
               errorSpan.textContent = '';
             }
          });
        } else {
          // Se for inválido, foca no primeiro campo com erro
          const firstInvalidField = form.querySelector('.is-invalid');
          if (firstInvalidField) {
            firstInvalidField.focus();
          }
        }
      });
      
      // Opcional: Validar em tempo real quando o usuário sai do campo (on blur)
      inputsToValidate.forEach(input => {
        input.addEventListener('blur', () => showValidationMessage(input));
      });
    };


    // ===============================================
    // 2. ROTEADOR SPA (SINGLE PAGE APPLICATION)
    // ===============================================

    /**
     * Atualiza o link ativo (aria-current) na navegação
     * @param {string} path - O caminho da página (ex: "/projetos.html")
     */
    const updateActiveLink = (path) => {
      document.querySelectorAll('.nav-list a').forEach(link => {
        // Remove 'aria-current' de todos
        link.removeAttribute('aria-current');
        
        // Adiciona se o href corresponder ao caminho
        if (link.getAttribute('href') === path) {
          link.setAttribute('aria-current', 'page');
        }
      });

      // Lógica para destacar o item "Projetos" no menu principal
      // quando um sub-item (no dropdown) está ativo.
      const activeLink = document.querySelector('.nav-list a[aria-current="page"]');
      const dropdownParent = activeLink ? activeLink.closest('.dropdown') : null;
      
      // Remove 'aria-current' de todos os pais de dropdown primeiro
      document.querySelectorAll('.dropdown > a[aria-haspopup="true"]').forEach(link => {
        link.removeAttribute('aria-current');
      });

      // Adiciona 'aria-current' ao pai do dropdown, se houver
      if (dropdownParent) {
        dropdownParent.querySelector('a[aria-haspopup="true"]').setAttribute('aria-current', 'page');
      }
    };

    /**
     * Renderiza o conteúdo da página no <main>
     * @param {string} path - O caminho da página (ex: "/cadastro.html")
     */
    const renderContent = (path) => {
      // Se for a raiz, redireciona para index.html (que é a mesma coisa)
      if (path === '/') path = '/index.html';

      const html = routes[path];
      
      if (!html) {
        // Página não encontrada (404)
        main.innerHTML = '<h1>Erro 404: Página não encontrada</h1><p>Não foi possível encontrar o conteúdo solicitado.</p><a href="/" class="btn">Voltar ao Início</a>';
        updateActiveLink(''); // Nenhum link ativo
        return;
      }
      
      // 1. Injeta o HTML do template no <main>
      main.innerHTML = html;
      
      // 2. Atualiza o link ativo na navegação
      updateActiveLink(path);
      
      // 3. Foca no <main> por acessibilidade
      main.focus();
      
      // 4. Re-inicializa scripts que dependem do conteúdo que acabou de ser carregado
      if (path === '/cadastro.html') {
        initFormValidation(); // Inicializa a validação do formulário
        if (window.initMasks) {
          window.initMasks(); // Re-aplica as máscaras
        }
        attachModalTrigger(); // Anexa o evento de clique para abrir o modal
      }
    };

    /**
     * Navega para uma nova página (usado por cliques nos links)
     * @param {string} path - O caminho para onde navegar
     */
    const navigate = (path) => {
      // Atualiza a URL na barra do navegador sem recarregar a página
      window.history.pushState({}, '', path);
      // Renderiza o novo conteúdo
      renderContent(path);
    };

    // Intercepta cliques nos links
    document.body.addEventListener('click', e => {
      // Verifica se o clique foi em um link <a>
      const link = e.target.closest('a[href]');
      
      // Verifica se é um link interno (tem href) E se é uma rota da nossa SPA
      if (link && routes.hasOwnProperty(link.pathname)) {
        e.preventDefault(); // Impede a navegação padrão (full reload)
        
        // Se for o menu mobile, fecha ele antes de navegar
        const navList = document.getElementById('navList');
        if (navList && navList.classList.contains('is-open')) {
            const navToggle = document.querySelector('.nav-toggle');
            navList.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menu');
        }
        
        navigate(link.pathname); // Navega usando a SPA
      }
    });

    // Lida com os botões "Voltar" e "Avançar" do navegador
    window.addEventListener('popstate', () => {
      renderContent(window.location.pathname);
    });


    // ===============================================
    // 3. INICIALIZAÇÃO DA APLICAÇÃO
    // ===============================================
    
    // Inicializa componentes globais que só rodam uma vez
    initFooterYear();
    initMobileMenu();
    initModal(); // Prepara o modal (lógica de fechar)
    
    // Renderiza o conteúdo da página atual na qual o usuário carregou o site
    // (Ex: se ele acessou /projetos.html diretamente)
    renderContent(window.location.pathname);

  });
})();
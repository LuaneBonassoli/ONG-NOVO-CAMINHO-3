// assets/js/templates.js

// Este arquivo armazena o HTML de cada "página" como uma função de template.
// Isso permite que o app.js carregue o conteúdo dinamicamente (SPA).

window.AppTemplates = {
  /**
   * Template da Página Inicial (index.html)
   */
  getHome: () => {
    return `
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-texto">
          <h1 id="hero-title">ONG Novo Caminho</h1>
          <p>Promovendo apoio social e educação para famílias em vulnerabilidade — juntos, ajudamos famílias a recomeçar.</p>
          <p class="hero-botoes"><a class="btn" href="projetos.html">Conheça nossos projetos</a> <a class="btn outline" href="cadastro.html">Quero ajudar</a></p>
        </div>
        <img src="assets/img/hero.jpg" alt="Voluntários e famílias em atividade comunitária" loading="lazy" />
      </section>

      <section aria-labelledby="sobre-title" class="sobre grid-12">
        <div class="col-span-full col-md-span-8">
          <h2 id="sobre-title">Nossa missão</h2>
          <p>A missão da ONG Novo Caminho é fortalecer a autonomia de famílias em vulnerabilidade por meio de apoio material, educação e capacitação, criando possibilities reais de transformação social.</p>
          <ul>
            <li>Missão: Fortalecer famílias com ações sociais e educacionais.</li>
            <li>Visão: Comunidades mais autônomas e com oportunidades reais.</li>
            <li>Valores: Dignidade, transparência, solidariedade e educação.</li>
          </ul>
        </div>
        <div class="col-span-full col-md-span-4">
          <h5>Categorias</h5>
          <p>
            <span class="badge badge-primary">Educação</span>
            <span class="badge badge-secondary">Social</span>
            <span class="badge badge-success">Capacitação</span>
          </p>
        </div>
      </section>

      <section aria-labelledby="impacto-title" class="impacto">
        <h2 id="impacto-title">O que fazemos</h2>
        <p>Apoiamos famílias com cestas básicas, cursos de capacitação, reforço escolar, orientação profissional e acompanhamento familiar.</p>
        <dl>
          <dt>Famílias atendidas</dt><dd>— Familia da Lulu e Isaque</dd>
          
        </dl>
      </section>

      <section aria-labelledby="transparencia-title" class="transparencia" id="transparencia">
        <h2 id="transparencia-title">Transparência</h2>
        <div class="alert alert-success">
          Aqui voce fica de olho em nossos relatorios
        </div>
        <p>Publicamos relatórios de prestação de contas e resultados dos projetos para doadores e comunidade.</p>
        <ul>
          <li><a href="docs/relatorio_transparencia.pdf">Relatório anual (PDF)</a></li>
        </ul>
      </section>
    `;
  },

  /**
   * Template da Página de Projetos (projetos.html)
   */
  getProjetos: () => {
    return `
      <article class="layout-projetos" aria-labelledby="projetos-title">
      
        <div class="projetos-conteudo">
          <h1 id="projetos-title">Nossos Projetos de Transformação Social</h1>
          <p>Acreditamos que a educação e a autonomia são o novo caminho. Conheça nossos programas em execução:</p>

          <section class="lista-projetos" aria-label="Lista de projetos ativos">
            
            <div class="projeto" role="article" aria-labelledby="proj1-title">
              <img src="assets/img/projetos/proj1.jpg" alt="Crianças em atividade de reforço escolar" loading="lazy" />
              <div class="projeto-texto">
                <h2 id="proj1-title">Raízes do Amanhã: Reforço e Cestas</h2>
                <p>Programa focado em garantir a permanência escolar. Oferece reforço multidisciplinar (matemática, português), oficinas de arte, e acompanha o desenvolvimento nutricional, garantindo **cestas básicas** mensais para a família.</p>
                
                <p><strong>Status:</strong> <span class="badge badge-success">Em execução</span></p>
                <p><strong>Localidade:</strong> Bairro Esperança</p>
              </div>
              <p class="projeto-links">
                <a class="btn" href="cadastro.html">Quero ser voluntário</a> 
                <a class="btn outline" href="#">Doar para este projeto</a>
              </p>
            </div>

            <div class="projeto" role="article" aria-labelledby="proj2-title">
              <img src="assets/img/projetos/proj2.jpg" alt="Curso de capacitação profissional em grupo" loading="lazy" />
              <div class="projeto-texto">
                <h2 id="proj2-title">Capacita Família: Autonomia e Renda</h2>
                <p>Oferece cursos profissionalizantes de curta e média duração (ex: costura criativa, informática básica, culinária e empreendedorismo). O objetivo é promover a **autonomia financeira** dos adultos e jovens da família.</p>
                
                <p><strong>Status:</strong> <span class="badge badge-primary">Inscrições abertas</span></p>
                <p><strong>Localidade:</strong> Centro Comunitário</p>
              </div>
              <p class="projeto-links">
                <a class="btn" href="cadastro.html">Inscrever uma família</a>
              </p>
            </div>
            
            <div class="projeto" role="article" aria-labelledby="proj3-title">
              <img src="assets/img/projetos/proj3.jpg" alt="Profissional dando orientação jurídica" loading="lazy" />
              <div class="projeto-texto">
                <h2 id="proj3-title">Acolher Legal: Orientação Social</h2>
                <p>Fornece apoio jurídico e social básico (documentação, acesso a programas governamentais, orientação familiar) através de uma rede de advogados e assistentes sociais voluntários. Foco em direitos e dignidade.</p>
                
                <p><strong>Status:</strong> <span class="badge badge-danger">Precisa de voluntários!</span></p>
                <p><strong>Localidade:</strong> Sede da ONG</p>
              </div>
              <p class="projeto-links">
                <a class="btn outline" href="cadastro.html">Patrocine este projeto</a>
              </p>
            </div>
            
          </section>
        </div>

        <aside aria-labelledby="filtros-title" class="filtros">
          <h3 id="filtros-title">Filtrar por</h3>
          <form method="get" action="#" aria-label="Filtro de projetos">
            <label for="categoria">Categoria</label>
            <select name="categoria" id="categoria">
              <option value="">Todas</option>
              <option>Educação</option>
              <option>Capacitação e Renda</option>
              <option>Assistência Social</option>
            </select>
            
            <label for="localidade">Localidade</label>
            <input type="search" name="localidade" id="localidade" placeholder="Cidade, Bairro" />
            
            <button class="btn" type="submit">Filtrar</button>
          </form>
        </aside>
      </article>
    `;
  },

  /**
   * Template da Página de Cadastro (cadastro.html)
   * HTML MODIFICADO para incluir wrappers .form-field e spans .error-message
   * para o novo sistema de validação.
   */
  getCadastro: () => {
    return `
      <div class="alert alert-info" role="alert">
        <strong>Aviso:</strong> Preencha os campos obrigatórios (*) com atenção.
      </div>

      <div class="grid-12">
        <div class="col-span-full col-md-span-8">
          <h1>Cadastro — Família / Voluntário / Doador</h1>
          <p>O cadastro permite que a ONG acompanhe as necessidades da família e convide para projetos.</p>

          <form id="cadastroForm" action="#" method="post" novalidate>
            <fieldset>
              <legend>Dados pessoais</legend>

              <div class="form-field full-width">
                <label for="nome">Nome completo <span aria-hidden="true">*</span></label>
                <input id="nome" name="nome" type="text" required minlength="3" maxlength="100" placeholder="Nome completo" />
                <span class="error-message" aria-live="polite"></span>
              </div>

              <div class="form-field full-width">
                <label for="email">E-mail <span aria-hidden="true">*</span></label>
                <input id="email" name="email" type="email" required placeholder="seu@email.com" />
                <span class="error-message" aria-live="polite"></span>
              </div>

              <div class="form-field">
                <label for="cpf">CPF <span aria-hidden="true">*</span></label>
                <input id="cpf" name="cpf" type="text" inputmode="numeric" autocomplete="off" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" />
                <span class="error-message" aria-live="polite"></span>
              </div>

              <div class="form-field">
                <label for="telefone">Telefone</label>
                <input id="telefone" name="telefone" type="tel" inputmode="tel" placeholder="(00) 00000-0000" />
                <span class="error-message" aria-live="polite"></span>
              </div>

              <div class="form-field">
                <label for="nascimento">Data de nascimento</label>
                <input id="nascimento" name="nascimento" type="date" max="" />
                <span class="error-message" aria-live="polite"></span>
              </div>
            </fieldset>

            <fieldset>
              <legend>Endereço e família</legend>

              <div class="form-field">
                <label for="cep">CEP</label>
                <input id="cep" name="cep" type="text" inputmode="numeric" placeholder="00000-000" />
                <span class="error-message" aria-live="polite"></span>
              </div>
              
              <div class="full-width"></div>
              
              <div class="form-field full-width">
                <label for="endereco">Endereço</label>
                <input id="endereco" name="endereco" type="text" placeholder="Rua, número, complemento" />
                <span class="error-message" aria-live="polite"></span>
              </div>

              <div class="form-field">
                <label for="cidade">Cidade</label>
                <input id="cidade" name="cidade" type="text" />
                <span class="error-message" aria-live="polite"></span>
              </div>

              <div class="form-field">
                <label for="estado">Estado</label>
                <select id="estado" name="estado" required>
                  <option value="">Selecione</option>
                  <option>SP</option>
                  <option>RJ</option>
                  <option>MG</option>
                </select>
                <span class="error-message" aria-live="polite"></span>
              </div>

              <div class="form-field full-width">
                <label for="familia_membros">Número de membros na família</label>
                <input id="familia_membros" name="familia_membros" type="number" min="1" max="30" />
                <span class="error-message" aria-live="polite"></span>
              </div>
            </fieldset>

            <fieldset class="full-width">
              <legend>Interesses e necessidades</legend>

              <div class="checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" name="interesse" value="voluntariado" /> Quero ser voluntário
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" name="interesse" value="doacoes" /> Tenho interesse em doar
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" name="interesse" value="receber_ajuda" /> Quero receber apoio (cestas, kits, acompanhamento)
                </label>
              </div>

              <div class="form-field full-width">
                <label for="mensagem">Mensagem / Observações</label>
                <textarea id="mensagem" name="mensagem" rows="5" maxlength="800" placeholder="Conte-nos a sua situação ou necessidades"></textarea>
                <span class="error-message" aria-live="polite"></span>
              </div>
            </fieldset>

            <div class="form-actions full-width">
              <button type="submit" class="btn">Enviar cadastro</button>
              <button type="reset" class="btn outline">Limpar</button>
              <button type="button" class="btn" disabled>Botão Desabilitado</button>
            </div>

            <p class="obs full-width"><small>Ao enviar, você concorda com a nossa <a href="#" id="openPrivacyModal">política de privacidade</a> e com o uso dos dados para fins de atendimento social.</small></p>
          </form>
          
        </div>
      </div>
    `;
  }
};
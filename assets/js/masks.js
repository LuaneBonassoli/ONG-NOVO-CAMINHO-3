// assets/js/masks.js — simples, sem dependências
// MODIFICADO: Expondo 'initMasks' na window para ser chamado pela SPA

(function () {
  function setCursorEnd(el) {
    if (el.setSelectionRange) {
      const len = el.value.length;
      el.setSelectionRange(len, len);
    }
  }

  function onlyDigits(value) {
    return value.replace(/\D/g, '');
  }

  // CPF mask: 000.000.000-00
  function cpfMask(value) {
    const v = onlyDigits(value).slice(0, 11);
    return v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})?/, function (_, a, b, c, d) {
      return (a ? a : '') + (b ? '.' + b : '') + (c ? '.' + c : '') + (d ? '-' + d : '');
    });
  }

  // Phone mask: (00) 00000-0000 or (00) 0000-0000
  function phoneMask(value) {
    const v = onlyDigits(value).slice(0, 11);
    if (v.length <= 10) {
      return v.replace(/(\d{2})(\d{4})(\d{0,4})/, function (_, a, b, c) {
        return (a ? '(' + a + ') ' : '') + (b ? b : '') + (c ? '-' + c : '');
      });
    } else {
      return v.replace(/(\d{2})(\d{5})(\d{0,4})/, function (_, a, b, c) {
        return '(' + a + ') ' + b + (c ? '-' + c : '');
      });
    }
  }

  // CEP mask: 00000-000
  function cepMask(value) {
    const v = onlyDigits(value).slice(0,8);
    return v.replace(/(\d{5})(\d{0,3})/, function (_, a, b) { return a + (b ? '-' + b : ''); });
  }

  function attachMask(selector, maskFn) {
    // Busca o elemento dentro do <main> que pode ter sido recarregado
    const main = document.getElementById('main');
    if (!main) return;
    
    const el = main.querySelector(selector);
    if (!el) return;
    
    // Remove listener antigo para evitar duplicatas (garantia)
    el.removeEventListener('input', maskHandler);
    // Adiciona novo listener
    el.addEventListener('input', maskHandler, false);
    
    // Handler nomeado para ser removível
    function maskHandler(e) {
      const cur = el.selectionStart;
      const prevLen = el.value.length;
      el.value = maskFn(el.value || '');
      const newLen = el.value.length;
      if (newLen > prevLen) setCursorEnd(el);
    }
  }

  // Função de inicialização que será chamada
  function initMasks() {
    attachMask('#cpf', cpfMask);
    attachMask('#telefone', phoneMask);
    attachMask('#cep', cepMask);
  }
  
  // Anexa na carga inicial da página
  document.addEventListener('DOMContentLoaded', initMasks, false);
  
  // Expõe para ser chamada pelo roteador SPA
  window.initMasks = initMasks;
  
})();
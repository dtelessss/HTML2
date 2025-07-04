document.addEventListener('DOMContentLoaded', function() {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');
  const closeBtn = document.querySelector('.close-menu-btn');
  
  // Abrir/fechar com hambúrguer
  hamMenu.addEventListener('click', function() {
    toggleMenu();
  });
  
  // Fechar com botão X
  closeBtn.addEventListener('click', function() {
    closeMenu();
  });

  // Fechar ao clicar em um link do menu e mostrar a seção correspondente
  const menuLinks = document.querySelectorAll('.off-screen-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      closeMenu();
      
      const targetId = this.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });

  function toggleMenu() {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
  }

  function closeMenu() {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
  }

  function showSection(sectionId) {
    // Esconde todas as seções
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    
    // Mostra a seção correspondente
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  }
});

document.querySelector('.login-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Validação simples
  if(username.trim() === '' || password.trim() === '') {
    alert('Por favor, preencha todos os campos');
    return;
  }
  
  // Aqui você pode adicionar a lógica de autenticação real
  console.log('Tentativa de login:', { username, password });
  
  // Simulando login bem-sucedido
  alert('Login realizado com sucesso!');
  this.reset();
});

// Calculadora IMC
document.getElementById('calcular-imc')?.addEventListener('click', function() {
  const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertendo cm para m
  const peso = parseFloat(document.getElementById('peso').value);
  
  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    alert('Insira valores válidos para altura e peso');
    return;
  }
  
  const imc = peso / (altura * altura);
  const resultado = document.getElementById('valor-imc');
  const classificacao = document.getElementById('classificacao');
  
  resultado.textContent = `Seu IMC: ${imc.toFixed(2)}`;
  
  if (imc < 18.5) {
    classificacao.textContent = 'Classificação: Abaixo do peso';
    classificacao.style.color = '#FFA500'; // Laranja
  } else if (imc < 25) {
    classificacao.textContent = 'Classificação: Peso normal';
    classificacao.style.color = '#2ECC71'; // Verde
  } else if (imc < 30) {
    classificacao.textContent = 'Classificação: Sobrepeso';
    classificacao.style.color = '#F1C40F'; // Amarelo
  } else if (imc < 35) {
    classificacao.textContent = 'Classificação: Obesidade Grau I';
    classificacao.style.color = '#E67E22'; // Laranja escuro
  } else if (imc < 40) {
    classificacao.textContent = 'Classificação: Obesidade Grau II';
    classificacao.style.color = '#E74C3C'; // Vermelho
  } else {
    classificacao.textContent = 'Classificação: Obesidade Grau III';
    classificacao.style.color = '#C0392B'; // Vermelho escuro
  }
});

document.querySelectorAll('.plano-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const plano = this.closest('.plano-card').querySelector('h3').textContent;
    const preco = this.closest('.plano-card').querySelector('.preco').textContent;
    
    console.log(`Plano selecionado: ${plano} - ${preco}`);
    
    alert(`Você selecionou o plano ${plano} por ${preco}\n\n(Esta é uma demonstração. Em um site real, você seria redirecionado para o checkout)`);
  });
});
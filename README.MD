# Formulário de Pagamento

Este repositório contém um projeto de formulário de pagamento, desenvolvido para facilitar a inserção de dados de pagamento de forma segura e eficiente.

## Visão Geral

O **Formulário de Pagamento** é uma aplicação web simples, projetada para coletar informações de pagamento dos usuários, como número do cartão de crédito, data de validade, código de segurança (CVV), e nome do titular do cartão. O objetivo deste projeto é fornecer uma interface amigável e segura para a entrada de dados financeiros.

## Funcionalidades

**Validação de Dados:** O formulário inclui validação básica para garantir que os dados inseridos estejam no formato correto.

**Segurança:** Os dados sensíveis são tratados de forma segura, com foco na proteção das informações do usuário.

**Design Responsivo:** A interface do usuário é responsiva e se adapta a diferentes tamanhos de tela, oferecendo uma boa experiência tanto em dispositivos móveis quanto em desktops.

## Estrutura do Projeto

```javascript
Formulario-Pagamento/
│
├── index.html          # Estrutura principal do formulário
├── styles/
│   └── styles.css      # Estilos CSS para o formulário
└── scripts/
    └── script.js       # Validação e funcionalidade do formulário

```

## Tecnologias Utilizadas

**HTML5:** Estruturação do conteúdo do formulário.

**CSS3:** Estilização da interface do usuário.

**JavaScript:** Validação de dados e funcionalidades dinâmicas.

## Como Utilizar

### Localmente

1. Clone o repositório: 

   ```bash
   git clone https://github.com/nicollaseu/Formulario-Pagamento.git
   ```

2. Abra o arquivo `index.html` no seu navegador: 

   ```bash
   cd Formulario-Pagamento
   open index.html
   ```

3. **Preencha o formulário com os dados de pagamento:**

   - Número do cartão de crédito
   - Data de validade
   - Código de segurança (CVV)
   - Nome do titular do cartão

4. **Envie o formulário para validação:**

   - O JavaScript embutido irá validar os dados e alertar sobre qualquer erro.

## Online

Você também pode acessar e utilizar o formulário diretamente online, através do Vercel: [Document (formulario-pagamento.vercel.app)](https://formulario-pagamento.vercel.app/)
# Currículo Vitae Interativo - Leandro Yata 📄✨

Este é um projeto acadêmico de desenvolvimento web voltado para a prática de desenvolvimento moderno usando React, React Router e Tailwind CSS v4.

O projeto consiste em um mini-currículo online responsivo contendo informações acadêmicas, habilidades, dados de contato e recursos interativos, estruturado como uma SPA (Single Page Application).

---

## 🚀 Funcionalidades

### 1. Estruturação Moderna em React
*   Desenvolvido utilizando componentes reutilizáveis em React 19.
*   Navegação por rotas internas via `HashRouter` (React Router) para evitar erros de 404 no GitHub Pages.

### 2. Design Moderno e Responsivo (Tailwind CSS v4)
*   Visual construído com Tailwind CSS v4 usando a nova sintaxe baseada em CSS.
*   Layout responsivo adaptável a dispositivos móveis (smartphones, tablets) e desktops, com design moderno e efeito glassmorphism.
*   Efeitos dinâmicos de *hover*, transições de tema suaves e botões interativos.

### 3. Interatividade e Estado (React Context API)
*   **Alternador de Tema (Modo Claro/Escuro):** Gerenciado globalmente com a Context API (`ThemeContext`), alterando a classe `dark` no root HTML e salvando as preferências no `localStorage` do navegador para persistência.
*   **Adição Dinâmica de Habilidades:** Na aba de Habilidades, o usuário pode digitar uma nova habilidade e adicioná-la dinamicamente na lista atual por meio de cliques no botão ou pressionando a tecla `Enter`.
*   **Feedback em Tempo Real:** Enquanto o usuário digita uma habilidade, um indicador exibe em tempo real a quantidade de caracteres inseridos (limite de 50 caracteres).
*   **Destaque Dinâmico de Itens:** Ao clicar em qualquer habilidade da lista (existente ou recém-criada), o item altera seu estilo visual, destacando-se dos demais.
*   **Persistência de Habilidades:** Habilidades adicionadas pelo usuário são armazenadas no `localStorage` para persistirem após recarregar a página.

---

## 📁 Estrutura de Arquivos

*   `src/components/Navbar.jsx` — Menu de navegação responsivo com efeito glassmorphism e alternador de tema.
*   `src/components/Footer.jsx` — Rodapé do portfólio.
*   `src/context/ThemeContext.jsx` — Contexto para gerenciamento do tema escuro/claro.
*   `src/pages/Home.jsx` — Página inicial de boas-vindas ao currículo com cards de acesso rápido.
*   `src/pages/About.jsx` — Detalhes pessoais e link para download do currículo em PDF.
*   `src/pages/Education.jsx` — Linha do tempo da trajetória acadêmica na UFRB.
*   `src/pages/Skills.jsx` — Lista de habilidades técnicas, formulário e controle de estado para novos itens.
*   `src/pages/Contact.jsx` — Canais de comunicação (e-mail, GitHub e formulário de mensagem).
*   `src/index.css` — Estilização global com Tailwind CSS v4 e configurações de tema.

---

## 🛠️ Como Executar o Projeto Localmente

1. Abra o terminal na pasta do projeto.
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse o endereço no seu navegador:
   👉 `http://localhost:5173/atividadesufrb/`

---

## 🎓 Contexto Acadêmico

Este projeto foi construído como parte das atividades da **Universidade Federal do Recôncavo da Bahia (UFRB)** para o curso de **Licenciatura em Computação (UFRB-FSA)**.

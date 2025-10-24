🔐 Gerador de Senhas Aleatórias (Expo/React Native)

Este é um aplicativo móvel simples e eficiente construído com React Native e Expo para gerar senhas aleatórias e seguras. O principal recurso de usabilidade é a cópia instantânea da senha gerada para a área de transferência do seu dispositivo com um único toque.

✨ Recursos

- Geração Aleatória: Cria senhas complexas e aleatórias.

- Cópia Instantânea (Ctrl+C Mobile): Copia automaticamente a senha gerada para a área de transferência com um toque no botão, pronto para ser colado em qualquer lugar.

- Interface Limpa: Design simples e focado na funcionalidade.

🛠️ Tecnologias Utilizadas

- React Native (Desenvolvimento móvel)

- Expo (Framework e ferramentas para desenvolvimento)

- TypeScript (.ts e .tsx para tipagem estática)

- expo-clipboard (Para a funcionalidade de cópia)

🚀 Como Executar o Projeto

Para rodar este projeto localmente, você precisará ter o Node.js e o Expo CLI instalados.

Pré-requisitos

1. Node.js: Certifique-se de ter o Node.js instalado (versão LTS recomendada).

2. Expo Go App: Instale o aplicativo Expo Go no seu smartphone (disponível na App Store e Google Play).

3. Expo CLI (Globalmente): Instale o cliente de linha de comando do Expo globalmente:

npm install -g expo-cli


Instalação e Execução

1. Clone o repositório:

git clone [(https://github.com/Daniel-Mattos/Senha-Batman.git)]
cd Senha-Batman


2. Instale as dependências:

npm install
# ou yarn install


3. Inicie o aplicativo:

expo start


Após executar o comando, o Metro Bundler será iniciado. Você pode abrir o aplicativo de três maneiras:

- QR Code (Recomendado): Use o aplicativo Expo Go no seu celular para escanear o QR Code exibido no seu terminal ou no navegador.

- Android: Pressione a no terminal.

- iOS: Pressione i no terminal.

📄 Uso

1. Gerar Senha: Clique no botão principal "Gerar Senha" (ou similar) para criar uma nova senha aleatória.

2. Copiar: Imediatamente após a geração, a senha é exibida e o app copia ela automaticamente (ou você pode clicar em um botão dedicado).

3. Colar: Vá para o campo onde deseja usar a senha (por exemplo, um formulário de login ou cadastro) e use o recurso de colar do seu teclado móvel.
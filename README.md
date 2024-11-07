# RoboLab - Blockly Code Generator

Este projeto é uma página web interativa desenvolvida para facilitar o aprendizado de robótica e programação através de uma interface visual baseada em blocos, utilizando a biblioteca [Blockly](https://developers.google.com/blockly). A página permite que os usuários programem comandos de forma intuitiva para controlar um carrinho robótico, com feedback em tempo real dos sensores integrados ao sistema.

## Tecnologias Utilizadas

- **HTML/CSS**: Estrutura e estilização da página.
- **JavaScript**: Lógica e interatividade da aplicação.
- **Blockly**: Biblioteca de blocos visuais da Google, que possibilita a criação de uma interface de programação simplificada para iniciantes.
- **Firebase**: Utilizado para comunicação em tempo real com o carrinho robótico.

## Funcionalidades Principais

- **Interface de Programação por Blocos**: Usuários podem criar scripts arrastando e soltando blocos que representam comandos como movimentação, controle de LEDs, leitura de sensores e execução de loops.
- **Modularidade**: O projeto é organizado em módulos (LEDs, Motores, Sensores, etc.), com cada módulo contendo níveis e desafios específicos para o aprendizado gradual.
- **Feedback em Tempo Real**: Dados de sensores e o status do robô são exibidos na interface, permitindo que os usuários acompanhem as respostas do carrinho em tempo real.
- **Compatibilidade Multiplataforma**: A interface foi projetada para ser responsiva e acessível em dispositivos móveis e desktops.

## Estrutura do Projeto

- `index.html`: Estrutura HTML principal da página e configuração do Firebase
- `style.css`: Estilos e layout da página, incluindo a aparência dos botões e a disposição dos elementos
- `app.js`: Gerenciamento dos módulos e níveis do aplicativo
- `app_modulos.js`: Funções para controle dos módulos e navegação entre eles
- `blocos.js`: Definição dos blocos personalizados para o Blockly, incluindo blocos de controle de LEDs, sensores, e movimento.
- `level.js`: Configuração dos níveis e implementação de funções para interação com os sensores e o Firebase.
- `main.js`: Inicialização do aplicativo e dos módulos, definição das cores e organização dos blocos para cada nível

## Acesso
O projeto está hospedado no Firebase Hosting e pode ser acessado em carrinhoeducativo.web.app

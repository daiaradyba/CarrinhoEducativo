let currentStatus = "Carregando status...";  // Estado inicial
let cor_fundo_blocky;




class Level {
    constructor(name, xmlWorkspaceKey, toolboxXml,app,instructionsImg,color) {
      this.name = name;
      this.xmlWorkspaceKey = xmlWorkspaceKey;
      this.toolboxXml = toolboxXml;
      this.workspace = null; // Blockly workspace será inicializado depois
      this.app = app;
      this.instructionsImg = instructionsImg;
      this.pollingInterval = null;  // Referência ao intervalo de polling
      this.color = color;
    
    }

    startPollingStatus() {
      this.pollingInterval = setInterval(() => {
        // Atualizando o status do comando
        firebase.database().ref('/result/message').once('value').then((snapshot) => {
            const statusDisplay = document.getElementById('statusDisplay');
            if (statusDisplay) {
                statusDisplay.innerText = snapshot.val() || "Nenhuma informação disponível";
            }
          //  console.log("Status atualizado: ", snapshot.val());
        }).catch((error) => {
            console.error("Erro ao buscar dados do Firebase:", error);
            if (statusDisplay) {
                statusDisplay.innerText = "Erro ao buscar status do carrinho.";
            }
        });
    
        // Atualizando dados dos sensores
        for (let i = 1; i <= 6; i++) {
          //console.log("for "+i);
            firebase.database().ref(`/sensores/sensor${i}`).once('value').then((snapshot) => {
                const sensorDisplay = document.getElementById(`sensor${i}Display`);
                //console.log("sensor Display "+sensorDisplay);
                if (sensorDisplay) {
                    sensorDisplay.innerText = `Sensor ${i}: ${snapshot.val() || "Dados não disponíveis"}`;
                }
            }).catch((error) => {
                console.error(`Erro ao buscar dados do sensor ${i}:`, error);
                const sensorDisplay = document.getElementById(`sensor${i}Display`);
                if (sensorDisplay) {
                    sensorDisplay.innerText = `Sensor ${i}: Erro de comunicação`;
                }
            });
        }
      }, 1000); // Atualiza a cada 2 segundos
    }
  stopPollingStatus() {
      if (this.pollingInterval) {
          clearInterval(this.pollingInterval);
          this.pollingInterval = null;
          console.log("Polling parado.");
      }
  }
  
    // Método para inicializar o Blockly workspace
    initBlockly() {
      var myTheme = Blockly.Theme.defineTheme('myTheme', {
        'base': Blockly.Themes.Classic,
        'blockStyles': {
          "logic_blocks": {
            "colourPrimary": "#b97a57",
            "colourSecondary": "#874d36",
            "colourTertiary": "#c78869"
          },
          "loop_blocks": {
            "colourPrimary": "#5ba58c",
            "colourSecondary": "#467674",
            "colourTertiary": "#62c193"
          },
          // Adicione mais estilos de blocos conforme necessário
        },
        'categoryStyles': {
          "list_category": {
            "colour": "#745ba5"
          },
          // Adicione mais estilos de categoria conforme necessário
        },
        'componentStyles': {
          'workspaceBackgroundColour': cor_fundo_blocky,
          'toolboxBackgroundColour': '#fff',
          'toolboxForegroundColour': '#000',
          'flyoutBackgroundColour': '#444',
          'flyoutForegroundColour': '#ccc',
          'flyoutOpacity': 1,
          'scrollbarColour': '#797979',
          'scrollbarOpacity': 1,
          'insertionMarkerColour': '#000',
          'insertionMarkerOpacity': 0.3
        }
      });
      
      const toolbox = document.getElementById('toolbox');
      console.log(toolbox);
      toolbox.innerHTML = this.toolboxXml;
      
      this.workspace = Blockly.inject('blocklyDiv', { theme: myTheme, toolbox: toolbox });
  
      // Carrega o estado anterior se disponível
      const xmlText = localStorage.getItem(this.xmlWorkspaceKey);
      if (xmlText) {
        const xml = Blockly.utils.xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(xml, this.workspace);
      }
    }
      /* // Renderiza instruções.
      render(appContainer) {
        
       
    

    }
 */
//Antigo Render
render(appContainer) {
    // Primeiro, limpa o conteúdo atual do appContainer
    appContainer.innerHTML = '';

      cor_fundo_blocky = `hsl(${this.color.h}, ${this.color.s}%, ${this.color.l}%)`;

   this.atualizaVariaveis();

   const topo = document.createElement('div');
   topo.className = 'topo';

   const sensores = document.createElement('div');
   sensores.className = 'topo';
   

    // Cria o container das instruções e o botão de iniciar
    const instructionsContainer = document.createElement('div');

    instructionsContainer.className = 'instructions-container';
    instructionsContainer.innerHTML = ` <button className="button start-level-btn" id="b_Start">Start Level</button><img src="${this.instructionsImg}" alt="Instructions" class="instructions-img">`;



    // Adiciona o container de instruções e o botão ao appContainer
   
    appContainer.appendChild(instructionsContainer);
    const buttonStart = document.getElementById('b_Start');
    buttonStart.className = 'pushable';

     // Cria o span para a sombra
     const shadow = document.createElement('span');
     shadow.className = 'shadow';
 
     // Cria o span para a borda
     const edge = document.createElement('span');
     edge.className = 'edge';
 
     // Cria o span para a frente (parte visível com texto)
     const front = document.createElement('span');
     front.className = 'front';
     front.textContent = `Iniciar ${this.name}`

     const hslColor = this.color; // Objeto { h, s, l }

     const hslCor_Fraca = { h: 60, s: 96, l: 79 };
     if(hslColor.h == hslCor_Fraca.h){
         console.log("entrei");
         front.style.color = "black"; //troca cor da fonte
     }

     const shadowColor = calculateShadowColor(hslColor); // Calcula a cor da sombra

     const gradientColors = generateGradientColors(hslColor);

     // Aplicar gradiente no estilo do `.edge`
     edge.style.background = `linear-gradient(
         to right,
         ${gradientColors.darker} 0%,
         ${gradientColors.darkerCenter} 8%,
         ${gradientColors.lighterCenter} 92%,
         ${gradientColors.lightest} 100%
     )`;
     edge.style.height = '80%';
     edge.style.marginTop = "15px";

     // Aplica a cor ao front e a sombra ao shadow
     front.style.backgroundColor = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`;
     shadow.style.background = `hsl(${shadowColor.h}, ${shadowColor.s}%, ${shadowColor.l}%)`;

 
     // Anexa os spans ao botão
     buttonStart.appendChild(shadow);
     buttonStart.appendChild(edge);
     buttonStart.appendChild(front);

  

    // Cria e configura os outros elementos (Blockly, Menu, Reset, Show Code)
    // mas os deixa ocultos inicialmente
    const blocklyDiv = document.createElement('div');
    blocklyDiv.id = 'blocklyDiv';
    blocklyDiv.style.display = 'none'; // Oculta inicialmente

    const buttonMenu = document.createElement('button');
    buttonMenu.className = 'return';
    buttonMenu.style.display = 'none'; // Oculta inicialmente

     // Cria o elemento SVG
     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
     svg.setAttribute('viewBox', '0 0 384 512');
     svg.classList.add('svgIcon');

     // Cria o elemento path para o SVG
     const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
     path.setAttribute('d', 'M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z');

     // Adiciona o path ao SVG
     svg.appendChild(path);

     buttonMenu.appendChild(svg);

     buttonMenu.style.backgroundColor = `hsl(${this.color.h}, ${this.color.s}%, ${this.color.l}%)`;

     const hslCor_Fracaa = { h: 60, s: 96, l: 79 };
     if(this.color.h == hslCor_Fracaa.h){
      buttonMenu.style.setProperty('--before-text-color', 'black');
      buttonMenu.style.setProperty('--svgIcon-fill-color', 'black');
       
   
     }
     else{
      buttonMenu.style.setProperty('--before-text-color', 'white');
      buttonMenu.style.setProperty('--svgIcon-fill-color', 'white');
     
     }

     // Cria o span para a sombra
     const shadow_menu = document.createElement('span');
     shadow_menu.className = 'shadow';
 
     // Cria o span para a borda
     const edge_menu = document.createElement('span');
     edge_menu.className = 'edge';
 
     // Cria o span para a frente (parte visível com texto)
     const front_menu = document.createElement('span');
     front_menu.className = 'front';
     front_menu.textContent = `Menu`


     if(hslColor.h == hslCor_Fraca.h){
         console.log("entrei");
         front_menu.style.color = "black"; //troca cor da fonte
     }

     const shadowColor_menu = calculateShadowColor(hslColor); // Calcula a cor da sombra

     const gradientColors_menu = generateGradientColors(hslColor);

     // Aplicar gradiente no estilo do `.edge`
     edge_menu.style.background = `linear-gradient(
         to right,
         ${gradientColors.darker} 0%,
         ${gradientColors.darkerCenter} 8%,
         ${gradientColors.lighterCenter} 92%,
         ${gradientColors.lightest} 100%
     )`;
     edge_menu.style.height = '80%';
     edge_menu.style.marginTop = "15px";

     // Aplica a cor ao front e a sombra ao shadow
     front_menu.style.backgroundColor = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`;
     shadow_menu.style.background = `hsl(${shadowColor.h}, ${shadowColor.s}%, ${shadowColor.l}%)`;


    const buttonRessetarLevel = document.createElement('button');
    //buttonRessetarLevel.innerText = 'Ressetar Level';
    buttonRessetarLevel.className = 'pushable';
    buttonRessetarLevel.style.display = 'none'; // Oculta inicialmente

     // Cria o span para a sombra
     const shadow_resetar = document.createElement('span');
     shadow_resetar.className = 'shadow';
 
     // Cria o span para a borda
     const edge_resetar = document.createElement('span');
     edge_resetar.className = 'edge';
 
     // Cria o span para a frente (parte visível com texto)
     const front_resetar = document.createElement('span');
     front_resetar.className = 'front';
     front_resetar.textContent = `Ressetar Level`


     if(hslColor.h == hslCor_Fraca.h){
         console.log("entrei");
         front_resetar.style.color = "black"; //troca cor da fonte
     }

     const shadowColor_resetar = calculateShadowColor(hslColor); // Calcula a cor da sombra

     const gradientColors_resetar = generateGradientColors(hslColor);

     // Aplicar gradiente no estilo do `.edge`
     edge_resetar.style.background = `linear-gradient(
         to right,
         ${gradientColors.darker} 0%,
         ${gradientColors.darkerCenter} 8%,
         ${gradientColors.lighterCenter} 92%,
         ${gradientColors.lightest} 100%
     )`;
     edge_resetar.style.height = '80%';
     edge_resetar.style.marginTop = "15px";

     // Aplica a cor ao front e a sombra ao shadow
     front_resetar.style.backgroundColor = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`;
     shadow_resetar.style.background = `hsl(${shadowColor.h}, ${shadowColor.s}%, ${shadowColor.l}%)`;

 
     // Anexa os spans ao botão
     buttonRessetarLevel.appendChild(shadow_resetar);
     buttonRessetarLevel.appendChild(edge_resetar);
     buttonRessetarLevel.appendChild(front_resetar);



    const showCode = document.createElement('button');
    //showCode.innerText = 'Gerar JavaScript';
    showCode.className = 'pushable';
    showCode.style.display = 'none'; // Oculta inicialmente

         // Cria o span para a sombra
     const shadow_showCode = document.createElement('span');
     shadow_showCode.className = 'shadow';
 
     // Cria o span para a borda
     const edge_showCode = document.createElement('span');
     edge_showCode.className = 'edge';
 
     // Cria o span para a frente (parte visível com texto)
     const front_showCode = document.createElement('span');
     front_showCode.className = 'front';
     front_showCode.textContent = `Enviar Código`


     if(hslColor.h == hslCor_Fraca.h){
         console.log("entrei");
         front_showCode.style.color = "black"; //troca cor da fonte
     }


     // Aplicar gradiente no estilo do `.edge`
     edge_showCode.style.background = `linear-gradient(
         to right,
         ${gradientColors.darker} 0%,
         ${gradientColors.darkerCenter} 8%,
         ${gradientColors.lighterCenter} 92%,
         ${gradientColors.lightest} 100%
     )`;
     edge_showCode.style.height = '80%';
     edge_showCode.style.marginTop = "15px";

     // Aplica a cor ao front e a sombra ao shadow
     front_showCode.style.backgroundColor = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`;
     shadow_showCode.style.background = `hsl(${shadowColor.h}, ${shadowColor.s}%, ${shadowColor.l}%)`;

 
     // Anexa os spans ao botão
     showCode.appendChild(shadow_showCode);
     showCode.appendChild(edge_showCode);
     showCode.appendChild(front_showCode);

   
    const buttonStatus = document.createElement('button');
    //buttonStatus.innerText = 'Monitorar Carrinho';
    buttonStatus.className = 'pushable';
    buttonStatus.style.display = 'none'; // Oculta inicialmente

        // Cria o span para a sombra
        const shadow_Status = document.createElement('span');
        shadow_Status.className = 'shadow';
    
        // Cria o span para a borda
        const edge_Status = document.createElement('span');
        edge_Status.className = 'edge';
    
        // Cria o span para a frente (parte visível com texto)
        const front_Status = document.createElement('span');
        front_Status.className = 'front';
        front_Status.textContent = `Monitorar Carrinho`
   
   
        if(hslColor.h == hslCor_Fraca.h){
            console.log("entrei");
            front_Status.style.color = "black"; //troca cor da fonte
        }
   
   
        // Aplicar gradiente no estilo do `.edge`
        edge_Status.style.background = `linear-gradient(
            to right,
            ${gradientColors.darker} 0%,
            ${gradientColors.darkerCenter} 8%,
            ${gradientColors.lighterCenter} 92%,
            ${gradientColors.lightest} 100%
        )`;
        edge_Status.style.height = '80%';
        edge_Status.style.marginTop = "15px";
   
        // Aplica a cor ao front e a sombra ao shadow
        front_Status.style.backgroundColor = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`;
        shadow_Status.style.background = `hsl(${shadowColor.h}, ${shadowColor.s}%, ${shadowColor.l}%)`;
   
    
        // Anexa os spans ao botão
        buttonStatus.appendChild(shadow_Status);
        buttonStatus.appendChild(edge_Status);
        buttonStatus.appendChild(front_Status);


    const buttonCloseStatus = document.createElement('button');
    //buttonCloseStatus.innerText = 'Fechar Monitoramento';
    buttonCloseStatus.className = 'pushable';
    buttonCloseStatus.style.display = 'none'; // Oculta inicialmente
     
    // Cria o span para a sombra
    const shadow_CloseStatus = document.createElement('span');
    shadow_CloseStatus.className = 'shadow';

    // Cria o span para a borda
    const edge_CloseStatus = document.createElement('span');
    edge_CloseStatus.className = 'edge';

    // Cria o span para a frente (parte visível com texto)
    const front_CloseStatus = document.createElement('span');
    front_CloseStatus.className = 'front';
    front_CloseStatus.textContent = `Fechar Monitoramento`


    if(hslColor.h == hslCor_Fraca.h){
        console.log("entrei");
        front_CloseStatus.style.color = "black"; //troca cor da fonte
    }


    // Aplicar gradiente no estilo do `.edge`
    edge_CloseStatus.style.background = `linear-gradient(
        to right,
        ${gradientColors.darker} 0%,
        ${gradientColors.darkerCenter} 8%,
        ${gradientColors.lighterCenter} 92%,
        ${gradientColors.lightest} 100%
    )`;
    edge_CloseStatus.style.height = '80%';
    edge_CloseStatus.style.marginTop = "15px";

    // Aplica a cor ao front e a sombra ao shadow
    front_CloseStatus.style.backgroundColor = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`;
    shadow_CloseStatus.style.background = `hsl(${shadowColor.h}, ${shadowColor.s}%, ${shadowColor.l}%)`;


    // Anexa os spans ao botão
    buttonCloseStatus.appendChild(shadow_CloseStatus);
    buttonCloseStatus.appendChild(edge_CloseStatus);
    buttonCloseStatus.appendChild(front_CloseStatus);
     
    // Elemento para mostrar o status do carrinho
     const statusDisplay = document.createElement('div');
     statusDisplay.id = 'statusDisplay';
     statusDisplay.className = 'shadow__btn';
     statusDisplay.textContent = currentStatus;  // Texto inicial
     statusDisplay.style.setProperty('--shadow-color-font', 'black');
     statusDisplay.style.setProperty('--shadow-color', 'white');
     statusDisplay.style.display = 'none'; // Oculta inicialmente

         // Elemento para mostrar o status do carrinho
     const sensor1Display = document.createElement('div');
     sensor1Display.id = 'sensor1Display';
     sensor1Display.className = 'shadow__btn';
     sensor1Display.textContent = currentStatus;  // Texto inicial
     sensor1Display.style.setProperty('--shadow-color-font', 'black');
     sensor1Display.style.setProperty('--shadow-color', 'white');
     sensor1Display.style.display = 'none'; // Oculta inicialmente

              // Elemento para mostrar o status do carrinho
     const sensor2Display = document.createElement('div');
     sensor2Display.id = 'sensor2Display';
     sensor2Display.className = 'shadow__btn';
     sensor2Display.textContent = currentStatus;  // Texto inicial
     sensor2Display.style.setProperty('--shadow-color-font', 'black');
     sensor2Display.style.setProperty('--shadow-color', 'white');
     sensor2Display.style.display = 'none'; // Oculta inicialmente

              // Elemento para mostrar o status do carrinho
     const sensor3Display = document.createElement('div');
     sensor3Display.id = 'sensor3Display';
     sensor3Display.className = 'shadow__btn';
     sensor3Display.textContent = currentStatus;  // Texto inicial
     sensor3Display.style.setProperty('--shadow-color-font', 'black');
     sensor3Display.style.setProperty('--shadow-color', 'white');
     sensor3Display.style.display = 'none'; // Oculta inicialmente

              // Elemento para mostrar o status do carrinho
     const sensor4Display = document.createElement('div');
     sensor4Display.id = 'sensor4Display';
     sensor4Display.className = 'shadow__btn';
     sensor4Display.textContent = currentStatus;  // Texto inicial
     sensor4Display.style.setProperty('--shadow-color-font', 'black');
     sensor4Display.style.setProperty('--shadow-color', 'white');
     sensor4Display.style.display = 'none'; // Oculta inicialmente

              // Elemento para mostrar o status do carrinho
     const sensor5Display = document.createElement('div');
     sensor5Display.id = 'sensor5Display';
     sensor5Display.className = 'shadow__btn';
     sensor5Display.textContent = currentStatus;  // Texto inicial
     sensor5Display.style.setProperty('--shadow-color-font', 'black');
     sensor5Display.style.setProperty('--shadow-color', 'white');
     sensor5Display.style.display = 'none'; // Oculta inicialmente

              // Elemento para mostrar o status do carrinho
     const sensor6Display = document.createElement('div');
     sensor6Display.id = 'sensor6Display';
     sensor6Display.className = 'shadow__btn';
     sensor6Display.textContent = currentStatus;  // Texto inicial
     sensor6Display.style.setProperty('--shadow-color-font', 'black');
     sensor6Display.style.setProperty('--shadow-color', 'white');
     sensor6Display.style.display = 'none'; // Oculta inicialmente


 

    // Cria o elemento xml para o toolbox do Blockly
    const toolbox = document.createElement('xml');
    toolbox.id = 'toolbox';
    toolbox.style.display = 'none';

    // Agora você pode anexar esses elementos ao appContainer ou a qualquer outro contêiner relevante
   

    // Define os eventos dos botões
    showCode.onclick = () => {
        const code = Blockly.JavaScript.workspaceToCode(this.workspace);
        console.log(code); // Para depuração

        
        database.ref("/").update({
            code: code
          });
      
    };
    
    
    buttonRessetarLevel.onclick = () => {
        this.workspace.clear();
    };

    
    buttonMenu.onclick = () => {
        this.stopPollingStatus();
        appContainer.innerHTML = '';
        this.app.changeLevel('menu');
    };

    buttonStatus.onclick = () => {
      buttonStatus.style.display = 'none';
      statusDisplay.style.display = 'block'; // Mostra Status Carrinho
      sensor1Display.style.display = 'block'; // Mostra Status Carrinho
      sensor2Display.style.display = 'block'; // Mostra Status Carrinho
      sensor3Display.style.display = 'block'; // Mostra Status Carrinho
      sensor4Display.style.display = 'block'; // Mostra Status Carrinho
      sensor5Display.style.display = 'block'; // Mostra Status Carrinho
      sensor6Display.style.display = 'block'; // Mostra Status Carrinho
      buttonCloseStatus.style.display = 'inline-block'; // Mostra Show Code
      this.startPollingStatus();
  };

  buttonCloseStatus.onclick = () => {
    buttonCloseStatus.style.display = 'none';
    statusDisplay.style.display = 'none'; // Mostra Status Carrinho
    sensor1Display.style.display = 'none'; // Mostra Status Carrinho
    sensor2Display.style.display = 'none'; // Mostra Status Carrinho
    sensor3Display.style.display = 'none'; // Mostra Status Carrinho
    sensor4Display.style.display = 'none'; // Mostra Status Carrinho
    sensor5Display.style.display = 'none'; // Mostra Status Carrinho
    sensor6Display.style.display = 'none'; // Mostra Status Carrinho
    buttonStatus.style.display = 'inline-block'; // Mostra Show Code

    this.stopPollingStatus();
};


    appContainer.appendChild(blocklyDiv);

    topo.appendChild(buttonMenu);
    topo.appendChild(buttonRessetarLevel);
    topo.appendChild(showCode);
    topo.appendChild(buttonStatus);
    topo.appendChild(buttonCloseStatus);

    appContainer.appendChild(topo);

  
    appContainer.appendChild(statusDisplay);

    sensores.appendChild(sensor1Display);
    sensores.appendChild(sensor2Display);
    sensores.appendChild(sensor3Display);
    sensores.appendChild(sensor4Display);
    sensores.appendChild(sensor5Display);
    sensores.appendChild(sensor6Display);

    appContainer.appendChild(sensores);

    appContainer.appendChild(blocklyDiv);
    appContainer.appendChild(toolbox);

    // Inicializa o Blockly (oculto inicialmente)
   

    // Define o evento do botão de iniciar para ocultar as instruções
    // e mostrar os outros elementos
    buttonStart.onclick = () => {
       
        instructionsContainer.style.display = 'none'; // Oculta as instruções
        blocklyDiv.style.display = 'block'; // Mostra Blockly
        buttonMenu.style.display = 'flex'; // Mostra Menu
        buttonRessetarLevel.style.display = 'inline-block'; // Mostra Reset
        showCode.style.display = 'inline-block'; // Mostra Show Code
        buttonStatus.style.display = 'inline-block'; // Mostra Show Code
        
        this.initBlockly();
    };
}
    

    // Método para salvar o estado do Blockly workspace
    saveState() {
      if (this.workspace) {
        console.log(this.workspace);
        console.log("entrei save State"+ this.name);
        const xml = Blockly.Xml.workspaceToDom(this.workspace);
        const xmlText = Blockly.utils.xml.domToText(xml);
        localStorage.setItem(this.xmlWorkspaceKey, xmlText);
      }
    }

    atualizaVariaveis(){
      //Atualizando variaiveis do firebase
  for (let i = 0; i < 6; i++) {
    
    let var_firebase = 0;
      console.log("for "+i);
      switch(i){
        case 0:
          var_firebase = 0;
          break;
        case 1:
          var_firebase = 45;
          break;
        case 2:
          var_firebase = 90;
          break;
        case 3:
          var_firebase = 180;
          break;
        case 4:
          var_firebase = 270;
          break;
        case 5:
          var_firebase = 360;
          break;
    
    
      }
        firebase.database().ref(`/variaveis/v_e_${var_firebase}`).once('value').then((snapshot) => {
           window['v_e_' + var_firebase] = snapshot.val(); // Atualiza a variável local
          // console.log('v_e_'+var_firebase+ '=' + window['v_e_' + var_firebase]);
        }).catch((error) => {
            console.error(`Erro ao buscar dados do sensor ${i}:`, error);
        });
        firebase.database().ref(`/variaveis/v_d_${var_firebase}`).once('value').then((snapshot) => {
          window['v_d_' + var_firebase] = snapshot.val(); // Atualiza a variável local
         }).catch((error) => {
          console.error(`Erro ao buscar dados do sensor ${i}:`, error);

          });
      }
    }
  
  

  }
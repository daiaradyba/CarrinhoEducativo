let currentStatus = "Carregando status...";  // Estado inicial


class Level {
    constructor(name, xmlWorkspaceKey, toolboxXml,app,instructionsImg) {
      this.name = name;
      this.xmlWorkspaceKey = xmlWorkspaceKey;
      this.toolboxXml = toolboxXml;
      this.workspace = null; // Blockly workspace será inicializado depois
      this.app = app;
      this.instructionsImg = instructionsImg;
      this.pollingInterval = null;  // Referência ao intervalo de polling
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
      const toolbox = document.getElementById('toolbox');
      console.log(toolbox);
      toolbox.innerHTML = this.toolboxXml;
      this.workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox });
  
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

   this.atualizaVariaveis();

    // Cria o container das instruções e o botão de iniciar
    const instructionsContainer = document.createElement('div');

    instructionsContainer.className = 'instructions-container';
    instructionsContainer.innerHTML = ` <button className="button start-level-btn" id="b_Start">Start Level</button><img src="${this.instructionsImg}" alt="Instructions" class="instructions-img">`;



    // Adiciona o container de instruções e o botão ao appContainer
   
    appContainer.appendChild(instructionsContainer);
    const buttonStart = document.getElementById('b_Start');
    buttonStart.innerText = 'Iniciar Level';
    buttonStart.className = 'button start-level-btn';

  

    // Cria e configura os outros elementos (Blockly, Menu, Reset, Show Code)
    // mas os deixa ocultos inicialmente
    const blocklyDiv = document.createElement('div');
    blocklyDiv.id = 'blocklyDiv';
    blocklyDiv.style.display = 'none'; // Oculta inicialmente

    const buttonMenu = document.createElement('button');
    buttonMenu.innerText = 'Menu';
    buttonMenu.className = 'button';
    buttonMenu.style.display = 'none'; // Oculta inicialmente

    const buttonRessetarLevel = document.createElement('button');
    buttonRessetarLevel.innerText = 'Ressetar Level';
    buttonRessetarLevel.className = 'button';
    buttonRessetarLevel.style.display = 'none'; // Oculta inicialmente

    const showCode = document.createElement('button');
    showCode.innerText = 'Gerar JavaScript';
    showCode.className = 'button';
    showCode.style.display = 'none'; // Oculta inicialmente

    
    const buttonStatus = document.createElement('button');
    buttonStatus.innerText = 'Monitorar Carrinho';
    buttonStatus.className = 'button';
    buttonStatus.style.display = 'none'; // Oculta inicialmente

    const buttonCloseStatus = document.createElement('button');
    buttonCloseStatus.innerText = 'Fechar Monitoramento';
    buttonCloseStatus.className = 'button';
    buttonCloseStatus.style.display = 'none'; // Oculta inicialmente
     
     
    // Elemento para mostrar o status do carrinho
     const statusDisplay = document.createElement('div');
     statusDisplay.id = 'statusDisplay';
     statusDisplay.className = 'status-display';
     statusDisplay.innerText = currentStatus;  // Texto inicial
     statusDisplay.style.display = 'none'; // Oculta inicialmente

         // Elemento para mostrar o status do carrinho
     const sensor1Display = document.createElement('div');
     sensor1Display.id = 'sensor1Display';
     sensor1Display.className = 'status-display';
     sensor1Display.innerText = currentStatus;  // Texto inicial
     sensor1Display.style.display = 'none'; // Oculta inicialmente

              // Elemento para mostrar o status do carrinho
     const sensor2Display = document.createElement('div');
     sensor2Display.id = 'sensor2Display';
     sensor2Display.className = 'status-display';
     sensor2Display.innerText = currentStatus;  // Texto inicial
     sensor2Display.style.display = 'none'; // Oculta inicialmente

              // Elemento para mostrar o status do carrinho
     const sensor3Display = document.createElement('div');
     sensor3Display.id = 'sensor3Display';
     sensor3Display.className = 'status-display';
     sensor3Display.innerText = currentStatus;  // Texto inicial
     sensor3Display.style.display = 'none'; // Oculta inicialmente

              // Elemento para mostrar o status do carrinho
     const sensor4Display = document.createElement('div');
     sensor4Display.id = 'sensor4Display';
     sensor4Display.className = 'status-display';
     sensor4Display.innerText = currentStatus;  // Texto inicial
     sensor4Display.style.display = 'none'; // Oculta inicialmente

              // Elemento para mostrar o status do carrinho
     const sensor5Display = document.createElement('div');
     sensor5Display.id = 'sensor5Display';
     sensor5Display.className = 'status-display';
     sensor5Display.innerText = currentStatus;  // Texto inicial
     sensor5Display.style.display = 'none'; // Oculta inicialmente

              // Elemento para mostrar o status do carrinho
     const sensor6Display = document.createElement('div');
     sensor6Display.id = 'sensor6Display';
     sensor6Display.className = 'status-display';
     sensor6Display.innerText = currentStatus;  // Texto inicial
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
    appContainer.appendChild(buttonMenu);
    appContainer.appendChild(buttonRessetarLevel);
    appContainer.appendChild(showCode);
    appContainer.appendChild(buttonStatus);
    appContainer.appendChild(buttonCloseStatus);
    appContainer.appendChild(statusDisplay);
    appContainer.appendChild(sensor1Display);
    appContainer.appendChild(sensor2Display);
    appContainer.appendChild(sensor3Display);
    appContainer.appendChild(sensor4Display);
    appContainer.appendChild(sensor5Display);
    appContainer.appendChild(sensor6Display);
    appContainer.appendChild(blocklyDiv);
    appContainer.appendChild(toolbox);

    // Inicializa o Blockly (oculto inicialmente)
   

    // Define o evento do botão de iniciar para ocultar as instruções
    // e mostrar os outros elementos
    buttonStart.onclick = () => {
       
        instructionsContainer.style.display = 'none'; // Oculta as instruções
        blocklyDiv.style.display = 'block'; // Mostra Blockly
        buttonMenu.style.display = 'inline-block'; // Mostra Menu
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
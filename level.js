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
          firebase.database().ref('/result/message').once('value').then((snapshot) => {
              const statusDisplay = document.getElementById('statusDisplay');
              if (statusDisplay) {
                  statusDisplay.innerText = snapshot.val() || "Nenhuma informação disponível";
              }
              console.log("Status atualizado: ", snapshot.val());
          }).catch((error) => {
              console.error("Erro ao buscar dados do Firebase:", error);
              if (statusDisplay) {
                  statusDisplay.innerText = "Erro ao buscar status do carrinho.";
              }
          });
      }, 20); // Atualiza a cada 2 segundos
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
     
    // Elemento para mostrar o status do carrinho
     const statusDisplay = document.createElement('div');
     statusDisplay.id = 'statusDisplay';
     statusDisplay.className = 'status-display';
     statusDisplay.innerText = currentStatus;  // Texto inicial
     statusDisplay.style.display = 'none'; // Oculta inicialmente

 

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

    appContainer.appendChild(blocklyDiv);
    appContainer.appendChild(buttonMenu);
    appContainer.appendChild(buttonRessetarLevel);
    appContainer.appendChild(showCode);
    appContainer.appendChild(statusDisplay);
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
        statusDisplay.style.display = 'block'; // Mostra Status Carrinho
        this.initBlockly();
        this.startPollingStatus();
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
  

  }
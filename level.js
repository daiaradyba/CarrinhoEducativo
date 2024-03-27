class Level {
    constructor(name, xmlWorkspaceKey, toolboxXml,app,instructionsImg) {
      this.name = name;
      this.xmlWorkspaceKey = xmlWorkspaceKey;
      this.toolboxXml = toolboxXml;
      this.workspace = null; // Blockly workspace será inicializado depois
      this.app = app;
      this.instructionsImg = instructionsImg;
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
    instructionsContainer.innerHTML = `<img src="${this.instructionsImg}" alt="Instructions" class="instructions-img">`;

    const buttonStart = document.createElement('button');
    buttonStart.innerText = 'Iniciar Level';
    buttonStart.className = 'button start-level-btn';

    // Adiciona o container de instruções e o botão ao appContainer
    appContainer.appendChild(instructionsContainer);
    instructionsContainer.appendChild(buttonStart);

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

    // Cria o elemento xml para o toolbox do Blockly
    const toolbox = document.createElement('xml');
    toolbox.id = 'toolbox';
    toolbox.style.display = 'none';

    // Agora você pode anexar esses elementos ao appContainer ou a qualquer outro contêiner relevante
   

    // Define os eventos dos botões
    showCode.onclick = () => {
        var code = Blockly.JavaScript.workspaceToCode(this.workspace);
        console.log(code);
        alert(code);
    };
    
    buttonRessetarLevel.onclick = () => {
        this.workspace.clear();
    };
    
    buttonMenu.onclick = () => {
        this.app.changeLevel('menu');
    };

    appContainer.appendChild(blocklyDiv);
    appContainer.appendChild(buttonMenu);
    appContainer.appendChild(buttonRessetarLevel);
    appContainer.appendChild(showCode);
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
        this.initBlockly();
    };
}
    

    // Método para salvar o estado do Blockly workspace
    saveState() {
      if (this.workspace) {
        console.log(this.workspace);
        console.log("entrei")
        const xml = Blockly.Xml.workspaceToDom(this.workspace);
        const xmlText = Blockly.utils.xml.domToText(xml);
        localStorage.setItem(this.xmlWorkspaceKey, xmlText);
      }
    }
  

  }
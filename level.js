class Level {
    constructor(name, xmlWorkspaceKey, toolboxXml, contentHtml,app,instructionsImg) {
      this.name = name;
      this.xmlWorkspaceKey = xmlWorkspaceKey;
      this.toolboxXml = toolboxXml;
      this.contentHtml = contentHtml;
      this.workspace = null; // Blockly workspace será inicializado depois
      this.app = app;
      this.instructionsImg = instructionsImg;
    }
  
    // Método para inicializar o Blockly workspace
    initBlockly() {
      const toolbox = document.getElementById('toolbox');
      toolbox.innerHTML = this.toolboxXml;
      this.workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox });
  
      // Carrega o estado anterior se disponível
      const xmlText = localStorage.getItem(this.xmlWorkspaceKey);
      if (xmlText) {
        const xml = Blockly.utils.xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(xml, this.workspace);
      }
    }
      // Renderiza instruções.
      render(appContainer) {
        appContainer.innerHTML = '';
          // Limpa e adiciona o conteúdo, incluindo o botão com um ID específico
        appContainer.innerHTML = `
        <div class="instructions-container">
            <img src="${this.instructionsImg}" alt="Instructions" class="instructions-img">
        </div>`;
      
        const buttonstart = document.createElement('button');
        buttonstart.innerText = 'Iniciar Level';
        buttonstart.className = 'button';

        buttonstart.onclick = () => {
            this.startLevel(appContainer);
        };

        appContainer.appendChild(buttonstart);
    

    }

//Antigo Render
        startLevel(appContainer){
          
            appContainer.innerHTML = this.contentHtml;

        const showCode = document.createElement('button');
        showCode.innerText = 'Gerar JavaScript';
        showCode.className = 'button';

        const buttonMenu = document.createElement('button');
        buttonMenu.innerText = 'Menu';
        buttonMenu.className = 'button';
        
        
    
        const buttonRessetarLevel = document.createElement('button');
        buttonRessetarLevel.innerText = 'Ressetar Level';
        buttonRessetarLevel.className = 'button';
        
    
        showCode.onclick =  function() {
        var code = Blockly.JavaScript.workspaceToCode(this.workspace);
        console.log(code);
        alert(code);
        }
    
        buttonRessetarLevel.onclick = () => {
            this.workspace.clear();
        };
    
        buttonMenu.onclick = () => {
            this.app.changeLevel('menu');
            this.app.render(); // acho que to renderizando duas vezes. tentar tirar e ver oq acontece
        };
        
        appContainer.appendChild(buttonMenu);
        appContainer.appendChild(showCode);
        appContainer.appendChild(buttonRessetarLevel);
        appContainer.appendChild(blocklyDiv);
    
      this.initBlockly();
    
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
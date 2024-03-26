// Estado inicial do aplicativo
let appState = 'tela1';

// Função para renderizar a tela com base no estado
function render() {
  const appContainer = document.getElementById('app');

  // Limpa o conteúdo atual
  appContainer.innerHTML = '';

  // Verifica o estado e monta a tela correspondente
  if (appState === 'tela1') {
    // Conteúdo da Tela 1
    appContainer.innerHTML = '<h1>Blockly Code Generator</h1>'; // Adicione o resto do conteúdo da Tela 1
    // Adiciona o botão para trocar para a Tela 2
    const buttonTela2 = document.createElement('button');
    buttonTela2.innerText = 'Ir para a Tela 2B';
    buttonTela2.onclick = function() {
      appState = 'tela2';
      render(); // Renderiza novamente com o novo estado
    };
    appContainer.appendChild(buttonTela2);
  } else if (appState === 'tela2') {
    // Conteúdo da Tela 2
    appContainer.innerHTML = '<div id="blocklyDiv"></div><xml id="toolbox" style="display: none"><category name="Controles Carro" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário --></xml><button id="showCode">Gerar Código JS</button>';
    
    var workspace = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox')
    });
   
    if (window.localStorage) {
      const xmlText = localStorage.getItem('blocklyWorkspace_level1');
      if (xmlText) {
        const xml = Blockly.utils.xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(xml, workspace);
      }
    }
    console.log("carreguei\n");

    const buttonTela1 = document.createElement('button');
    buttonTela1.innerText = 'Ir para a Tela 1';
    
    buttonTela1.className = 'button';
    showCode.className = 'button';


    showCode.onclick =  function() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code);
    alert(code);
    }

    buttonTela1.onclick = function() {
      appState = 'tela1';
      // Salvar workspace
      if (window.localStorage) {
        const xml = Blockly.Xml.workspaceToDom(workspace);
        const xmlText = Blockly.utils.xml.domToText(xml);
        localStorage.setItem('blocklyWorkspace_level1', xmlText);
      }


      render(); // Renderiza novamente com o novo estado
    };
    
    appContainer.appendChild(buttonTela1);
    appContainer.appendChild(showCode);
    appContainer.appendChild(blocklyDiv);

  }
}

// Inicializa a renderização do app
render();


/*

  
  

*/ 
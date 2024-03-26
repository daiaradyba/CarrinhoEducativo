

var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox')
  });
  
  function showCode() {
    // Gera o código a partir dos blocos
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code);
    alert(code);
  }


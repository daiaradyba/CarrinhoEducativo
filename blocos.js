Blockly.Blocks['ligarled'] = {
  init: function() {
    this.appendValueInput("LED_Selector")
        .setCheck("Number")
        .appendField("Ligar Led");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ler'] = {
  init: function() {
    this.appendValueInput("Ler_Selector")
        .setCheck("Number")
        .appendField("Ler Entrada");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['esperar'] = {
  init: function() {
    this.appendValueInput("Esperar")
        .setCheck("Number")
        .appendField("Esperar por segundos");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['desligarled'] = {
  init: function() {
    this.appendValueInput("Desligar_LED_Selector")
        .setCheck("Number")
        .appendField("Desligar Led");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['frente'] = {
    init: function() {
      this.appendValueInput("valor_frente")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Ir para frente por");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['tras'] = {
    init: function() {
      this.appendValueInput("valor_tras")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Ir para tras por");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['esquerda'] = {
    init: function() {
      this.appendValueInput("valor_esquerda")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Virar a esquerda por");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['direita'] = {
    init: function() {
      this.appendValueInput("valor_direita")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Virar a direita por");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['se'] = {
    init: function() {
      this.appendValueInput("Condition")
          .setCheck(null)
          .appendField("SE");
      this.appendStatementInput("blocos")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['led_choice'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("LED")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "LEDS");
      this.setOutput(true, 'String');
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['sensor_choice'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sensor")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "Sensor");
      this.setOutput(true, 'String');
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['status_choice'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("")
          .appendField(new Blockly.FieldDropdown([["ativado","1"], ["desativado","0"]]), "Status");
      this.setOutput(true, 'String');
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['igual'] = {
    init: function() {
      this.appendValueInput("cond1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("=");
      this.appendValueInput("cond2")
          .setCheck(null);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['menor'] = {
    init: function() {
      this.appendValueInput("cond1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("<");
      this.appendValueInput("cond2")
          .setCheck(null);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['valor'] = {
    init: function() {
      this.appendValueInput("valor")
          .setCheck("Number")
          .appendField("Valor");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  javascript.javascriptGenerator.forBlock['valor'] = function(block, generator) {
    var value_valor = generator.valueToCode(block, 'valor', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = 'VALOR*'+value_valor;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['igual'] = function(block, generator) {
    var value_cond1 = generator.valueToCode(block, 'cond1', javascript.Order.NONE);
    var value_cond2 = generator.valueToCode(block, 'cond2', javascript.Order.NONE);

    var code = '='+value_cond1 + '='+value_cond2;

    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['menor'] = function(block, generator) {
    var value_cond1 = generator.valueToCode(block, 'cond1', javascript.Order.NONE);
    var value_cond2 = generator.valueToCode(block, 'cond2', javascript.Order.NONE);

    var code = '<'+value_cond1 + '<'+value_cond2;

    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['led_choice'] = function(block, generator) {
    var dropdown_leds = block.getFieldValue('LEDS');
    // TODO: Assemble javascript into code variable.
    var code = 'LED*'+dropdown_leds;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];

  };

  javascript.javascriptGenerator.forBlock['status_choice'] = function(block, generator) {
    var dropdown_choice = block.getFieldValue('Status');
    // TODO: Assemble javascript into code variable.
    var code = 'STATUS*'+dropdown_choice;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];

  };

  javascript.javascriptGenerator.forBlock['sensor_choice'] = function(block, generator) {
    var dropdown_choice = block.getFieldValue('Sensor');
    // TODO: Assemble javascript into code variable.
    var code = 'SENSOR*'+dropdown_choice;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];

  };


  javascript.javascriptGenerator.forBlock['se'] = function(block, generator) {
    //var variable_componente = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('componente'), Blockly.Variables.NAME_TYPE);
    var value_condition = Blockly.JavaScript.valueToCode(block, 'Condition', Blockly.JavaScript.ORDER_NONE); // ORDER_ATOMIC GERA PARENTESES
    var statements_blocos = Blockly.JavaScript.statementToCode(block, 'blocos').trim();
  
    // Função recursiva para contar todos os blocos, incluindo blocos aninhados
    function countBlocks(bloco) {
      var count = 0;
      while (bloco) {
        count++;
        // Contar também os blocos aninhados dentro de cada bloco
        var nextLevelBlocks = bloco.getInputTargetBlock('blocos');
        count += countBlocks(nextLevelBlocks);  // Chamada recursiva para contar blocos dentro do bloco atual
        bloco = bloco.getNextBlock();
      }
      return count;
    }
  
    // Contar os blocos na entrada 'blocos'
    var initialBlock = block.getInputTargetBlock('blocos');
    var totalCount = countBlocks(initialBlock);
  
    // Removendo quebras de linha e espaços antes de cada linha
    var code = 'se-' +value_condition+';' +totalCount + '\n';
    if (statements_blocos) {
        var lines = statements_blocos.split('\n');
        var trimmedLines = lines.map(function(line) {
            return line.trim();
        });
        code += trimmedLines.join('\n');
    }
    code += '\n';  // Adiciona quebra de linha ao final para separar de outros blocos

    return code;
  }




  javascript.javascriptGenerator.forBlock['ler'] = function(block, generator) {
    var value_valor_ler = generator.valueToCode(block, 'Ler_Selector', javascript.Order.ATOMIC);
    var code = 'ler;'+value_valor_ler+'\n';
    return code;
  };


  javascript.javascriptGenerator.forBlock['esquerda'] = function(block, generator) {
    var value_valor_esquerda = generator.valueToCode(block, 'valor_esquerda', javascript.Order.ATOMIC);
    var code = 'esquerda:'+value_valor_esquerda+'\n;';
    return code;
  };

  javascript.javascriptGenerator.forBlock['direita'] = function(block, generator) {
    var value_valor_direita = generator.valueToCode(block, 'valor_direita', javascript.Order.ATOMIC);
    var code = 'direita:'+value_valor_direita+'\n;';
    return code;
  };

  javascript.javascriptGenerator.forBlock['frente'] = function(block, generator) {
    var value_valor_frente = generator.valueToCode(block, 'valor_frente', javascript.Order.ATOMIC);
    if(value_valor_frente){
        var code = 'frente:'+value_valor_frente+';\n';
    }
    else{
        var code = 'frente_error';
    }
    return code;
  };

  javascript.javascriptGenerator.forBlock['tras'] = function(block, generator) {
    var value_valor_tras = generator.valueToCode(block, 'valor_tras', javascript.Order.ATOMIC);
    var code = 'tras:'+value_valor_tras+';\n';
    return code;
  };

  Blockly.Blocks['start'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Início");
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  javascript.javascriptGenerator.forBlock['start'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = 'start;\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['piscarled'] = function(block, generator) {
    var value_tempo = generator.valueToCode(block, 'tempo', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = value_tempo;
    return code;
  };

  javascript.javascriptGenerator.forBlock['ligarled'] = function(block, generator) {
    var value_ligar_led_selector = generator.valueToCode(block, 'LED_Selector', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = 'ativar;'+value_ligar_led_selector+'\n';
    return code;
  };
  javascript.javascriptGenerator.forBlock['desligarled'] = function(block, generator) {
    var value_desligar_led_selector = generator.valueToCode(block, 'Desligar_LED_Selector', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code =  'desativar;'+value_desligar_led_selector+'\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['esperar'] = function(block, generator) {
    var value_esperar = generator.valueToCode(block, 'Esperar', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = 'esperar;'+value_esperar+'\n';
    return code;
  };
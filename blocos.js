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

  javascript.javascriptGenerator.forBlock['esquerda'] = function(block, generator) {
    var value_valor_esquerda = generator.valueToCode(block, 'valor_esquerda', javascript.Order.ATOMIC);
    var code = 'esquerda:'+value_valor_esquerda+'\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['direita'] = function(block, generator) {
    var value_valor_direita = generator.valueToCode(block, 'valor_direita', javascript.Order.ATOMIC);
    var code = 'direita:'+value_valor_direita+'\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['frente'] = function(block, generator) {
    var value_valor_frente = generator.valueToCode(block, 'valor_frente', javascript.Order.ATOMIC);
    var code = 'frente:'+value_valor_frente+'\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['tras'] = function(block, generator) {
    var value_valor_tras = generator.valueToCode(block, 'valor_tras', javascript.Order.ATOMIC);
    var code = 'tras:'+value_valor_tras+'\n';
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
    var code = 'start\n';
    return code;
  };
Blockly.Blocks['ir_para_frente'] = {
    init: function() {
      this.appendValueInput("frente_unidades")
          .setCheck("Number")
          .appendField("IR_PRA_FRENTE_POR");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  javascript.javascriptGenerator.forBlock['ir_para_frente'] = function(block, generator) {
    var value_frente_unidades = generator.valueToCode(block, 'frente_unidades', javascript.Order.ATOMIC);

    var code = 'frente:' + value_frente_unidades + '\n';
    return code;
  };
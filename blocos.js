
/*ligarled - Bloco para ligar um LED.
ler - Bloco para ler uma entrada.
esperar - Bloco para fazer uma pausa por um determinado número de segundos.
desligarled - Bloco para desligar um LED.
frente - Bloco para mover para frente por um determinado valor.
tras - Bloco para mover para trás por um determinado valor.
esquerda - Bloco para virar à esquerda por um determinado valor.
direita - Bloco para virar à direita por um determinado valor.
se - Bloco condicional SE.
while - Bloco para criar um loop WHILE.
led_choice - Bloco para escolher um LED específico.
sensor_choice - Bloco para escolher um sensor específico.
status_choice - Bloco para escolher um status (ativado ou desativado).
igual - Bloco para comparar se dois valores são iguais.
menor - Bloco para comparar se um valor é menor que outro.
valor - Bloco para representar um valor numérico.
start - Bloco que representa o início de um script.
piscarled - Bloco para piscar um LED por um tempo especificado.

*/

Blockly.Blocks['monitorar'] = {
  init: function() {
    this.appendValueInput("Monitorar_Selector")
        .setCheck("Number")
        .appendField("Monitorar Sensor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


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
          .appendField("Ir para frenteee por");
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
          .appendField("Ir para traaas por");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['esquerda'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Esquerda")
          .appendField(new Blockly.FieldDropdown([["0°","0"], ["45°","45"],["90°","90"],["180°","180"],["270º","270"],["360°","360"]]), "valor_esquerda");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['direita'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Direita")
        .appendField(new Blockly.FieldDropdown([["0°","0"], ["45°","45"],["90°","90"],["180°","180"],["270º","270"],["360°","360"]]), "valor_direita");
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

  Blockly.Blocks['while'] = {
    init: function() {
      this.appendValueInput("Condition")
          .setCheck(null)
          .appendField("Enquanto");
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
      this.setOutput(true, 'led_choice');
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['sensor_choice'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sensor")
          .appendField(new Blockly.FieldDropdown([["SENSOR1 ADC1_CHANNEL_0 VP","1"], ["SENSOR2 ADC1_CHANNEL_3 VN","2"],["SENSOR3 ADC1_CHANNEL_6 D34","3"],["SENSOR 4 ADC1_CHANNEL_7 D35","4"],["SENSOR5 ADC1_CHANNEL_4 D32","5"],["SENSOR6 ADC1_CHANNEL_5 D33","6"]]), "Sensor");
      this.setOutput(true, 'sensor_choice');
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['sensor_proximidade_choice'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sensor de Proximidade")
          .appendField(new Blockly.FieldDropdown([["frente","1"], ["trás","2"], ["",""]]), "sensor")
          .appendField(new Blockly.FieldDropdown([["ativado","1"], ["desativado","0"], ["",""]]), "status");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['sensor_black_choice'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sensor de Cor")
          .appendField(new Blockly.FieldDropdown([["frente","3"], ["trás","4"], ["",""]]), "sensor")
          .appendField(new Blockly.FieldDropdown([["detectou preto","1"], ["não detectou preto","0"], ["",""]]), "status");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pwm'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("PWM")
          .appendField(new Blockly.FieldDropdown([["LED2","led2"], ["Motor","motor"], ["",""]]), "choice")
          .appendField(new Blockly.FieldDropdown([["100%","1023"], ["75%","767"], ["50%","512"],["25%","256"],["0%","0"]]), "valor")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
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
      this.setOutput(true, 'status_choice');
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['igual'] = {
    init: function() {
      this.appendValueInput("cond1")
          .setCheck(['valor','led_choice','sensor_choice','status_choice']); // Permitir somente tipos específicos
      this.appendDummyInput()
          .appendField("=");
      this.appendValueInput("cond2")
          .setCheck(['valor','led_choice','sensor_choice','status_choice']);;
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['menor'] = {
    init: function() {
      this.appendValueInput("cond1")
          .setCheck(['valor','led_choice','sensor_choice','status_choice']);
      this.appendDummyInput()
          .appendField("<");
      this.appendValueInput("cond2")
          .setCheck(['valor','led_choice','sensor_choice','status_choice']);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['maior'] = {
    init: function() {
      this.appendValueInput("cond1")
          .setCheck(['valor','led_choice','sensor_choice','status_choice']);
      this.appendDummyInput()
          .appendField(">");
      this.appendValueInput("cond2")
          .setCheck(['valor','led_choice','sensor_choice','status_choice']);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['diferente'] = {
    init: function() {
      this.appendValueInput("cond1")
          .setCheck(['valor','led_choice','sensor_choice','status_choice']);
      this.appendDummyInput()
          .appendField("!=");
      this.appendValueInput("cond2")
          .setCheck(['valor','led_choice','sensor_choice','status_choice']);
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

  javascript.javascriptGenerator.forBlock['maior'] = function(block, generator) {
    var value_cond1 = generator.valueToCode(block, 'cond1', javascript.Order.NONE);
    var value_cond2 = generator.valueToCode(block, 'cond2', javascript.Order.NONE);

    var code = '>'+value_cond1 + '>'+value_cond2;

    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['diferente'] = function(block, generator) {
    var value_cond1 = generator.valueToCode(block, 'cond1', javascript.Order.NONE);
    var value_cond2 = generator.valueToCode(block, 'cond2', javascript.Order.NONE);

    var code = '!'+value_cond1 + '!'+value_cond2;

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

  javascript.javascriptGenerator.forBlock['sensor_proximidade_choice'] = function(block, generator) {
    var dropdown_sensor = block.getFieldValue('sensor');
    var dropdown_status = block.getFieldValue('status');
    var code;
    if(dropdown_status === '0'){
      code = '<SENSOR*'+ dropdown_sensor+'<VALOR*160' ;
    }
    else if(dropdown_status === '1'){
      code = '>SENSOR*'+ dropdown_sensor+'>VALOR*160'
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['sensor_black_choice'] = function(block, generator) {
    var dropdown_sensor = block.getFieldValue('sensor');
    var dropdown_status = block.getFieldValue('status');
    var code;
    if(dropdown_status === '1'){
      code = '<SENSOR*'+ dropdown_sensor+'<VALOR*160' ;
    }
    else if(dropdown_status === '0'){
      code = '>SENSOR*'+ dropdown_sensor+'>VALOR*160'
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['pwm'] = function(block, generator) {
    var dropdown_choice = block.getFieldValue('choice');
    var dropdown_valor = block.getFieldValue('valor');
    var code;
    if(dropdown_choice === 'led2'){
      code = 'pwmled;'+dropdown_valor+'\n' ;
    }
    else if(dropdown_choice === 'motor'){
      code = 'pwmm;'+dropdown_valor+'\n';
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

  javascript.javascriptGenerator.forBlock['while'] = function(block, generator) {
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
    var code = 'while-' +value_condition+';' +totalCount + '\n';
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
    var degrees = block.getFieldValue('valor_esquerda');
    var time_ms;
    //console.log("v_e_0 = " + app.v_e_0);
    switch(degrees){
      case '0':
        time_ms = app.v_e_0;
      break;
      case '45':
        time_ms = app.v_e_45;
      break;
      case '90':
        time_ms = app.v_e_90;
      break;
      case '180':
        time_ms = app.v_e_180;
      break;
      case '270':
        time_ms = app.v_e_270;
      break;
      case '360':
        time_ms = app.v_e_360;
      break;
    }
    var code = 'esquerda;'+time_ms+'\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['direita'] = function(block, generator) {
    var degrees = block.getFieldValue('valor_direita');
    var time_ms;
    //console.log("v_e_0 = " + app.v_e_0);
    switch(degrees){
      case '0':
        time_ms = app.v_d_0;
      break;
      case '45':
        time_ms = app.v_d_45;
      break;
      case '90':
        time_ms = app.v_d_90;
      break;
      case '180':
        time_ms = app.v_d_180;
      break;
      case '270':
        time_ms = app.v_d_270;
      break;
      case '360':
        time_ms = app.v_d_360;
      break;
    }
    var code = 'direita;'+time_ms+'\n';
    return code;
  };


  javascript.javascriptGenerator.forBlock['frente'] = function(block, generator) {
    var value_valor_frente = generator.valueToCode(block, 'valor_frente', javascript.Order.ATOMIC);
    if(value_valor_frente){
        var code = 'fre;'+value_valor_frente+'\n';
    }
    else{
        var code = 'frente_error';
    }
    return code;
  };

  javascript.javascriptGenerator.forBlock['tras'] = function(block, generator) {
    var value_valor_tras = generator.valueToCode(block, 'valor_tras', javascript.Order.ATOMIC);
    var code = 'tras;'+value_valor_tras+'\n';
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

  javascript.javascriptGenerator.forBlock['monitorar'] = function(block, generator) {
    var value_monitorar_selector = generator.valueToCode(block, 'Monitorar_Selector', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = 'mo;'+value_monitorar_selector+'\n';
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
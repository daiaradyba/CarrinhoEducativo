const app = new App();

// Cria os níveis
const level1 = new Level(
  'tela1',
  'blocklyWorkspace_level1',
  '<category name="Controles Carro lvl 1 " colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  '<div id="blocklyDiv"></div><xml id="toolbox" style="display: none"></xml>',
  app,
  '1.png'
);
const level2 = new Level(
  'tela2',
  'blocklyWorkspace_level2',
  '<category name="Controles Carro lvl 2" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  '<div id="blocklyDiv"></div><xml id="toolbox" style="display: none"><category name="Controles Carro" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário --></xml>',
  app,
  '2.png'
  );

const level3 = new Level(
    'tela3',
    'blocklyWorkspace_level3',
    '<category name="Controles Carro lvl 3" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
    '<div id="blocklyDiv"></div><xml id="toolbox" style="display: none"><category name="Controles Carro" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário --></xml>',
    app,
    '3.png'
    );  

  

// Adiciona os níveis ao aplicativo
app.addLevel(level1);
app.addLevel(level2);
app.addLevel(level3);

// Inicializa a renderização do app no nível desejado
app.changeLevel('menu');

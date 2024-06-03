const appModulos = new App_Modulos(); //Camada mais abstrata. contem todo os modulos

const app_modulo1 = new App(); //Um app para cada modulo
const app_modulo2 = new App(); //Um app para cada modulo

let v_e_0 = 200;
let v_e_45 = 200;
let v_e_90 = 200;
let v_e_180 = 200;
let v_e_270 = 200;
let v_e_360 = 200;
let v_d_0 = 200;
let v_d_45 = 200;
let v_d_90 = 200;
let v_d_180 = 200;
let v_d_270 = 200;
let v_d_360 = 200;

//--------------------------------MODULO 1 ---------------------------
// Cria os níveis
const level1 = new Level(
  'tela1',
  'blocklyWorkspace_level1',
  '<category name="LED" colour="#F33D49"><block type="for"></block><block type="duracao_nota"></block><block type="buzzer_nota"></block><block type="buzzer_melodia"></block><block type="pwm"></block><block type="sensor_black_choice"></block><block type="sensor_proximidade_choice"></block><block type="monitorar"></block><block type="valor"></block><block type="diferente"></block><block type="maior"></block><block type="menor"></block><block type="igual"></block><block type="sensor_choice"></block><block type="status_choice"></block><block type="led_choice"></block><block type="se"></block><block type="while"></block><block type="ler"></block><block type="ligarled"></block><block type="desligarled"></block><block type="esperar"></block></category><category name="Controles Carro lvl 1 " colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo1,
  '1.png'
);
const level2 = new Level(
  'tela2',
  'blocklyWorkspace_level2',
  '<category name="Controles Carro lvl 2" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo1,
  '2.png'
  );

const level3 = new Level(
    'tela3B',
    'blocklyWorkspace_level3',
    '<category name="Controles Carro lvl 3" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
    app_modulo1,
    '3.png'
    );  


// Adiciona os níveis ao aplicativo
app_modulo1.addLevel(level1);
app_modulo1.addLevel(level2);
app_modulo1.addLevel(level3);

//--------------------------------MODULO 2 ---------------------------
// Cria os níveis
const level4 = new Level(
  'level 4',
  'blocklyWorkspace_level4',
  '<category name="LED" colour="#F33D49"><block type="for"></block><block type="duracao_nota"></block><block type="buzzer_nota"></block><block type="buzzer_melodia"></block><block type="pwm"></block><block type="sensor_black_choice"></block><block type="sensor_proximidade_choice"></block><block type="monitorar"></block><block type="valor"></block><block type="diferente"></block><block type="maior"></block><block type="menor"></block><block type="igual"></block><block type="sensor_choice"></block><block type="status_choice"></block><block type="led_choice"></block><block type="se"></block><block type="while"></block><block type="ler"></block><block type="ligarled"></block><block type="desligarled"></block><block type="esperar"></block></category><category name="Controles Carro lvl 1 " colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo2,
  '1.png'
);
const level5 = new Level(
  'level 5',
  'blocklyWorkspace_level5',
  '<category name="Controles Carro lvl 2" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo2,
  '2.png'
  );

const level6 = new Level(
    'level 6',
    'blocklyWorkspace_level6',
    '<category name="Controles Carro lvl 3" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
    app_modulo2,
    '3.png'
    );  


// Adiciona os níveis ao aplicativo
app_modulo2.addLevel(level4);
app_modulo2.addLevel(level5);
app_modulo2.addLevel(level6);

//----------------------------------------------
database = firebase.database();

// Adiciona apps de módulos ao app de módulos
appModulos.addModule("Modulo 1", app_modulo1,'3.png');
appModulos.addModule("Modulo 2", app_modulo2,'3.png');

async function inicializarApp() {
  await app_modulo1.atualizaVariaveis_off();
  console.log("v_e_0 main = " + app_modulo1.v_e_0); // Apenas após a atualização completa
  //app.changeLevel('menu');
  const appContainer = document.getElementById('app');
  appModulos.renderModules(appContainer);
}
inicializarApp(); // Chamada da função assíncrona
// Inicializa a renderização do app no nível desejado


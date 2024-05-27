const app = new App();
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

// Cria os níveis
const level1 = new Level(
  'tela1',
  'blocklyWorkspace_level1',
  '<category name="LED" colour="#F33D49"><block type="duracao_nota"></block><block type="buzzer_nota"></block><block type="buzzer_melodia"></block><block type="pwm"></block><block type="sensor_black_choice"></block><block type="sensor_proximidade_choice"></block><block type="monitorar"></block><block type="valor"></block><block type="diferente"></block><block type="maior"></block><block type="menor"></block><block type="igual"></block><block type="sensor_choice"></block><block type="status_choice"></block><block type="led_choice"></block><block type="se"></block><block type="while"></block><block type="ler"></block><block type="ligarled"></block><block type="desligarled"></block><block type="esperar"></block></category><category name="Controles Carro lvl 1 " colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app,
  '1.png'
);
const level2 = new Level(
  'tela2',
  'blocklyWorkspace_level2',
  '<category name="Controles Carro lvl 2" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app,
  '2.png'
  );

const level3 = new Level(
    'tela3B',
    'blocklyWorkspace_level3',
    '<category name="Controles Carro lvl 3" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
    app,
    '3.png'
    );  


  

// Adiciona os níveis ao aplicativo
app.addLevel(level1);
app.addLevel(level2);
app.addLevel(level3);


database = firebase.database();



async function inicializarApp() {
  await app.atualizaVariaveis_off();
  console.log("v_e_0 main = " + app.v_e_0); // Apenas após a atualização completa
  app.changeLevel('menu');
}
inicializarApp(); // Chamada da função assíncrona
// Inicializa a renderização do app no nível desejado


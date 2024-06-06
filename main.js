const appModulos = new App_Modulos(); //Camada mais abstrata. contem todo os modulos



// Definição de cores em HSL
const colors = {
  modulo1: { h: 277, s: 79, l: 81 },
  modulo2: { h: 60, s: 96, l: 79 },
  modulo3: { h: 214, s: 84, l: 74 },
  modulo4: { h: 338, s: 100, l: 81 },
  modulo5: { h: 3, s: 100, l: 69 },
  
};

const app_modulo1 = new App("LEDs",colors.modulo1); //Um app para cada modulo
const app_modulo2 = new App("Motores",colors.modulo2); //Um app para cada modulo
const app_modulo3 = new App("Sensores",colors.modulo3); //Um app para cada modulo
const app_modulo4 = new App("PWM",colors.modulo4); //Um app para cada modulo
const app_modulo5 = new App("Buzzer",colors.modulo5); //Um app para cada modulo
const app_modulo6 = new App("Desafio",colors.modulo1); //Um app para cada modulo

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
const mod1_1 = new Level(
  'Fase 1',
  'blocklyWorkspace_mod1_1',
  '<category name="LED" colour="#d8a9f5"><block type="ligarled"></block><block type="math_number"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo1,
  'assets/M_LED_F1.jpeg',
  colors.modulo1
);
const mod1_2 = new Level(
  'Fase 2',
  'blocklyWorkspace_mod1_2',
  '<category name="LED" colour="#d8a9f5"><block type="ligarled"></block><block type="math_number"></block><block type="esperar"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo1,
  '2.png',
  colors.modulo1
  );

const mod1_3 = new Level(
    'Fase 3',
    'blocklyWorkspace_mod1_3',
    '<category name="LED" colour="#d8a9f5"><block type="ligarled"></block><block type="math_number"></block><block type="esperar"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
    app_modulo1,
    '3.png',
    colors.modulo1
    );  

const mod1_4 = new Level(
      'Fase 4',
      'blocklyWorkspace_mod1_4',
      '<category name="LED" colour="#d8a9f5"><block type="ligarled"></block><block type="math_number"></block><block type="esperar"></block></category><category name="Repetir" colour="#ff9ec2"><block type="for"></block><block type="math_number"></block></category>',
      app_modulo1,
      '3.png',
      colors.modulo1
      );  

const mod1_5 = new Level(
    'Desafio',
    'blocklyWorkspace_mod1_5',
    '<category name="LED" colour="#d8a9f5"><block type="ligarled"></block><block type="math_number"></block><block type="esperar"></block></category><category name="Repetir" colour="#ff9ec2"><block type="for"></block><block type="math_number"></block></category>',
    app_modulo1,
    '3.png',
    colors.modulo1
    );  

  
// Adiciona os níveis ao aplicativo
app_modulo1.addLevel(mod1_1);
app_modulo1.addLevel(mod1_2);
app_modulo1.addLevel(mod1_3);
app_modulo1.addLevel(mod1_4);
app_modulo1.addLevel(mod1_5);

//--------------------------------MODULO 2 ---------------------------
// Cria os níveis
const mod2_1 = new Level(
  'Fase 1',
  'blocklyWorkspace_mod2_1',
  '<category name="LED" colour="#F33D49"><block type="for"></block><block type="duracao_nota"></block><block type="buzzer_nota"></block><block type="buzzer_melodia"></block><block type="pwm"></block><block type="sensor_black_choice"></block><block type="sensor_proximidade_choice"></block><block type="monitorar"></block><block type="valor"></block><block type="diferente"></block><block type="maior"></block><block type="menor"></block><block type="igual"></block><block type="sensor_choice"></block><block type="status_choice"></block><block type="led_choice"></block><block type="se"></block><block type="while"></block><block type="ler"></block><block type="ligarled"></block><block type="desligarled"></block><block type="esperar"></block></category><category name="Controles Carro lvl 1 " colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo2,
  '1.png',
  colors.modulo2
);
const mod2_2 = new Level(
  'Fase 2',
  'blocklyWorkspace_mod2_2',
  '<category name="Controles Carro lvl 2" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo2,
  '2.png',
  colors.modulo2
  );

const mod2_3 = new Level(
    'Fase 3',
    'blocklyWorkspace_mod2_3',
    '<category name="Controles Carro lvl 3" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
    app_modulo2,
    '3.png',
    colors.modulo2
    );  

const mod2_4 = new Level(
    'Fase 4',
    'blocklyWorkspace_mod2_4',
    '<category name="Controles Carro lvl 3" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
    app_modulo2,
    '3.png',
    colors.modulo2
    );  

const mod2_5 = new Level(
    'Fase 5',
    'blocklyWorkspace_mod2_5',
    '<category name="Controles Carro lvl 3" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
    app_modulo2,
    '3.png',
    colors.modulo2
    );  



// Adiciona os níveis ao aplicativo
app_modulo2.addLevel(mod2_1);
app_modulo2.addLevel(mod2_2);
app_modulo2.addLevel(mod2_3);
app_modulo2.addLevel(mod2_4);
app_modulo2.addLevel(mod2_5);

//----------------------------------------------

//--------------------------------MODULO 3 ---------------------------
// Cria os níveis
const mod3_1 = new Level(
  'Fase 1',
  'blocklyWorkspace_mod3_1',
  '<category name="LED" colour="#F33D49"><block type="for"></block><block type="duracao_nota"></block><block type="buzzer_nota"></block><block type="buzzer_melodia"></block><block type="pwm"></block><block type="sensor_black_choice"></block><block type="sensor_proximidade_choice"></block><block type="monitorar"></block><block type="valor"></block><block type="diferente"></block><block type="maior"></block><block type="menor"></block><block type="igual"></block><block type="sensor_choice"></block><block type="status_choice"></block><block type="led_choice"></block><block type="se"></block><block type="while"></block><block type="ler"></block><block type="ligarled"></block><block type="desligarled"></block><block type="esperar"></block></category><category name="Controles Carro lvl 1 " colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo3,
  '1.png',
  colors.modulo3
);
const mod3_2 = new Level(
  'Fase 2',
  'blocklyWorkspace_mod3_2',
  '<category name="Controles Carro lvl 2" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo3,
  '2.png',
  colors.modulo3
  );

const mod3_3 = new Level(
    'Fase 3',
    'blocklyWorkspace_mod3_3',
    '<category name="Controles Carro lvl 3" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
    app_modulo3,
    '3.png',
    colors.modulo3
    );  

const mod3_4 = new Level(
    'Fase 4',
    'blocklyWorkspace_mod3_4',
    '<category name="Controles Carro lvl 3" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
    app_modulo3,
    '3.png',
    colors.modulo3
    );  



// Adiciona os níveis ao aplicativo
app_modulo3.addLevel(mod3_1);
app_modulo3.addLevel(mod3_2);
app_modulo3.addLevel(mod3_3);
app_modulo3.addLevel(mod3_4);


//----------------------------------------------
//--------------------------------MODULO 4 ---------------------------
// Cria os níveis
const mod4_1 = new Level(
  'Fase 1',
  'blocklyWorkspace_mod4_1',
  '<category name="LED" colour="#F33D49"><block type="for"></block><block type="duracao_nota"></block><block type="buzzer_nota"></block><block type="buzzer_melodia"></block><block type="pwm"></block><block type="sensor_black_choice"></block><block type="sensor_proximidade_choice"></block><block type="monitorar"></block><block type="valor"></block><block type="diferente"></block><block type="maior"></block><block type="menor"></block><block type="igual"></block><block type="sensor_choice"></block><block type="status_choice"></block><block type="led_choice"></block><block type="se"></block><block type="while"></block><block type="ler"></block><block type="ligarled"></block><block type="desligarled"></block><block type="esperar"></block></category><category name="Controles Carro lvl 1 " colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo4,
  '1.png',
  colors.modulo4
);
const mod4_2 = new Level(
  'Fase 2',
  'blocklyWorkspace_mod4_2',
  '<category name="Controles Carro lvl 2" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo4,
  '2.png',
  colors.modulo4
  );



// Adiciona os níveis ao aplicativo
app_modulo4.addLevel(mod4_1);
app_modulo4.addLevel(mod4_2);


//----------------------------------------------
//--------------------------------MODULO 5 ---------------------------
// Cria os níveis
const mod5_1 = new Level(
  'Fase 1',
  'blocklyWorkspace_mod5_1',
  '<category name="LED" colour="#F33D49"><block type="for"></block><block type="duracao_nota"></block><block type="buzzer_nota"></block><block type="buzzer_melodia"></block><block type="pwm"></block><block type="sensor_black_choice"></block><block type="sensor_proximidade_choice"></block><block type="monitorar"></block><block type="valor"></block><block type="diferente"></block><block type="maior"></block><block type="menor"></block><block type="igual"></block><block type="sensor_choice"></block><block type="status_choice"></block><block type="led_choice"></block><block type="se"></block><block type="while"></block><block type="ler"></block><block type="ligarled"></block><block type="desligarled"></block><block type="esperar"></block></category><category name="Controles Carro lvl 1 " colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo5,
  '1.png',
  colors.modulo5
);

const mod5_2 = new Level(
  'Fase 2',
  'blocklyWorkspace_mod5_2',
  '<category name="Controles Carro lvl 2" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo5,
  '2.png',
  colors.modulo5
  );

const mod5_3 = new Level(
  'Fase 3',
  'blocklyWorkspace_mod5_3',
  '<category name="Controles Carro lvl 2" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo5,
  '2.png',
  colors.modulo5
  );

const mod5_4 = new Level(
  'Fase 4',
  'blocklyWorkspace_mod5_4',
  '<category name="Controles Carro lvl 2" colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo5,
  '2.png',
  colors.modulo5
  );




// Adiciona os níveis ao aplicativo
app_modulo5.addLevel(mod5_1);
app_modulo5.addLevel(mod5_2);
app_modulo5.addLevel(mod5_3);
app_modulo5.addLevel(mod5_4);


//----------------------------------------------

//--------------------------------MODULO 6 ---------------------------
// Cria os níveis
const mod6_1 = new Level(
  'Fase 1',
  'blocklyWorkspace_mod6_1',
  '<category name="LED" colour="#F33D49"><block type="for"></block><block type="duracao_nota"></block><block type="buzzer_nota"></block><block type="buzzer_melodia"></block><block type="pwm"></block><block type="sensor_black_choice"></block><block type="sensor_proximidade_choice"></block><block type="monitorar"></block><block type="valor"></block><block type="diferente"></block><block type="maior"></block><block type="menor"></block><block type="igual"></block><block type="sensor_choice"></block><block type="status_choice"></block><block type="led_choice"></block><block type="se"></block><block type="while"></block><block type="ler"></block><block type="ligarled"></block><block type="desligarled"></block><block type="esperar"></block></category><category name="Controles Carro lvl 1 " colour="#F33D49"><block type="start"></block><block type="frente"></block><block type="tras"></block><block type="esquerda"></block><block type="direita"></block></category><category name="Lógica" colour="#774AD9"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Laços" colour="#5ED905"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block></category><category name="Matemática" colour="#E80C7A"><block type="math_number"></block><block type="math_arithmetic"></block></category><!-- Continue adicionando categorias e blocos conforme necessário -->',
  app_modulo6,
  '1.png',
  colors.modulo6
);





// Adiciona os níveis ao aplicativo
app_modulo6.addLevel(mod6_1);



//----------------------------------------------


database = firebase.database();

// Adiciona apps de módulos ao app de módulos
appModulos.addModule("LEDs", app_modulo1,'assets/M_LED.jpeg',colors.modulo1);
appModulos.addModule("Motores", app_modulo2,'1.png',colors.modulo2);
appModulos.addModule("Sensores", app_modulo3,'3.png',colors.modulo3);
appModulos.addModule("PWM", app_modulo4,'3.png',colors.modulo4);
appModulos.addModule("Buzzer", app_modulo5,'3.png',colors.modulo5);
appModulos.addModule("Desafio", app_modulo6,'3.png',colors.modulo1);

async function inicializarApp() {
  await app_modulo1.atualizaVariaveis_off();
  console.log("v_e_0 main = " + app_modulo1.v_e_0); // Apenas após a atualização completa
  //app.changeLevel('menu');
  const appContainer = document.getElementById('app');
  appModulos.renderModules(appContainer);
}
inicializarApp(); // Chamada da função assíncrona
// Inicializa a renderização do app no nível desejado


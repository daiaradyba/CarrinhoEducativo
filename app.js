

class App {
    constructor(nameModulo,color) {
      this.levels = {};
      this.currentLevelName = 'menu';
      this.nameModulo = nameModulo;
      this.color = color;
    }
  
    addLevel(level) {
      this.levels[level.name] = level;
    }
 
changeLevel(levelName) {
  console.log("Change level "+ levelName);
  if (this.levels[this.currentLevelName]) {
    this.levels[this.currentLevelName].saveState();
  } 
  if (levelName === 'menu') {
    this.currentLevelName = 'menu';
    this.render();
  }
  if(levelName === 'config'){
    this.currentLevelName = 'config';
    this.render();
  }
  else {
    this.currentLevelName = levelName;
    this.render();
  }
}


/*
Aqui eu nao tava voltando  o menu para menu
    changeLevel(levelName) {
      if (this.levels[this.currentLevelName]) {
        this.levels[this.currentLevelName].saveState();
      }
      this.currentLevelName = levelName;
      this.render();
    }
    */
  
renderMenu(appContainer) {
      // Limpa o conteúdo atual
      //appContainer.innerHTML = `<h1>${this.nameModulo}</h1>`;
        const topo = document.createElement('div');
        topo.className = 'topo';
        
        const titulo = document.createElement('button');
        titulo.className = 'shadow__btn';
        titulo.textContent = this.nameModulo;
        titulo.style.setProperty('--shadow-color', `hsl(${this.color.h}, ${this.color.s}%, ${this.color.l}%)`);
     

          // Botão para retornar ao menu de módulos
        const b_r_mod = document.createElement('button');
        b_r_mod.className = 'return';

       // Cria o elemento SVG
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 384 512');
        svg.classList.add('svgIcon');

        // Cria o elemento path para o SVG
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z');

        // Adiciona o path ao SVG
        svg.appendChild(path);

        // Adiciona o SVG ao botão
        b_r_mod.appendChild(svg);
        b_r_mod.style.backgroundColor = `hsl(${this.color.h}, ${this.color.s}%, ${this.color.l}%)`;

        const hslCor_Fraca = { h: 60, s: 96, l: 79 };
        if(this.color.h == hslCor_Fraca.h){
          b_r_mod.style.setProperty('--before-text-color', '#808080');
          b_r_mod.style.setProperty('--svgIcon-fill-color', '#808080');
          titulo.style.setProperty('--shadow-color-font',  '#808080');
      
        }
        else{
          b_r_mod.style.setProperty('--before-text-color', 'white');
          b_r_mod.style.setProperty('--svgIcon-fill-color', 'white');
          titulo.style.setProperty('--shadow-color-font',  'white');
        }

        topo.appendChild(b_r_mod);
        topo.appendChild(titulo);
        
        appContainer.appendChild(topo);

        b_r_mod.onclick = () => {
        // Garanta que appModulos está acessível aqui
        if (typeof appModulos !== 'undefined') {
          this.currentLevelName = 'menu'; // Resetar para o menu ao sair do módulo
          console.log("acessei");
          appModulos.renderModules(appContainer);
          }
        };
  
      Object.keys(this.levels).forEach(levelName => {
        
            
        const button = document.createElement('button');

        button.onclick = () => {
          this.changeLevel(levelName);
        };
        appContainer.appendChild(button);
    
      //****************************************** */    
      button.className = 'pushable';
    
      // Cria o span para a sombra
      const shadow = document.createElement('span');
      shadow.className = 'shadow';
  
      // Cria o span para a borda
      const edge = document.createElement('span');
      edge.className = 'edge';
  
      // Cria o span para a frente (parte visível com texto)
      const front = document.createElement('span');
      front.className = 'front';
      front.textContent = `${levelName.toUpperCase()}`;


      // Suponha que cada módulo tenha uma propriedade color em formato HSL
      const hslColor = this.color; // Objeto { h, s, l }

      const hslCor_Fraca = { h: 60, s: 96, l: 79 };
      if(hslColor.h == hslCor_Fraca.h){
          console.log("entrei");
          front.style.color = "#808080"; //troca cor da fonte
      }

      const shadowColor = calculateShadowColor(hslColor); // Calcula a cor da sombra

      const gradientColors = generateGradientColors(hslColor);

      // Aplicar gradiente no estilo do `.edge`
      edge.style.background = `linear-gradient(
          to right,
          ${gradientColors.darker} 0%,
          ${gradientColors.darkerCenter} 8%,
          ${gradientColors.lighterCenter} 92%,
          ${gradientColors.lightest} 100%
      )`;
      edge.style.height = '80%';
      edge.style.marginTop = "15px";

      // Aplica a cor ao front e a sombra ao shadow
      front.style.backgroundColor = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`;
      shadow.style.background = `hsl(${shadowColor.h}, ${shadowColor.s}%, ${shadowColor.l}%)`;

  
      // Anexa os spans ao botão
      button.appendChild(shadow);
      button.appendChild(edge);
      button.appendChild(front);


      //****************************************** */    

    });
      const b_config = document.createElement('b_config');
      b_config.className = 'button';
      b_config.innerText = 'CONFIGURAÇÃO';
     // appContainer.appendChild(b_config);
      b_config.onclick = () => {
        this.changeLevel("config");
      };






    }

renderConfig(appContainer){
  appContainer.innerHTML = '';  // Limpa o conteúdo anterior
  

    // Cria e adiciona o contêiner para o botão 'Menu'
    const menuContainer = document.createElement('div');
    const buttonMenu = document.createElement('button');
    buttonMenu.className = 'button';
    buttonMenu.innerText = 'Menu';
    menuContainer.appendChild(buttonMenu);
    buttonMenu.onclick = () => {
      voltarMenuConfig();
    };

    const buttonCarregarValorFirebase = document.createElement('button');
    buttonCarregarValorFirebase.className = 'button';
    buttonCarregarValorFirebase.innerText = 'Carregar valor do Carrinho';
    menuContainer.appendChild(buttonCarregarValorFirebase);
    buttonCarregarValorFirebase.onclick = () => {
        console.log('buttonCarregarValorFirebase');
    };

    appContainer.appendChild(menuContainer);

    // Cria um contêiner flexível para "Esquerda" e "Direita"
    const flexContainer_all = document.createElement('div');
    flexContainer_all.style.display = 'flex';
    flexContainer_all.style.flexWrap = 'wrap';  // Permite a quebra de linha se necessário
    appContainer.appendChild(flexContainer_all);

    const div_direitas = document.createElement('div');
    const div_esquerdas = document.createElement('div');

    // Exibe os valores atuais das variáveis
    const degrees = [0, 45, 90, 180,270, 360];
    let valor = 0;
    degrees.forEach(degree => {
        const div = document.createElement('div');
        div.id = 'esquerda' + degree;
        div.className = 'status-display';
        switch(degree){
          case 0:
            valor = v_e_0;
            break;
          case 45:
            valor = v_e_45;
            break;
          case 90:
            valor = v_e_90;
            break;
          case 180:
            valor = v_e_180;
            break;
          case 270:
            valor = v_e_270;
            break;
          case 360:
            valor = v_e_360;
            break;
        }
        div.innerText = '.   Carregando' + 'ms   ';
        div_esquerdas.appendChild(div);
    });

    degrees.forEach(degree => {
      const div = document.createElement('div');
      div.id = 'direita' + degree;
      div.className = 'status-display';
      switch(degree){
        case 0:
          valor = v_d_0;
          break;
        case 45:
          valor = v_d_45;
          break;
        case 90:
          valor = v_d_90;
          break;
        case 180:
          valor = v_d_180;
          break;
        case 270:
          valor = v_d_270;
          break;
        case 360:
          valor = v_d_360;
          break;
      }
      div.innerText = '.   Carregando' + 'ms   ';
      div_direitas.appendChild(div);
  });


    this.atualizaVariaveis();
   
    flexContainer_all.appendChild(div_direitas);
    flexContainer_all.appendChild(div_esquerdas);
    // Cria e adiciona o contêiner para os demais controles
    const controlsContainer = document.createElement('div');
    appContainer.appendChild(controlsContainer);

    // Cria e adiciona o dropdown para 'esquerda/direita'
    const selectDirection = document.createElement('select');
    ['esquerda', 'direita'].forEach(direction => {
        const option = document.createElement('option');
        option.value = direction;
        option.text = direction;
        selectDirection.appendChild(option);
    });
    selectDirection.className = 'dropdown';
    controlsContainer.appendChild(selectDirection);

    // Cria e adiciona o dropdown para '0º/45º/90º/270º/360º'
    const selectDegrees = document.createElement('select');
    ['0º', '45º','180º', '90º', '270º', '360º'].forEach(degree => {
        const option = document.createElement('option');
        option.value = degree;
        option.text = degree;
        selectDegrees.appendChild(option);
    });
    selectDegrees.className = 'dropdown';
    controlsContainer.appendChild(selectDegrees);

    // Cria e adiciona o campo de entrada numérica
    const inputNumber = document.createElement('input');
    inputNumber.type = 'number';
    controlsContainer.appendChild(inputNumber);

    // Cria e adiciona o texto 'ms'
    const textMs = document.createElement('span');
    textMs.innerText = 'ms';
    controlsContainer.appendChild(textMs);

    // Cria e adiciona o botão 'Enviar'
    const buttonAtt= document.createElement('button');
    buttonAtt.innerText = 'Atualizar';
    buttonAtt.className = 'button';
    controlsContainer.appendChild(buttonAtt);
    
    buttonAtt.onclick = () => {
      this.updateVariable(selectDirection.value, selectDegrees.value, inputNumber.value);
    };

}
updateVariable(direction, degree, value) {

    // Converte o valor para inteiro
    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue)) {
      console.error("O valor fornecido não é um número válido.");
      return;
    }
  if (direction === 'esquerda') {
      const varName = 'v_e_' + degree.slice(0, -1); // Remove o símbolo 'º'
      database.ref("variaveis/").update({
        [varName]: numericValue
      });
      // Atualiza o display pegando do firebase

      firebase.database().ref(`/variaveis/${varName}`).once('value').then((snapshot) => {
        const variavelDisplay = document.getElementById(`esquerda${degree.slice(0, -1)}`);
        console.log(variavelDisplay);
        //console.log("sensor Display "+sensorDisplay);
        if (variavelDisplay) {
          variavelDisplay.innerText = `.   Esquerda ${degree.slice(0, -1)}º: ${snapshot.val() + 'ms' || "Dados não disponíveis"}`;
        }
       }).catch((error) => {
        console.error(`Erro ao buscar dados`, error);
        const variavelDisplay = document.getElementById(`esquerda${degree.slice(0, -1)}`);
        if (variavelDisplay) {
          variavelDisplay.innerText = `: Erro de comunicação`;
        }
        });
        app.atualizaVariaveis_off();
  }

  if (direction === 'direita') {

    const varName = 'v_d_' + degree.slice(0, -1); // Remove o símbolo 'º'
    database.ref("variaveis/").update({
      [varName]: numericValue
    });
    // Atualiza o display pegando do firebase

    firebase.database().ref(`/variaveis/${varName}`).once('value').then((snapshot) => {
      const variavelDisplay = document.getElementById(`direita${degree.slice(0, -1)}`);
      console.log(variavelDisplay);
      //console.log("sensor Display "+sensorDisplay);
      if (variavelDisplay) {
        variavelDisplay.innerText = `.   Direita ${degree.slice(0, -1)}º: ${snapshot.val() + 'ms' || "Dados não disponíveis"}`;
      }
     }).catch((error) => {
      console.error(`Erro ao buscar dados`, error);
      const variavelDisplay = document.getElementById(`direita${degree.slice(0, -1)}`);
      if (variavelDisplay) {
        variavelDisplay.innerText = `: Erro de comunicação`;
      }
      });
   
}

}
  
    render() {
      const appContainer = document.getElementById('app');
      if (this.currentLevelName === 'menu') {
        this.renderMenu(appContainer);
      }
      if(this.currentLevelName === 'config'){
        this.renderConfig(appContainer);
      }
       else if (this.levels[this.currentLevelName]) {
        this.levels[this.currentLevelName].render(appContainer);
      }
    }

    atualizaVariaveis() {
      // Updating variables from firebase
      for (let i = 0; i < 6; i++) {

          let var_firebase = 0;
          console.log("for " + i);
          switch (i) {
              case 0:
                  var_firebase = 0;
                  break;
              case 1:
                  var_firebase = 45;
                  break;
              case 2:
                  var_firebase = 90;
                  break;
              case 3:
                  var_firebase = 180;
                  break;
              case 4:
                  var_firebase = 270;
                  break;
              case 5:
                  var_firebase = 360;
                  break;
          }
          firebase.database().ref(`/variaveis/v_e_${var_firebase}`).once('value').then((snapshot) => {
              const variavelDisplay = document.getElementById(`esquerda${var_firebase}`);
              console.log(variavelDisplay);
              //console.log("sensor Display "+sensorDisplay);
              if (variavelDisplay) {
                  variavelDisplay.innerText = `.   Esquerda ${var_firebase}º: ${snapshot.val() + 'ms' || "Dados não disponíveis"}`;
              }
          }).catch((error) => {
              console.error(`Erro ao buscar dados do sensor ${i}:`, error);
              const variavelDisplay = document.getElementById(`esquerda${var_firebase}`);
              if (variavelDisplay) {
                  variavelDisplay.innerText = `Sensor ${var_firebase}: Erro de comunicação`;
              }
          });
          firebase.database().ref(`/variaveis/v_d_${var_firebase}`).once('value').then((snapshot) => {
              const variavelDisplay = document.getElementById(`direita${var_firebase}`);
              console.log(variavelDisplay);
              //console.log("sensor Display "+sensorDisplay);
              if (variavelDisplay) {
                  variavelDisplay.innerText = `.   Direita ${var_firebase}º: ${snapshot.val() + 'ms' || "Dados não disponíveis"}`;
              }
              window['v_d_' + var_firebase] = snapshot.val(); // Update the local variable
          }).catch((error) => {
              console.error(`Erro ao buscar dados do sensor ${i}:`, error);
              const variavelDisplay = document.getElementById(`direita${var_firebase}`);
              if (variavelDisplay) {
                  variavelDisplay.innerText = `Sensor ${var_firebase}: Erro de comunicação`;
              }
          });
      }
    }


}

App.prototype.atualizaVariaveis_off = async function() {
  const variaveis = ['v_e_0', 'v_e_45', 'v_e_90', 'v_e_180', 'v_e_270', 'v_e_360', 'v_d_0', 'v_d_45', 'v_d_90', 'v_d_180', 'v_d_270', 'v_d_360'];
  const promises = variaveis.map(variavel => 
    firebase.database().ref(`/variaveis/${variavel}`).once('value').then(snapshot => {
      this[variavel] = snapshot.val();
      //document.getElementById(variavel).innerText = snapshot.val() + ' ms'; // Atualiza a exibição no DOM se necessário
    })
  );

  await Promise.all(promises); // Espera todas as operações do Firebase completarem
  console.log("Todas variáveis foram atualizadas.");
};
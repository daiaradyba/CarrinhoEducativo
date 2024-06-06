async function voltarMenuConfig() {
    await app_modulo1.atualizaVariaveis_off();
    const appContainer = document.getElementById('app');
    appModulos.renderModules(appContainer);
  }

  function calculateShadowColor(hsl) {
    const h = hsl.h; // Mantém o mesmo matiz
    let s = hsl.s; // Saturação
    let l = hsl.l; // Luminosidade

    // Ajustar a luminosidade e a saturação para a sombra
    // Aumentar luminosidade e reduzir saturação
    s = Math.max(0, s - 40); // Reduz a saturação em 20%
    l = Math.min(100, l + 40); // Aumenta a luminosidade em 20%

    return { h, s, l };
}
function generateGradientColors(hslBase) {
    const { h, s, l } = hslBase;
    
    // Calcula cores mais escuras e mais claras
    const darker = `hsl(${h}, ${Math.max(20, s - 10)}%, ${Math.max(20, l - 20)}%)`;
    const darkerCenter = `hsl(${h}, ${Math.max(25, s - 5)}%, ${Math.max(25, l - 15)}%)`;
    const lighterCenter = `hsl(${h}, ${Math.max(30, s)}%, ${Math.min(100, l + 10)}%)`;
    const lightest = `hsl(${h}, ${Math.max(35, s - 10)}%, ${Math.min(100, l + 15)}%)`;

    return { darker, darkerCenter, lighterCenter, lightest };
}

class App_Modulos {
    constructor() {
        this.modules = {};
        this.instructionsImg = {};
        this.currentModuleName = null;
        
    }

    addModule(name, app, instructionsImg,color) {
        this.modules[name] = { app: app, instructionsImg: instructionsImg, color: color }
        this.instructionsImg[name] = instructionsImg;
    }

    changeModule(moduleName) {
        this.currentModuleName = moduleName;
        this.render(moduleName);
    }

    render(moduleName) {
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = '';
        cor_fundo_blocky = `hsl(${this.modules[moduleName].color.h}, ${this.modules[moduleName].color.s}%, ${this.modules[moduleName].color.l}%)`;


        const instructionsContainer = document.createElement('div');

        instructionsContainer.className = 'instructions-container';
        instructionsContainer.innerHTML = ` <button className="button start-level-btn" id="b_Start"></button><img src="${this.instructionsImg[moduleName]}" alt="Instructions" class="instructions-img">`;
    
      
        document.body.style.backgroundColor = cor_fundo_blocky;
        appContainer.style.backgroundColor = cor_fundo_blocky;
        // Adiciona o container de instruções e o botão ao appContainer
       
        appContainer.appendChild(instructionsContainer);
        const buttonStart = document.getElementById('b_Start');
        //----------------------

        buttonStart.className = 'pushable';
    
        // Cria o span para a sombra
        const shadow = document.createElement('span');
        shadow.className = 'shadow';
    
        // Cria o span para a borda
        const edge = document.createElement('span');
        edge.className = 'edge';
    
        // Cria o span para a frente (parte visível com texto)
        const front = document.createElement('span');
        front.className = 'front';
        front.textContent = 'Iniciar Módulo '+moduleName;  // Definindo o texto como o nome do módulo


        // Suponha que cada módulo tenha uma propriedade color em formato HSL
        const hslColor = this.modules[moduleName].color; // Objeto { h, s, l }

        const hslCor_Fraca = { h: 60, s: 96, l: 79 };
        const hslCor_Fraca2 = { h: 288, s: 96, l: 87 };

        const cinza = {h:0, s:0, l:94};

        if(hslColor.h == hslCor_Fraca.h ||hslColor.h ==hslCor_Fraca2.h){
            console.log("entrei");
            front.style.color = "black"; //troca cor da fonte
        }

     const shadowColor = calculateShadowColor(hslColor); // Calcula a cor da sombra
     const shadowColorCinza = calculateShadowColor(cinza);
     const gradientColors = generateGradientColors(hslColor);
     const gradientColorsCinza = generateGradientColors(cinza);

     // Aplicar gradiente no estilo do `.edge`
     edge.style.background = `linear-gradient(
         to right,
         ${gradientColorsCinza.darker} 0%,
         ${gradientColorsCinza.darkerCenter} 8%,
         ${gradientColorsCinza.lighterCenter} 92%,
         ${gradientColorsCinza.lightest} 100%
     )`;
     edge.style.height = '80%';
     edge.style.marginTop = "15px";

     // Aplica a cor ao front e a sombra ao shadow
     front.style.backgroundColor = `hsl(${cinza.h}, ${cinza.s}%, ${cinza.l}%)`;
     shadow.style.background = `hsl(${shadowColorCinza.h}, ${shadowColorCinza.s}%, ${shadowColorCinza.l}%)`;

    
        // Anexa os spans ao botão
       // buttonStart.appendChild(shadow);
        buttonStart.appendChild(edge);
        buttonStart.appendChild(front);


        buttonStart.onclick = () => {
          document.body.style.backgroundColor = "white";
          appContainer.style.backgroundColor = "white";
          instructionsContainer.style.display = 'none'; // Oculta as instruções
            if (!this.currentModuleName) {
                this.renderModules(appContainer);
            }
    
            else {
                this.modules[this.currentModuleName].app.render();
            }
        
        };

    }

    renderModules(appContainer) {
        appContainer.innerHTML = '';
        const titulo = document.createElement('button');
        titulo.className = 'shadow__btn';
        titulo.textContent = 'SELECIONE UM MÓDULO';
        titulo.style.setProperty('--shadow-color', 'white');

        appContainer.appendChild(titulo);
 

        Object.keys(this.modules).forEach(moduleName => {
            const module = this.modules[moduleName];
            // Cria o elemento button
            const button = document.createElement('button');
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
            front.textContent = moduleName;  // Definindo o texto como o nome do módulo


            // Suponha que cada módulo tenha uma propriedade color em formato HSL
            const hslColor = this.modules[moduleName].color; // Objeto { h, s, l }

            const hslCor_Fraca = { h: 60, s: 96, l: 79 };
            const hslCor_Fraca2 = { h: 288, s: 96, l: 87 };

            if(hslColor.h == hslCor_Fraca.h || hslColor.h == hslCor_Fraca2.h){
                console.log("entrei");
                front.style.color = "black"; //troca cor da fonte
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
            // Aplica a cor ao front e a sombra ao shadow
            front.style.backgroundColor = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`;
            shadow.style.background = `hsl(${shadowColor.h}, ${shadowColor.s}%, ${shadowColor.l}%)`;
   
        
            // Anexa os spans ao botão
            button.appendChild(shadow);
            button.appendChild(edge);
            button.appendChild(front);
        
            // Define a função de clique
            button.onclick = () => {
                this.changeModule(moduleName);
            };
        
            // Anexa o botão ao container
            appContainer.appendChild(button);
        });
         // Adiciona o botão de configuração
         const configButton = document.createElement('button');
         configButton.className = 'pushable';

         // Cria o span para a sombra
         const shadow = document.createElement('span');
         shadow.className = 'shadow';
     
         // Cria o span para a borda
         const edge = document.createElement('span');
         edge.className = 'edge';
     
         // Cria o span para a frente (parte visível com texto)
         const front = document.createElement('span');
         front.className = 'front';
         front.textContent = 'Configuração';  // Definindo o texto como o nome do módulo
     
        configButton.appendChild(shadow);
        configButton.appendChild(edge);
        configButton.appendChild(front);

         configButton.onclick = () => {
             this.renderConfig(appContainer);
         };
         appContainer.appendChild(configButton);
    }

    renderConfig(appContainer) {
            appContainer.innerHTML = '';  // Limpa o conteúdo anterior
            
          
            
              // Cria e adiciona o contêiner para o botão 'Menu'
              const menuContainer = document.createElement('div');
              const buttonMenu = document.createElement('button');
              buttonMenu.className = 'button';
              buttonMenu.innerText = 'Menu';
              menuContainer.appendChild(buttonMenu);
              buttonMenu.onclick = () => {
                console.log("voltar menu config");
                voltarMenuConfig(); // ta no inicio de app.js
              };
          

              appContainer.appendChild(menuContainer);

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
    this.atualizaVariaveis_off().then(() => {
        console.log("Atualização das variáveis concluída.");
    }).catch(error => {
        console.error("Erro ao atualizar variáveis: ", error);
    });

    
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

      async atualizaVariaveis_off() {
        const variaveis = ['v_e_0', 'v_e_45', 'v_e_90', 'v_e_180', 'v_e_270', 'v_e_360', 'v_d_0', 'v_d_45', 'v_d_90', 'v_d_180', 'v_d_270', 'v_d_360'];
        const promises = variaveis.map(variavel => 
          firebase.database().ref(`/variaveis/${variavel}`).once('value').then(snapshot => {
            window[variavel] = snapshot.val(); // Atualiza a variável global
          })
        );

        await Promise.all(promises);
        console.log("Todas variáveis foram atualizadas.");
    }

}

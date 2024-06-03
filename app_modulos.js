async function voltarMenuConfig() {
    await app_modulo1.atualizaVariaveis_off();
    const appContainer = document.getElementById('app');
    appModulos.renderModules(appContainer);
  }

class App_Modulos {
    constructor() {
        this.modules = {};
        this.currentModuleName = null;
        
    }

    addModule(name, app, instructionsImg) {
        this.modules[name] = app;
        this.instructionsImg = instructionsImg;
    }

    changeModule(moduleName) {
        this.currentModuleName = moduleName;
        this.render();
    }

    render() {
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = '';

        const instructionsContainer = document.createElement('div');

        instructionsContainer.className = 'instructions-container';
        instructionsContainer.innerHTML = ` <button className="button start-level-btn" id="b_Start">Start Level</button><img src="${this.instructionsImg}" alt="Instructions" class="instructions-img">`;
    
    
    
        // Adiciona o container de instruções e o botão ao appContainer
       
        appContainer.appendChild(instructionsContainer);
        const buttonStart = document.getElementById('b_Start');
        buttonStart.innerText = `Iniciar Módulo ${this.currentModuleName}`;
        buttonStart.className = 'button start-level-btn';
    

        buttonStart.onclick = () => {
       
            instructionsContainer.style.display = 'none'; // Oculta as instruções
            if (!this.currentModuleName) {
                this.renderModules(appContainer);
            }
    
            else {
                this.modules[this.currentModuleName].render();
            }
        
        };

    }

    renderModules(appContainer) {
        appContainer.innerHTML = '';
        Object.keys(this.modules).forEach(moduleName => {
            const button = document.createElement('button');
            button.innerText = `${moduleName}`;
            button.className = 'button';
            button.onclick = () => {
                this.changeModule(moduleName);
            };
            appContainer.appendChild(button);
        });
         // Adiciona o botão de configuração
         const configButton = document.createElement('button');
         configButton.innerText = 'Configuração';
         configButton.className = 'button';
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

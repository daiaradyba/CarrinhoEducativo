class App {
    constructor() {
      this.levels = {};
      this.currentLevelName = 'menu';
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
  } else {
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
      appContainer.innerHTML = '<h1>Blockly Code Generator</h1>';
  
      Object.keys(this.levels).forEach(levelName => {
        const button = document.createElement('button');
        button.className = 'button';
        button.innerText = `LEVEL ${levelName.toUpperCase()}`;
        button.onclick = () => {
          this.changeLevel(levelName);
        };
        appContainer.appendChild(button);
      });
    }
  
    render() {
      const appContainer = document.getElementById('app');
      if (this.currentLevelName === 'menu') {
        this.renderMenu(appContainer);
      } else if (this.levels[this.currentLevelName]) {
        this.levels[this.currentLevelName].render(appContainer);
      }
    }
}

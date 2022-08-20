var Engine = (function(global) {
  // Predefine the variables, create the canvas element, grab the 2D context for that canvas,
  // set the canvas element's height/width and add it to the DOM.
  var doc = global.document,
      win = global.window,
      canvas = doc.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      lastTime,
      gameOver;

    const modal = document.querySelector('.modal');
    const playAgain = document.querySelector('.modal-play-again');

  playAgain.addEventListener('click', function() {
      modal.classList.toggle('background');
      modal.classList.toggle('visible');
      player.reset();
      player.youWin = false;
      win.requestAnimationFrame(main);
  })

  canvas.width = 505;
  canvas.height = 606;
  doc.body.appendChild(canvas);

  // This function serves as the kickoff point for the game loop itself
  // and handles properly calling the update and render methods.
  function main() {

    // Get our time delta information which is required if the game requires smooth animation.
    var now = Date.now(),
    dt = (now - lastTime) / 1000;

    //Call our update/render functions, pass along the time delta to
    //our update function.
    update(dt);
    render();

    //Set our lastTime variable which is used to determine the time delta
    //for the next time this function is called.
    lastTime = now;

    //Use the browser's requestAnimationFrame function to call this
    //function again as soon as the browser is able to draw another frame.
    if (player.youWin === true) {
      win.cancelAnimationFrame(gameOver);
      modal.classList.toggle('visible');
    } else {
        gameOver = win.requestAnimationFrame(main);
      }
  }

  // This function does initial setup, setting the lastTime variable.
  function init() {
    reset();
    lastTime = Date.now();
    main();
  }

  function update(dt) {
    updateEntities(dt);
  }

  // This function loops through all of the
  // objects within allEnemies array as defined in app.js and calls
  // their update() methods. It will then call the update function for the
  // player object.
  function updateEntities(dt) {
    allEnemies.forEach(function(enemy) {
      enemy.update(dt);
    });

    player.update();
  }

  // This function initially draws the "game level", it will then call
  // the renderEntities function.
  function render() {
    // This array holds the relative URL to the image used
    // for that particular row of the game level.
    var rowImages = [
      'images/water-block.png',   // Top row is water
      'images/stone-block.png',   // Row 1 of 3 of stone
      'images/stone-block.png',   // Row 2 of 3 of stone
      'images/stone-block.png',   // Row 3 of 3 of stone
      'images/grass-block.png',   // Row 1 of 2 of grass
      'images/grass-block.png'    // Row 2 of 2 of grass
    ],

    numRows = 6,
    numCols = 5,
    row, col;

    // Before drawing, clear existing canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Loop through the number of rows and columns defined above
    // and  draw the image for that portion of the "grid"
    for (row = 0; row < numRows; row++) {
      for (col = 0; col < numCols; col++) {
        ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
      }
    }
    renderEntities();
  }

  // This function is called by the render function.
  // Its purpose is to call the render functions of enemy and player entities within app.js
  function renderEntities() {
    // Loop through all of the objects within the allEnemies array and call
    // the render function.
    allEnemies.forEach(function(enemy) {
      enemy.render();
    });

    player.render();
  }

  function reset() {
  }

  // Load all of the images need to be drawn the game level.
  // Then set init as the callback method, so that when
  // all of these images are loaded the game will start.
  Resources.load([
    'images/stone-block.png',
    'images/water-block.png',
    'images/grass-block.png',
    'images/enemy-bug.png',
    'images/char-boy.png'
  ]);
  Resources.onReady(init);

  // Assign the canvas' context object to the global variable.
  global.ctx = ctx;

})(this);

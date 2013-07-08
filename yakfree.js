$(function(){
  var self,
      height,
      width,
      canvas,
      gameLoopInterval,
      leftBank = {type: 'land', bank:[]},
      rightBank = {type: 'land', bank:[]},
      kayak = {type: 'kayak'},
      objects = [leftBank, rightBank],
      highScore = 0,
      startTime;
      
      
  var yakfree = function(){
    $(document).on('keydown', this.start);
    $(document).on('click', '.yakfree-label.end-game a', this.reset)
    
    canvas = $('canvas')[0];
    canvas.width = width = $('body').width();
    canvas.height = height = $('body').height();
    
    setTimeout(this.drawInitial, 100);
  }
  
  yakfree.prototype.reset = function(){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,width,height);
    
    $(document).on('keydown', self.start);
    $('.header').removeClass('hidden');
    $('.yakfree-label.start').show();    
    $('.yakfree-label.end-game').hide();
    leftBank = {type: 'land', bank:[]};
    rightBank = {type: 'land', bank:[]};
    kayak = {type: 'kayak'};
    setTimeout(self.drawInitial, 100);
  }
  
  yakfree.prototype.drawInitial = function(){    
    var left = 300, 
        right = width - 300,
        iterations = Math.ceil(height / 20) + 1;
    leftBank['prepend'] = [[0,height], [0,0]];
    rightBank['prepend'] = [[width,height], [width,0]];
    for(var i = 0; i < iterations; i++){
      leftBank['bank'].push(left = self.randShore(left, 0, width - right - 100));
      rightBank['bank'].push(right = self.randShore(right, left + 100, width)); 
    }
    kayak['center'] = width/2;
    
    self.render(leftBank);
    self.render(rightBank);
    self.render(kayak);
  }
  
  yakfree.prototype.randShore = function(curr, min, max){
    return Math.min(Math.max((Math.random() - .5)*40 + curr, min), max);
  }
  
  yakfree.prototype.start = function(e){
    if(e.which === 40){
      start = Date.now();
      $('.header').addClass('hidden');
      $(document).off('keydown', self.start);
      $(document).on('keydown', self.control);
      
      $('.yakfree-label.start').hide();
      
      // start game loop
      gameLoopInterval = setInterval(self.gameLoop, 100)
    }
  }
  
  yakfree.prototype.gameLoop = function(){
    $('.yakfree-label.score span').html(Date.now() - start);
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,width,height);
  
    // update bank
    leftBank['bank'].shift();
    rightBank['bank'].shift();    
    leftBank['bank'].push(self.randShore(leftBank['bank'][leftBank['bank'].length - 1], 0, rightBank['bank'][rightBank['bank'].length - 1] - 100));
    rightBank['bank'].push(self.randShore(rightBank['bank'][rightBank['bank'].length - 1], leftBank['bank'][leftBank['bank'].length - 1] + 100, width));
    
    // render game
    var collision = false;
    collision = self.render(leftBank) || collision;
    collision = self.render(rightBank) || collision;
    collision = self.render(kayak) || collision;
    
    if(collision){
      self.endGame();
    }
  }
  
  yakfree.prototype.control = function(e){
    if(e.which === 37 || e.which === 39){
      var ctx = canvas.getContext('2d'),
          dir = e.which - 38;
      ctx.clearRect(kayak['center'] - 10, 418, 35, 45);
      kayak['center'] = kayak['center'] + dir*5;
      self.renderKayak(kayak, 0-dir);
    }
  }
  
  yakfree.prototype.endGame = function(){
    clearInterval(gameLoopInterval);
    var score = Date.now() - start;
    $('.yakfree-label.score span').html(Date.now() - start);
    $('.yakfree-label.high-score span').html(highScore = Math.max(highScore, score));
    $('.yakfree-label.end-game').show();
    $(document).off('keydown', self.control);
  }
  
  yakfree.prototype.render = function(obj){
    switch(obj['type']){
      case 'land': return self.renderLand(obj); 
      case 'kayak': return self.renderKayak(obj);
    }
  }
  
  yakfree.prototype.renderLand = function(land){
    var ctx = canvas.getContext('2d'),
        collision = false;
    ctx.save();
        
    ctx.beginPath();
    ctx.moveTo(land['prepend'][0][0], land['prepend'][0][1]);
    ctx.lineTo(land['prepend'][1][0], land['prepend'][1][1]);
    for(var i = 0; i < land['bank'].length; i++){
      ctx.lineTo(land['bank'][i], i*20);
      if((i === 21 || i === 22) && land['bank'][i] > kayak['center'] - 8 && land['bank'][i] < kayak['center'] + 8){
        collision = true;
      }
    }
    ctx.closePath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#641';
    ctx.fillStyle = '#CA6';
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    
    return collision;
  }
  
  yakfree.prototype.renderKayak = function(kayak, angle){    
    var ctx = canvas.getContext('2d');
    ctx.save();
    
    ctx.translate(kayak['center'], 420);
    ctx.rotate(angle * 0.45);
    
    ctx.beginPath();
    ctx.moveTo(10, 0);
    ctx.bezierCurveTo(0, 15, 0, 25, 10, 40);
    ctx.bezierCurveTo(20, 25, 20, 15, 10, 0);
    
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#E00';
    ctx.fillStyle = '#FAA';
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }
  
  self = new yakfree();
});

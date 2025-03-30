// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  window.gameManager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  
  // 在iframe中确保游戏自动开始
  if (window !== window.top) {
    console.log("2048游戏在iframe中加载");
    
    // 确保初始方块显示
    setTimeout(function() {
      if (document.querySelectorAll('.tile').length === 0) {
        console.log("尝试重新初始化游戏...");
        if (window.gameManager) {
          window.gameManager.restart();
        }
      }
    }, 500);
    
    // 确保重新开始游戏按钮正常工作
    document.addEventListener('DOMContentLoaded', function() {
      var restart = document.querySelector('.restart-button');
      if (restart) {
        restart.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          console.log("点击了新游戏按钮");
          if (window.gameManager) {
            window.gameManager.restart();
          }
          return false;
        }, true);
      }
    });
  }
});

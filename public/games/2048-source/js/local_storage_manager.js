window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    try {
      return this._data[id] = String(val);
    } catch (e) {
      console.error("Storage error:", e);
    }
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() {
  this.bestScoreKey     = "bestScore2048";
  this.gameStateKey     = "gameState2048";

  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
  
  // 如果在iframe中但localStorage可用，检查是否能真正读写
  if (supported && window !== window.top) {
    try {
      this.storage.setItem("test_iframe", "1");
      this.storage.removeItem("test_iframe");
    } catch (e) {
      console.warn("localStorage在iframe中不可用，使用内存存储代替");
      this.storage = window.fakeStorage;
    }
  }
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";

  try {
    var storage = window.localStorage;
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function () {
  try {
    return this.storage.getItem(this.bestScoreKey) || 0;
  } catch (e) {
    console.error("获取最高分失败:", e);
    return 0;
  }
};

LocalStorageManager.prototype.setBestScore = function (score) {
  try {
    this.storage.setItem(this.bestScoreKey, score);
  } catch (e) {
    console.error("设置最高分失败:", e);
  }
};

// Game state getters/setters and clearing
LocalStorageManager.prototype.getGameState = function () {
  try {
    var stateJSON = this.storage.getItem(this.gameStateKey);
    return stateJSON ? JSON.parse(stateJSON) : null;
  } catch (e) {
    console.error("获取游戏状态失败:", e);
    return null;
  }
};

LocalStorageManager.prototype.setGameState = function (gameState) {
  try {
    this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
  } catch (e) {
    console.error("保存游戏状态失败:", e);
  }
};

LocalStorageManager.prototype.clearGameState = function () {
  try {
    this.storage.removeItem(this.gameStateKey);
  } catch (e) {
    console.error("清除游戏状态失败:", e);
  }
};

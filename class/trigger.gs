'use strict'

class Trigger {

  /**
   * トリガーに関するコンストラクタ
   * @constructor
   * @param {string} functionName - 関数名
   */
  constructor(functionName) {
    /** @type {string} */
    this.functionName = functionName;
  }

  /**
   * 指定日時のトリガーを設定するメソッド
   * @param {Date} triggerTime - トリガーをセットする指定日時
   * @return {Trigger} Trigger オブジェクト
   */
  createTimeBased(triggerTime) {
    ScriptApp.newTrigger(this.functionName).
      timeBased().
      at(triggerTime).
      create();
    return this;
  }

  /**
   * トリガーを削除するメソッド
   * @return {Trigger} Trigger オブジェクト
   */
  delete() {
    const triggers = ScriptApp.getProjectTriggers();
    triggers.forEach(trigger => {
      if (trigger.getHandlerFunction() === this.functionName) ScriptApp.deleteTrigger(trigger);
    });
    return this;
  }

}
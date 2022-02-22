'use strict'

function myFunction() {

  const functionName = 'targetFunction';
  const trigger = new Trigger(functionName);
  const date = new Date();
  const time = '10:00';
  date.setHours(...time.split(':'));

  trigger.
    delete().
    createTimeBased(date);
}

function deleteTriggers(functionName) {
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => {
    if (trigger.getHandlerFunction() !== functionName) return;
    ScriptApp.deleteTrigger(trigger);
  });
}

function setTrigger(functionName, date) {
  ScriptApp.newTrigger(functionName).
    timeBased().
    at(date).
    create();
}

function targetFunction() { }
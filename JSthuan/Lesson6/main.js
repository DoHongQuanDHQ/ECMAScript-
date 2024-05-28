function taskA(callBack) {
  setTimeout(() => {
    console.log("TaskA done");
    callBack();
  }, 2000);
}
function taskB(callBack) {
  setTimeout(() => {
    console.log("TaskB done");
    callBack();
  }, 4000);
}
function taskC(callBack) {
  setTimeout(() => {
    console.log("TaskC done");
    callBack();
  }, 6000);
}

// A -> B -> C
taskA(() => {
  taskB(() => {
    taskC(() => {
      console.log("xong viec");
    });
  });
});

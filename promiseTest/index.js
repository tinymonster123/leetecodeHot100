function orderFoodWithPromiseNoTimeout(dish) {
  console.log(`下单了: ${dish}`);
  return new Promise((resolve, reject) => {
    // 返回一个 Promise 对象
    // 没有 setTimeout，这部分代码同步执行
    if (dish === "红烧肉") {
      reject(`不好意思，${dish} 今天卖完了`); // 承诺失败
    } else {
      const food = `${dish} 做好了 (Promise 版)`;
      resolve(food); // 承诺成功兑现
    }
  });
}

// 点一份宫保鸡丁
orderFoodWithPromiseNoTimeout("宫保鸡丁")
  .then((food) => {
    // 成功时的处理
    console.log(`开心！拿到了: ${food}`);
    return orderFoodWithPromiseNoTimeout("米饭"); // .then 可以链式调用，返回新的 Promise
  })
  .then((rice) => {
    console.log(`还有: ${rice}`);
    console.log("宫保鸡丁配米饭，完美！");
  })
  .catch((error) => {
    // 失败时的处理
    console.error(`出错了: ${error}`);
  })
  .finally(() => {
    console.log("宫保鸡丁订单流程结束。"); // 修改了日志以便区分
  });

console.log("点完单了 (Promise NO TIMEOUT)，先去玩会儿手机...");

// 点一份红烧肉，会触发 reject
orderFoodWithPromiseNoTimeout("红烧肉")
  .then((food) => {
    console.log(`开心！拿到了: ${food}`);
  })
  .catch((error) => {
    console.error(`太遗憾了: ${error}`);
  })
  .finally(() => {
    console.log("红烧肉订单流程结束。");
  });


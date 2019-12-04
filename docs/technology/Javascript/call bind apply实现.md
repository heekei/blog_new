# call bind apply 的实现

## call

```js
Function.prototype._call = function (ctx, param){
  var obj = Object.assign({},ctx);
  var id = +new Date();//利用时间戳生成唯一标识
  obj[id] = this;
  var ret = obj[id](param)
  delete obj[id];
  return ret;
}
```

## bind

```js
Function.prototype._bind = function(ctx){
  var obj = Object.assign({},ctx);
  var args = Array.prototype.slice.call(arguments,0);
  var id = +new Date();//利用时间戳生成唯一标识
  obj[id] = this;
  return function(){
    var args2 = Array.prototype.slice.call(arguments,0);
    var args3 = args.concat(args2)
    var ret = obj[id](...args,...args2);
    delete obj[id];
    return ret
  };
}
```

## apply

```js
Function.prototype._apply = function(ctx, params){
  var obj = Object.assign({},ctx);
  var id = +new Date();//利用时间戳生成唯一标识
  obj[id] = this;
  var ret = obj[id](...params);
  delete obj[id];
  return ret;
}
```

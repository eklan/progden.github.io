// define({obj})
define({
    color: "black",
    size: "unisize"
});

// define(f), f: void -> obj
define(function () {
    //Do setup work here
    return {
        color: "black",
        size: "unisize"
    }
});
// define([deps], f), f: deps -> obj
define(["./cart", "./inventory"], function(cart, inventory) {
        //return an object to define the "my/shirt" module.
        return {
            color: "blue",
            size: "large",
            addToCart: function() {
                inventory.decrement(this);
                cart.add(this);
            }
        }
    }
);

// define([deps], f1), f1: (deps) -> f2
define(["my/cart", "my/inventory"],
    function(cart, inventory) {
        //return a function to define "foo/title".
        //It gets or sets the window title.
        return function(title) {
            return title ? (window.title = title) :
                   inventory.storeName + ' ' + cart.name;
        }
    }
);

// define(f), f: (require, exports, module) -> function
define(function(require, exports, module) {
        var a = require('a'),
            b = require('b');

        //Return the module value
        return function () {};
    }
);

// define("name", [deps], f), f: deps
define("foo/title",
    ["my/cart", "my/inventory"],
    function(cart, inventory) {
        //Define foo/title object in here.
    }
);


// -----------

requirejs - module

使用config定義path中的是module
requirejs.config({
	path: {
		module: "jsPath"
	}	
});

當我們使用module時，都可以有拿到module物件的情形
require(["module"], function(module){
	//module.prop;
	//module.method;
});

接下來看看module的定義
	1. 直接回傳obj {}
	2. 回傳function -> 回傳obj
	3. 回傳function -> 不回傳
	4. 回傳function -> 回傳function

# DEPS-ANALYSER

通过改写 node 中的 require 函数简单实现依赖分析。

## 用法
```javascript
var depsAnalyser = require('deps-analyser');
depsAnalyser(entryFile);
/** 你将得到
 * {
 *	"/Users/lcfme/Desktop/deps-analyser/test/c.js": {
 *		"exports": 1,
 *		"id": "/Users/lcfme/Desktop/deps-analyser/test/c.js",
 *		"deps": []
 *	},
 *	"/Users/lcfme/Desktop/deps-analyser/test/b.js": {
 *		"exports": 2,
 *		"id": "/Users/lcfme/Desktop/deps-analyser/test/b.js",
 *		"deps": [{
 *			"exports": 1,
 *			"id": "/Users/lcfme/Desktop/deps-analyser/test/c.js",
 *			"deps": []
 *		}]
 *	},
 *	"/Users/lcfme/Desktop/deps-analyser/test/d.js": {
 *		"exports": 4,
 *		"id": "/Users/lcfme/Desktop/deps-analyser/test/d.js",
 *		"deps": []
 *	},
 *	"./test/a.js": {
 *		"exports": {
 *			"msg": "ok"
 *		},
 *		"id": "./test/a.js",
 *		"deps": [{
 *			"exports": 2,
 *			"id": "/Users/lcfme/Desktop/deps-analyser/test/b.js",
 *			"deps": [{
 *				"exports": 1,
 *				"id": "/Users/lcfme/Desktop/deps-analyser/test/c.js",
 *				"deps": []
 *			}]
 *		}, {
 *			"exports": 4,
 *			"id": "/Users/lcfme/Desktop/deps-analyser/test/d.js",
 *			"deps": []
 *		}]
 *	}
 *}
```

# 警告

无法分析引用 node_modules 中的依赖，因为无法修复路径。

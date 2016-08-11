fis.project.setProjectRoot('src');
var shelljs = require('shelljs')
fis.match('**.{js,jsx}', {
	domain: '.'
})

fis.match('**.{css,less}', {
	domain: '.'
})

fis.hook('commonjs');

fis.hook('node_modules');
fis.match('/{node_modules,modules}/**.{js,jsx}', {
		isMod: true
	})
	.match('**.md', {
		release: false
	})
	.match('/(**).jsx', {
		parser: fis.plugin('babel-5.x', {
			blacklist: ['regenerator'],
			stage: 3
		}),
		isMod: true,
		id: '$1',
		rExt: 'js'
	})
	.match(/\/([^\.]*)\.(less|css)/, {
		isMod: true,
		rExt: 'js',
		id: '$1.$2',
		release: '$0.$2',
		parser: [
			fis.plugin('less-2.x', {}),
			fis.plugin('css2js')
		]
	})
	.match('**.{js,es,es6,jsx,ts,tsx}', {
		// dep | dependency 【推荐】 简单的标记依赖，并将js语句中对应的 require 语句去除。fis 的资源加载程序能够分析到这块，并最终以 <link> 的方式加载 css.
		// embed | inline 将目标 css 文件转换成 js 语句, 并直接内嵌在当前 js 中，替换原有 require 语句。
		// jsRequire 将目标 css 文件转换成 js 语句，但是并不内嵌，而是产出一份同名的 js 文件，当前 require 语句替换成指向新产生的文件。
		preprocessor: fis.plugin('js-require-css', {
			mode: 'abc'
		})
	})
	// .match(/pages\/([^\/]*).*\.js/, {
	// 	packTo: 'pkg/$1.js'
	// })

fis.media('dev')
	.match('::package', {
		packager: fis.plugin('deps-pack', {
			// react
			'pkg/react.js': [
				'/node_modules/react/react.js',
				'/node_modules/react/react.js:deps',
				'/node_modules/react-dom/index.js',
				'/node_modules/react-dom/index.js:deps',
				'/node_modules/react-redux/lib/index.js',
				'/node_modules/react-redux/lib/index.js:deps'
			],
			'pkg/index.js': [
				'/pages/index/index.jsx',
				'/pages/index/index.jsx:deps'
			],
			'pkg/redux.js': [
				'/pages/redux/index.jsx',
				'/pages/redux/index.jsx:deps'
			],
			'pkg/btns.js': [
				'/pages/btns/index.jsx',
				'/pages/btns/index.jsx:deps'
			],
			// js-require-css 不能设置 mode: 'jsRequire'，改变了css的isCssLike属性
			// 'pkg/index.css': [
			// 	'/pages/index/index.jsx',
			// 	'/pages/index/index.jsx:deps'
			// ]
		})
	})
	.match('**', {
		deploy: [
			function(options, modified, total, next) {
				shelljs.rm('-rf', './dev');
				next();
			},
			fis.plugin('local-deliver', {
				to: './dev'
			})
		]
	})
fis.project.setProjectRoot('src');
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
	.match('/(**).jsx', {
		parser: fis.plugin('babel-5.x', {
			blacklist: ['regenerator'],
			stage: 3
		}),
		isMod: true,
		id: '$1',
		rExt: 'js'
	})
	.match('*.less', {
		parser: fis.plugin('less-2.x', {}),
		rExt: '.css'

	})
	.match('**.{js,es,es6,jsx,ts,tsx}', {
		preprocessor: fis.plugin('js-require-css', {
			mode: 'jsRequire'
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
				'/node_modules/react-dom/index.js:deps'
			],
			'pkg/index.js': [
				'/pages/index/index.jsx',
				'/pages/index/index.jsx:deps'
			],
			// not work
			'pkg/index.css' : [
				'/pages/index/index.jsx:deps'
			]
		})
	})
	.match('**', {
		deploy: fis.plugin('local-deliver', {
			to: './dev'
		})
	})
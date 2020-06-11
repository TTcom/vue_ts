module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	chainWebpack: (config) => {
		config.module
			.rule("eslint")
			.use("eslint-loader")
			.loader("eslint-loader")
			.tap(options => {
				options.fix = true; //设置自动修复eslint
				return options;
			})
	}
}
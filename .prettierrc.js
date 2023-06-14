const pluginSortImports = require("@trivago/prettier-plugin-sort-imports");

const parser = {
	...pluginSortImports.parsers.typescript,
};

const plugins = {
	parsers: {
		typescript: parser,
	},
};

module.exports = {
	plugins: [plugins],
	semi: false,
	tabWidth: 4,
	useTabs: true,
	singleQuote: true,
	printWidth: 120,
	arrowParens: "always",
	jsxSingleQuote: true,
	bracketSpacing: false,
	singleAttributePerLine: true,
	importOrder: ["<THIRD_PARTY_MODULES>", "^../(.*)", "^./(.*)", "^@/assets/(.*)$", "^@/public/(.*)$", "(.scss)$"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};

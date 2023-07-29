/**
 * @typedef { import('prettier').Config } MainPrettierConfig
 * @typedef { import('prettier-plugin-organize-attributes/lib').PrettierPluginOrganizeAttributesParserOptions } AttributePrettierConfig
 * @typedef { (MainPrettierConfig & AttributePrettierConfig) } PrettierConfig
 *
 * @type { PrettierConfig }
 */
module.exports = {
	trailingComma: 'es5',
	tabWidth: 4,
	singleQuote: true,
	useTabs: true,
	printWidth: 120,
	htmlWhitespaceSensitivity: 'ignore',
	arrowParens: 'avoid',
	quoteProps: 'preserve',

	attributeSort: 'ASC',
	attributeGroups: [
		'$ANGULAR_STRUCTURAL_DIRECTIVE',
		'$ANGULAR_ANIMATION',
		'$ANGULAR_ANIMATION_INPUT',
		'$ANGULAR_ELEMENT_REF',
		'^btn',
		'^link',
		'$ID',
		'$CLASS',
		'^i18n-alt',
		'^alt',
		'^i18n-label',
		'^label',
		'^i18n-placeholder',
		'^placeholder',
		'^i18n-title',
		'^title',
		'^i18n-tooltip',
		'^tooltip',
		'$DEFAULT',
		'^\\[(?!\\(|@|attr\\.data-)',
		'$ANGULAR_TWO_WAY_BINDING',
		'$ANGULAR_OUTPUT',
		'^\\[attr\\.data-',
		'^data-',
	],
};

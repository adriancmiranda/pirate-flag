module.exports = (packageJson, info, opts = {}) => {
	const pkg = Object(packageJson);
	const version = pkg.version ? String(pkg.version) : '';
	const name = pkg.name ? String(pkg.name) : '';
	const useOwn = Array.isArray(opts.image) && opts.image.length;
	const prefix = opts.comment ? '/*!\n' : '';
	const suffix = opts.comment ? ' */' : '';
	const star = opts.comment ? ' * ' : '';
	const image = useOwn ? opts.image : [
		'   /     \'      /  / ',
		'  /__      ___ (  /   ',
		'  \\--`-\'-|`---\\ |  ',
		'   |\' _/   ` __/ /   ',
		'   \'._  W    ,--\'   ',
		'      |_:_._/         ',
		'                      ',
	];
	const line = `\n${star}`;
	const columns = opts.columns ? opts.columns : image[0].length;
	const space = version.length ? ' ' : '';
	const diff = (columns - space.length - name.length - version.length) + 1;
	const blank = new Array(diff > 0 && (diff || 0)).join(' ');
	const lineChar = opts.lineChar ? opts.lineChar : '~';
	const hr = new Array(parseInt(blank.length, 10)).join(lineChar) + ' ';
	const footer = [line].concat(Object.keys(Object(info)).map(key => `@${key} ${info[key]}`));
	if (name.length && version.length) {
		image.push(hr + name + space + `v${version}` + footer.join(line));
	}
	return `${prefix}${star}${image.join(line)}${suffix}`;
};

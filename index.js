module.exports = (pkg, info, opts = {}) => {
	const useOwn = Array.isArray(opts.image) && opts.image.length;
	const image = useOwn ? opts.image : [
		'   /     \'      /  / ',
		'  /__      ___ (  /   ',
		'  \\--`-\'-|`---\\ |  ',
		'   |\' _/   ` __/ /   ',
		'   \'._  W    ,--\'   ',
		'      |_:_._/         ',
		'                      '
	];
	const line = '\n';
	const columns = opts.columns ? opts.columns : image[0].length;
	const space = pkg.version.length ? ' ' : '';
	const diff = columns - space.length - pkg.name.length - pkg.version.length + 1;
	const blank = new Array(diff > 0 && (diff || 0)).join(' ');
	const lineChar = opts.lineChar ? opts.lineChar : '~';
	const hr = new Array(parseInt(blank.length, 10)).join(lineChar) + ' ';
	const footer = [line].concat(Object.keys(info).map(key => `@${key} ${info[key]}`));
	image.push(hr + pkg.name + space + `v${pkg.version}` + footer.join(line));
	return image.join(line);
};

const pirateFlag = require('../');
const pkg = require('../package.json');

test('should print correctly', () => {
	const wkidd = pirateFlag(pkg, {
		homepage: pkg.homepage,
		author: pkg.author,
	});
	expect(toString.call(wkidd)).toBe('[object String]');
});

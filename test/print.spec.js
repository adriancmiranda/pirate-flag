import test from 'ava-spec';
import pirateFlag from '../';
import pkg from '../package.json';

test('should print correctly', t => {
	const wkidd = pirateFlag(pkg, {
		homepage: pkg.homepage,
		author: pkg.author,
	});
	t.is(toString.call(wkidd), '[object String]');
});

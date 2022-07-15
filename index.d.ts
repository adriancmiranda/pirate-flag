interface PirateFlagPack {
	name: string;
	version: string | number;
}

interface PirateFlagOptions {
	comment?: boolean;
	columns?: number;
	lineChar?: string;
	image?: string[];
}

declare module "pirate-flag" {
	function pirateFlag(
		pack?: PirateFlagPack,
		libInfo?: Record<string, unknown>,
		options?: PirateFlagOptions
	): string;
	export = pirateFlag;
}

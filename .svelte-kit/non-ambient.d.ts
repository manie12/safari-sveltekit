
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/safaris";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/safaris": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/safaris" | "/safaris/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/IMG-20250908-WA0010.jpg" | "/IMG-20250908-WA0011.jpg" | "/IMG-20250908-WA0012.jpg" | "/IMG-20250908-WA0013.jpg" | "/IMG-20250908-WA0014.jpg" | "/IMG-20250908-WA0015.jpg" | "/IMG-20250908-WA0016.jpg" | "/IMG-20250908-WA0017.jpg" | "/IMG-20250908-WA0018.jpg" | "/IMG-20250908-WA0019.jpg" | "/IMG-20251012-WA0075.jpg" | "/IMG-20251013-WA0037.jpg" | "/IMG-20251013-WA0053.jpg" | "/IMG-20251013-WA0060.jpg" | "/IMG-20251013-WA0078.jpg" | "/IMG-20251013-WA0079.jpg" | "/IMG-20251013-WA0087.jpg" | "/IMG-20251013-WA0089(1).jpg" | "/IMG-20251013-WA0104.jpg" | "/IMG-20251013-WA0107.jpg" | "/IMG-20251013-WA0112(2).jpg" | "/IMG_20251012_163712_696.jpg" | "/IMG_20251012_181027_675.jpg" | "/IMG_20251012_194141_081.jpg" | "/IMG_20251012_195805_544.jpg" | "/IMG_20251013_070710_147.jpg" | "/IMG_20251013_091542_287.jpg" | "/IMG_20251013_102105_013.jpg" | "/IMG_20251013_135304_222.jpg" | "/IMG_20251013_135306_007.jpg" | "/IMG_20251015_173748_704.jpg" | "/IMG_20251018_145921_031.jpg" | "/IMG_20251018_154956_658.jpg" | "/IMG_20251116_135709_273.jpg" | "/IMG_20251116_161810_327.jpg" | "/IMG_20251205_172138_578.jpg" | "/IMG_20251219_151818_748.jpg" | "/IMG_20251220_154603_569.jpg" | "/IMG_20251220_171026_920.jpg" | "/VID-20251012-WA0077.mp4" | "/VID-20251012-WA0079.mp4" | "/ak-forest.webp" | "/ak-guide.webp" | "/ak-japan.webp" | "/ak-morocco.webp" | "/ak-nile.webp" | "/file_00000000d38071f5a1957b20917c6ae3.png" | string & {};
	}
}
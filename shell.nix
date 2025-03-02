with import <nixpkgs> {};

stdenv.mkDerivation {
	name = "bombsquad02420";
	buildInputs = [
		git-lfs
		nodejs_22
		pnpm_9
	];
	shellHook = ''
		export PATH="$PWD/node_modules/.bin/:$PATH"
	'';
}

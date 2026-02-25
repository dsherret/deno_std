hyperfine \
  --warmup=5 \
  --runs=20 \
  "./node_modules/.bin/biome format --write --config-path biome.json" \
  "./node_modules/.bin/oxfmt --config oxcfmt.json" \
  "./node_modules/.bin/dprint fmt --config dprint-oxc.json" \
  "dprint fmt --config dprint-biome.json" \
  "dprint fmt --config dprint-oxc.json" \
  "deno fmt" 2> /dev/null

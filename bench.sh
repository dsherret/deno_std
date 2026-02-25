hyperfine \
  --warmup=3 \
  --runs=10 \
  "./node_modules/.bin/biome format --write --config-path biome.json" \
  "./node_modules/.bin/oxfmt --config oxcfmt.json" \
  "dprint fmt --config dprint-biome.json" \
  "dprint fmt --config dprint-oxc.json" \
  "deno fmt"
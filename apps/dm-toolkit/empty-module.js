// konva's Node build optionally requires the native `canvas` package for
// server-side rendering support. dm-toolkit only ever renders Konva in the
// browser (MapCanvas is loaded via next/dynamic with ssr: false), so
// `canvas` is never actually needed -- but Turbopack still eagerly resolves
// it while collecting page data, and the package isn't installed. This
// empty stub satisfies that resolution without pulling in the real
// (heavy, native) canvas dependency.
module.exports = {};

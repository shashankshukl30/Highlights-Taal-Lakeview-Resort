// Lighthouse CI config for Highlights Taal Lakeview Resort.
// See docs at https://github.com/GoogleChrome/lighthouse-ci.
//
// Routes are picked to cover the conversion path:
//   / → hero + first impression
//   /rooms → the inventory grid (heaviest gallery)
//   /rooms/<slug> → typical room detail (most-trafficked deep page)
//   /contact → booking form (perf matters for form abandonment)
//
// Budgets are intentionally aggressive to match the studio's published
// "98/100 PageSpeed" claim. Tune down if a release legitimately misses
// because of new functionality (e.g. a new hero video).

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm start",
      startServerReadyPattern: "Ready",
      startServerReadyTimeout: 30000,
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/rooms",
        "http://localhost:3000/rooms/premier-king-suite",
        "http://localhost:3000/contact",
      ],
      numberOfRuns: 3,
      settings: {
        preset: "desktop",
        skipAudits: ["uses-http2"],
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.95 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};

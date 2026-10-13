# Verification

Checked in Chrome on October 12, 2026.

- Inventory → milk comparison → review group option → save demo draft → Orders: passed.
- Milk quote: 60 × $4 + $12 = $252; group 60 × $3.20 + $10 + $5 = $207. Savings $45; delivery Oct 13 vs Oct 15.
- Group option disabled at 12 units, enabled at 60 units.
- Search unmatched text → useful empty state → clear filters: passed.
- Pantry category shows 3 products; alphabetical sorting starts with Basmati rice.
- Individual order filter shows 2 underlying sample orders.
- Sales module renders demand table and restock action.
- Supplier product pricing, shipment detail, Escape dialog dismissal: passed.
- Mobile inventory and comparison tested within a 390 × 844 iframe: document width and scroll width both 390px.
- Desktop visual inspection at the available 866px browser viewport.
- No browser console errors observed.
- Node syntax checks and check-data.cjs passed.

This is a functional prototype check, not a full accessibility audit. No live supplier or payment integration exists.

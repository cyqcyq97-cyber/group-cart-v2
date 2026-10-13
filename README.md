# Group Cart v2

An independent, responsive product-design prototype for small grocery stores. Created in a new directory; the old inventory-dashboard project is untouched.

## Run

Open index.html directly, or run `python3 -m http.server 4173` in this directory and visit http://localhost:4173.

No build or dependencies required. Fonts use Google Fonts with local sans-serif fallbacks.

## Present in five minutes

1. Inventory: show how low-stock alerts appear before secondary charts. Distinguish 12 SKUs from 614 inventory units.
2. Select Organic whole milk → Compare restock options.
3. Compare the same 60 units: $252 individually vs $207 in a group. The $45 saving includes shipping and fees. The group arrives two days later, leaving an estimated 1.5-day stockout gap.
4. Change quantity to demonstrate calculated costs; below 24 units, the group option is unavailable.
5. Review either option and save a demo selection. Open Orders to see its clearly labeled demo draft.

## Other interactions

Inventory search, category/status filters, sorting and CSV export; order type filters and sorting; supplier product pricing, capability comparison and shipment detail; sales demand and restock links. Native dialogs support Escape, focus trapping and focus return. Navigation, forms and buttons support keyboard input. Mobile navigation appears at the bottom.

## Data

All records are illustrative, anchored to October 12, 2026. `data.js` is the shared product, supplier, order and pricing model. Inventory value uses wholesale costs. Coverage is stock divided by sample daily unit demand. Sales revenue uses retail prices; the revenue chart is an illustrative seven-day history. Reliability is illustrative, not verified. A group discount applies to unit price only; shipping is $10 plus a $5 service fee. Individual shipping is $12. Group purchase requires 24 units and four participating stores and adds two delivery days. Applicable tax is assumed included in sample unit prices.

Demo drafts live only in sessionStorage for the current browser tab. Nothing contacts a supplier, collects payments or creates real orders. No live APIs or authentication.

## Checks

`node --check app.js` and `node check-data.cjs`.

## GitHub Pages

Upload these files to a NEW repository named `group-cart-v2`. In Settings → Pages choose Deploy from a branch, main, / (root). Do not upload to inventory-dashboard. Relative asset paths and hash routes support GitHub Pages subdirectories.

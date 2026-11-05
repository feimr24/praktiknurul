# Design QA

Result: blocked

## Reference

- Figma file: 2HloliZCiuYjcVB3euGFj8
- Desktop node: 6:37, width 1440 px.
- Mobile node: 6:38, width 390 px.
- High-fidelity code contexts and reference screenshots retrieved for both complete frames.
- Original user-supplied CSS retained in `references/figma-export.css`.

## Implementation

Next.js App Router with plain CSS. Both source compositions are translated from their Figma context, including dimensions, type sizes/weights/line heights, gradients, masks, and source-image crops. Content is real HTML and local image assets, not a screenshot of the page. Native section links, WhatsApp, Maps, email, and back-to-top are implemented. The displayed layout is selected by a CSS breakpoint at 767 px. Other widths scale proportionally; tablet-specific reflow was not supplied in Figma.

## Completed checks

- Production static export compiles successfully.
- All local image, SVG mask, and font files exist and are nonempty.
- Exported HTML internal anchors resolve.
- Contact link destinations and current service labels checked.
- No expiring Figma asset URLs remain in the application.
- No laboratory or health-certificate service restored; Sunday remains “Buat Janji”.

## Unresolved verification

The cloud browser first encountered a connection-refused page before the local preview started. After the preview started, the attempt to acquire that tab was rejected by the browser URL security policy. No alternate browser transport or policy workaround was attempted.

Consequently, implementation screenshots, side-by-side desktop/mobile comparisons, runtime console checks, and live click verification have not been completed. Pixel-perfect equivalence is not certified. This is a verification blocker, not a successful visual QA result. No observed visual differences can be reported without the rendered implementation evidence.

## Next review

At 1440 px and 390 px, compare rendered hero/crop, bento arrangement, schedule typography, storefront crop, and footer against the reference frames. Check 320 px, 768 px, 1024 px, and 1920 px for proportional fit and overflow; verify primary CTA destinations and focus/anchor navigation in a browser.

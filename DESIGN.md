# Design system

## Direction

The site is a restrained editorial personal brand: direct, image-led, and professional. It uses a light canvas and a persistent identity rail rather than a conventional top navigation or a dark technology aesthetic.

## Color

- Paper: `#f5f6f2` for the main page field.
- Surface: `#ffffff` for navigation and content panels.
- Ink: `#171a1f` for primary text and the footer.
- Muted: `#62676f` for supporting copy.
- Line: `#d5d8d2` for structure and separation.
- Cobalt: `#2647b8` for technical authority, primary actions, and links.
- Coral: `#e66052` for recognition and small points of emphasis.

Use cobalt and coral in deliberate fields or functional states, not as scattered decoration.

## Typography

Geist is the working sans-serif. Hierarchy comes from scale, weight, and spacing rather than decorative type treatments. Display headings use tight tracking and compact line height. Body copy stays readable and direct, with a comfortable measure.

## Layout

- Desktop uses a fixed left rail for identity, navigation, and social links.
- Content occupies the remaining viewport and can use its full width for photography.
- The homepage is deliberately short: introduction, proof, three audience paths, and the next event.
- Secondary pages keep generous page headers and structured sections separated by fine rules.
- Cards are square, flat content containers. Avoid rounded floating panels and nested cards.

## Components

- Primary actions are solid cobalt rectangles.
- Secondary actions are outlined in ink.
- Tags are compact rectangular labels with visible borders.
- Lists and grids use alignment and dividers before background effects.
- Focus states use a clear coral outline.

## Imagery

Use real speaking, community, and professional photography. Images should show Hanna clearly and be matched to the correct event. Captions distinguish recent appearances from upcoming events. Avoid generic stock imagery and decorative gradients over photos.

## Responsive behavior

Below 768px, the sidebar becomes a fixed compact header with a menu button. Content follows the same reading order as desktop. Grids stack into a single column, proof points become rows, and large images retain useful focal positioning.

## Motion

Motion is limited to subtle interaction feedback. Respect `prefers-reduced-motion`; content and navigation must never depend on animation.

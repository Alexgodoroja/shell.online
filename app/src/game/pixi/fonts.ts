/**
 * The face everything that is not a place name is set in, on the canvas.
 *
 * The same stack as `--keep-font` in game.css, so a plate over a soldier and
 * the panel describing it are in one hand. Pirata One stays for the names of
 * places; this is for everything read rather than admired.
 *
 * Lowercase comes from Kingjola and everything else from Pirata One; see the
 * @font-face in game.css for why. A canvas does not wait for webfonts: see the `document.fonts.load` in
 * keepScene.ts, which holds the first draw until this has arrived.
 */
export const BODY_FONT = '"Kingjola", "Pirata One", Georgia, serif';

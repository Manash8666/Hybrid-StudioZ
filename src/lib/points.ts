// ==============================================================================
// HYBRID STUDIOZ — SHARED SCREEN-SPACE COORDINATES FOR SEAMLESS HAND-OFFS
// Standardized points [xRatio, yRatio] (0.0 to 1.0) so scenes connect seamlessly
// ==============================================================================

export interface HandOffPoint {
  x: number; // 0 to 1 ratio from viewport left
  y: number; // 0 to 1 ratio from viewport top
  description: string;
}

export const HAND_OFF_POINTS = {
  // Hand-Off 01 -> 02: Hero pigment cloud into Gallery Pan
  heroCloudExit: {
    x: 0.66,
    y: 0.50,
    description: 'Volumetric cyan/violet cloud epicenter exiting Scene 01 into continuous Pan wall',
  },

  // Hand-Off 02 -> 03: Story focal into expanding orange circle
  storyOrangeFocal: {
    x: 0.57,
    y: 0.50,
    description: 'Center of glowing orange sphere emerging at 90% progress of Story timeline',
  },

  // Hand-Off 03 -> 04: Letter "D" in REMEMBERED swallowing viewport
  letterDStem: {
    x: 0.52,
    y: 0.50,
    description: 'Vertical stem of the letter D in REMEMBERED that expands to black void',
  },

  // Hand-Off 04 -> 05: Fibre-optic organism core erupting into Eye blink
  organismCore: {
    x: 0.50,
    y: 0.50,
    description: 'Central dark vortex heart from which the eyelid blink snaps shut',
  },

  // Hand-Off 05 -> 06: Eye pupil dive into Bauhaus grid
  eyePupilCenter: {
    x: 0.50,
    y: 0.50,
    description: 'Absolute center of macro pupil swallowing into Swiss Bauhaus grid lines',
  },

  // Hand-Off 06 -> 09: Bauhaus horizon collapse into 3D typographic universe
  bauhausHorizon: {
    x: 0.50,
    y: 0.50,
    description: '1px horizontal horizon line bursting into 3D spatial capability field',
  },

  // Hand-Off 09 -> 10: Deepest curve of letter "S" in HYBRID STUDIOZ
  letterSCurve: {
    x: 0.50,
    y: 0.50,
    description: 'Inner curve of letter S filling screen with cobalt navy (#023a74)',
  },
} as const;

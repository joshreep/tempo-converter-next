import { Settings } from '@/contexts/settings';

export const TRIPLET_SUBDIVISION = 2 / 3;
export const DOTTED_SUBDIVISION = 3 / 4;

// export type SubdivisionName = keyof typeof SUBDIVISIONS;

export enum SubdivisionName {
  Whole = 'Whole',
  DottedWhole = 'Dotted Whole',
  TripletWhole = 'Triplet Whole',
  Half = 'Half',
  DottedHalf = 'Dotted Half',
  TripletHalf = 'Triplet Half',
  Quarter = 'Quarter',
  DottedQuarter = 'Dotted Quarter',
  TripletQuarter = 'Triplet Quarter',
  Eighth = 'Eighth',
  DottedEighth = 'Dotted Eighth',
  TripletEighth = 'Triplet Eighth',
  Sixteenth = 'Sixteenth',
  DottedSixteenth = 'Dotted Sixteenth',
  TripletSixteenth = 'Triplet Sixteenth',
}

export const SUBDIVISIONS = {
  [SubdivisionName.Whole]: 1 * 4,
  [SubdivisionName.DottedWhole]: 1 * 4 * DOTTED_SUBDIVISION,
  [SubdivisionName.TripletWhole]: 1 * 4 * TRIPLET_SUBDIVISION,
  [SubdivisionName.Half]: 1 * 2,
  [SubdivisionName.DottedHalf]: 1 * 2 * DOTTED_SUBDIVISION,
  [SubdivisionName.TripletHalf]: 1 * 2 * TRIPLET_SUBDIVISION,
  [SubdivisionName.Quarter]: 1 * 1,
  [SubdivisionName.DottedQuarter]: 1 * 1 * DOTTED_SUBDIVISION,
  [SubdivisionName.TripletQuarter]: 1 * 1 * TRIPLET_SUBDIVISION,
  [SubdivisionName.Eighth]: 1 / 2,
  [SubdivisionName.DottedEighth]: (1 / 2) * DOTTED_SUBDIVISION,
  [SubdivisionName.TripletEighth]: (1 / 2) * TRIPLET_SUBDIVISION,
  [SubdivisionName.Sixteenth]: 1 / 4,
  [SubdivisionName.DottedSixteenth]: (1 / 4) * DOTTED_SUBDIVISION,
  [SubdivisionName.TripletSixteenth]: (1 / 4) * TRIPLET_SUBDIVISION,
};

export const DEFAULT_SETTINGS: Settings = {
  enabledSubdivisions: [
    SubdivisionName.Quarter,
    SubdivisionName.DottedQuarter,
    SubdivisionName.Eighth,
    SubdivisionName.DottedEighth,
    SubdivisionName.TripletEighth,
  ],
  defaultSubdivision: SubdivisionName.Quarter,
};

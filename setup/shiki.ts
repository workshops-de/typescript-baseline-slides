import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import type { ShikiSetupReturn } from '@slidev/types';
import { defineShikiSetup } from '@slidev/types';

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      dark: 'material-theme-ocean',
      light: 'light-plus',
    },
    transformers: [
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
      transformerNotationDiff(),
      transformerNotationFocus(),
      transformerNotationErrorLevel(),
    ],
  };
});

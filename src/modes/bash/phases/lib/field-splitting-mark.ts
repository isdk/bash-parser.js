import type { Resolvers } from '~/types.ts';

export const fieldSplittingMark = (result: string, text: string, resolveEnv: Resolvers['resolveEnv']) => {
  if (typeof resolveEnv === 'function' && text[0] !== "'" && text[0] !== '"') {
    const ifs = resolveEnv('IFS');

    if (ifs !== null) {
      return result.replace(new RegExp(`[${ifs}]+`, 'g'), '\0');
    }
  }

  return result;
};

export default fieldSplittingMark;

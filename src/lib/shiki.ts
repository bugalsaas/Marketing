import { createHighlighter } from 'shiki';

// Create a highlighter instance with common languages
let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: [
        'javascript',
        'typescript',
        'jsx',
        'tsx',
        'json',
        'html',
        'css',
        'bash',
        'sql',
        'markdown',
        'yaml',
        'xml',
        'diff',
        'python',
        'java',
        'csharp',
        'php',
        'ruby',
        'go',
        'rust',
        'swift',
        'kotlin',
        'scala',
        'clojure',
        'haskell',
        'lua',
        'perl',
        'r',
        'matlab',
        'octave',
        'powershell',
        'shell',
        'dockerfile',
        'nginx',
        'apache',
        'ini',
        'toml',
        'env',
        'log',
        'plaintext'
      ],
    });
  }
  return highlighter;
}

export async function highlightCode(
  code: string,
  language: string = 'text',
  theme: 'light' | 'dark' = 'light'
) {
  const highlighter = await getHighlighter();
  const themeName = theme === 'dark' ? 'github-dark' : 'github-light';
  
  try {
    return highlighter.codeToHtml(code, {
      lang: language,
      theme: themeName,
    });
  } catch (error) {
    // Fallback to plain text if language is not supported
    return highlighter.codeToHtml(code, {
      lang: 'plaintext',
      theme: themeName,
    });
  }
}

// Pre-configured themes for consistency
export const codeThemes = {
  light: 'github-light',
  dark: 'github-dark',
} as const;

export const supportedLanguages = [
  'javascript',
  'typescript',
  'jsx',
  'tsx',
  'json',
  'html',
  'css',
  'bash',
  'sql',
  'markdown',
  'yaml',
  'xml',
  'diff',
  'python',
  'java',
  'csharp',
  'php',
  'ruby',
  'go',
  'rust',
  'swift',
  'kotlin',
  'scala',
  'clojure',
  'haskell',
  'lua',
  'perl',
  'r',
  'matlab',
  'octave',
  'powershell',
  'shell',
  'dockerfile',
  'nginx',
  'apache',
  'ini',
  'toml',
  'env',
  'log',
  'plaintext'
] as const;

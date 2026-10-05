import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../lib/theme/useTheme';

export default function PublicThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';
  const nextThemeLabel = isLight ? 'dark' : 'light';
  const Icon = isLight ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextThemeLabel} mode`}
      title={`Switch to ${nextThemeLabel} mode`}
      className="public-theme-toggle inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm font-semibold text-white/75 transition-all duration-200 hover:border-accent/35 hover:bg-accent/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      <span className="hidden sm:inline">{isLight ? 'Light' : 'Dark'}</span>
    </button>
  );
}

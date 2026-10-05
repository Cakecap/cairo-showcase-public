export type DisplayProjectStatus = 'Completed' | 'Ongoing' | 'TBA';

const statusConfig: Record<
  DisplayProjectStatus,
  {
    label: DisplayProjectStatus;
    badgeClasses: string;
    dotClass: string;
    textClass: string;
  }
> = {
  Completed: {
    label: 'Completed',
    badgeClasses: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
    dotClass: 'bg-emerald-400',
    textClass: 'text-emerald-400',
  },
  Ongoing: {
    label: 'Ongoing',
    badgeClasses: 'text-amber-400 border-amber-400/40 bg-amber-400/10',
    dotClass: 'bg-amber-400',
    textClass: 'text-amber-400',
  },
  TBA: {
    label: 'TBA',
    badgeClasses: 'text-sky-400 border-sky-400/40 bg-sky-400/10',
    dotClass: 'bg-sky-400',
    textClass: 'text-sky-400',
  },
};

export function normalizeProjectStatus(status: string): DisplayProjectStatus {
  const normalized = status.trim().toLowerCase();

  if (normalized === 'completed') return 'Completed';

  if (
    normalized === 'active' ||
    normalized === 'ongoing' ||
    normalized === 'in progress' ||
    normalized === 'ongoing project'
  ) {
    return 'Ongoing';
  }

  if (
    normalized === 'prototype' ||
    normalized === 'tba' ||
    normalized === 'tbd' ||
    normalized === 'not specified' ||
    normalized === 'unknown'
  ) {
    return 'TBA';
  }

  return 'TBA';
}

export function getProjectStatusConfig(status: string) {
  return statusConfig[normalizeProjectStatus(status)];
}

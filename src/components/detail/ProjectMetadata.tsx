import type { ElementType, ReactNode } from 'react';
import { Users, Building2, DollarSign, Clock, Zap, TrendingUp } from 'lucide-react';
import { Project } from '../../types';
import { getProjectStatusConfig } from '../../utils/projectStatus';

interface ProjectMetadataProps {
  project: Project;
}

const hasText = (value: string) => Boolean(value.trim());
const hasItems = (value: string[]) => value.length > 0;

const preservedTerms: Record<string, string> = {
  AI: 'AI',
  API: 'API',
  ASM: 'ASM',
  CAIRO: 'CAIRO',
  FRIM: 'FRIM',
  HOSZA: 'HoSZA',
  JICA: 'JICA',
  MJIIT: 'MJIIT',
  MOA: 'MOA',
  MRI: 'MRI',
  SEMS: 'SEMS',
  TNB: 'TNB',
  UITM: 'UiTM',
  UM: 'UM',
  UNISZA: 'UniSZA',
  UPM: 'UPM',
  US: 'US',
  UK: 'UK',
  UTM: 'UTM',
};

const readableTitleTerms: Record<string, string> = {
  ASSOC: 'Assoc',
  BHD: 'Bhd',
  BIN: 'Bin',
  BINTI: 'Binti',
  DR: 'Dr',
  IR: 'Ir',
  MADYA: 'Madya',
  PROF: 'Prof',
  SDN: 'Sdn',
  TS: 'Ts',
};

function formatReadableMetadataValue(value: string) {
  return value.replace(/[A-Za-zÀ-ÖØ-öø-ÿ]+\.?/g, (token) => {
    const hasTrailingPeriod = token.endsWith('.');
    const core = hasTrailingPeriod ? token.slice(0, -1) : token;
    const upperCore = core.toUpperCase();

    if (core !== upperCore) {
      return token;
    }

    const readableCore =
      preservedTerms[upperCore] ??
      readableTitleTerms[upperCore] ??
      `${core.charAt(0).toUpperCase()}${core.slice(1).toLowerCase()}`;

    return `${readableCore}${hasTrailingPeriod ? '.' : ''}`;
  });
}

function formatBudget(cost: string) {
  const match = cost.match(/^\$(\d+(?:\.\d+)?)([MK])$/i);

  if (!match) return cost;

  const [, value, unit] = match;
  const multiplier = unit.toUpperCase() === 'M' ? 1_000_000 : 1_000;
  const amount = Number.parseFloat(value) * multiplier;

  return `RM ${amount.toLocaleString('en-MY', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function MetaPanel({
  icon: Icon,
  label,
  children,
}: {
  icon: ElementType;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="public-meta-panel bg-surface border border-white/6 rounded-sm p-6 hover:border-accent/18 transition-colors duration-300">
      <div className="flex items-center gap-2.5 mb-4">
        <Icon className="w-4 h-4 text-white" />
        <span className="text-[14px] leading-none font-semibold text-white tracking-[0.12em] uppercase">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function ProjectMetadata({ project }: ProjectMetadataProps) {
  const status = getProjectStatusConfig(project.status);
  const overviewParagraphs = project.description
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const hasImpactOutcomes = hasItems(project.impactOutcomes);

  return (
    <section className="public-detail-section max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-accent rounded-full" />
              <h2 className="text-white text-xl font-bold tracking-tight">Overview</h2>
            </div>
            <div className="space-y-4 text-white/60 text-sm leading-[1.85] font-light">
              {overviewParagraphs.length > 0 ? (
                overviewParagraphs.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <p>Detailed project overview is not available yet.</p>
              )}
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-accent rounded-full" />
              <h2 className="text-white text-xl font-bold tracking-tight">Impact & Outcomes</h2>
            </div>
            {hasImpactOutcomes ? (
              <div className="space-y-3">
                {project.impactOutcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-none w-5 h-5 rounded-full border border-white/35 bg-white/5 flex items-center justify-center mt-0.5">
                      <span className="text-white text-[10px] font-bold">{i + 1}</span>
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed font-light">{outcome}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/55 text-sm leading-relaxed">Impact outcomes have not been provided yet.</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <MetaPanel icon={Users} label="Project Lead">
            <p className="text-white text-sm font-semibold">
              {hasText(project.pic) ? formatReadableMetadataValue(project.pic) : 'Not yet provided'}
            </p>
          </MetaPanel>

          <MetaPanel icon={Users} label="Team">
            {hasItems(project.team) ? (
              <ul className="space-y-1.5">
                {project.team.map((member) => (
                  <li key={member} className="text-white/65 text-sm">
                    {formatReadableMetadataValue(member)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white/55 text-sm">Team details are not yet provided.</p>
            )}
          </MetaPanel>

          <MetaPanel icon={Building2} label="Collaborator">
            <p className="text-white/70 text-sm leading-relaxed">
              {hasText(project.collaborator)
                ? formatReadableMetadataValue(project.collaborator)
                : 'No collaborator listed yet.'}
            </p>
          </MetaPanel>

          <div className="grid grid-cols-2 gap-4">
            <MetaPanel icon={DollarSign} label="Budget">
              <p className="text-white/70 text-sm leading-relaxed">
                {hasText(project.cost) ? formatBudget(project.cost) : 'Not yet provided'}
              </p>
            </MetaPanel>
            <MetaPanel icon={Clock} label="Duration">
              <p className="text-white/70 text-sm leading-relaxed">
                {hasText(project.duration) ? project.duration : 'Not yet provided'}
              </p>
            </MetaPanel>
          </div>

          <MetaPanel icon={Zap} label="Technology Stack">
            {hasItems(project.technology) ? (
              <div className="flex flex-wrap gap-1.5">
                {project.technology.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-white/55 bg-accent/8 border border-accent/12 px-2 py-0.5 rounded-sm tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-white/55 text-sm">Technology details are not yet provided.</p>
            )}
          </MetaPanel>

          <MetaPanel icon={TrendingUp} label="Status">
            <div className="flex items-center gap-2">
              <span className={`inline-block w-2 h-2 rounded-full ${status.dotClass}`} />
              <span className={`font-semibold text-sm ${status.textClass}`}>{status.label}</span>
              <span className="text-white/35 text-xs">- {project.year}</span>
            </div>
          </MetaPanel>
        </div>
      </div>
    </section>
  );
}

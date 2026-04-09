import { Users, Building2, DollarSign, Clock, Zap, TrendingUp } from 'lucide-react';
import { Project } from '../../types';

interface ProjectMetadataProps {
  project: Project;
}

function MetaPanel({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#111116] border border-white/6 rounded-sm p-5 hover:border-white/12 transition-colors duration-300">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-3.5 h-3.5 text-[#06b6d4]" />
        <span className="text-[10px] font-semibold text-white/40 tracking-[0.15em] uppercase">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function ProjectMetadata({ project }: ProjectMetadataProps) {
  return (
    <section className="max-w-[1800px] mx-auto px-6 md:px-10 lg:px-14 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-[#06b6d4] rounded-full" />
              <h2 className="text-white text-xl font-bold tracking-tight">Overview</h2>
            </div>
            <div className="space-y-4 text-white/60 text-sm leading-[1.85] font-light">
              {project.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-0.5 h-5 bg-[#06b6d4] rounded-full" />
              <h2 className="text-white text-xl font-bold tracking-tight">Impact & Outcomes</h2>
            </div>
            <div className="space-y-3">
              {project.impactOutcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-none w-5 h-5 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/5 flex items-center justify-center mt-0.5">
                    <span className="text-[#06b6d4] text-[10px] font-bold">{i + 1}</span>
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed font-light">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <MetaPanel icon={Users} label="Project Lead">
            <p className="text-white text-sm font-semibold">{project.pic}</p>
          </MetaPanel>

          <MetaPanel icon={Users} label="Team">
            <ul className="space-y-1.5">
              {project.team.map((member) => (
                <li key={member} className="text-white/65 text-sm">
                  {member}
                </li>
              ))}
            </ul>
          </MetaPanel>

          <MetaPanel icon={Building2} label="Collaborator">
            <p className="text-white/70 text-sm leading-relaxed">{project.collaborator}</p>
          </MetaPanel>

          <div className="grid grid-cols-2 gap-4">
            <MetaPanel icon={DollarSign} label="Budget">
              <p className="text-white text-base font-bold tracking-tight">{project.cost}</p>
            </MetaPanel>
            <MetaPanel icon={Clock} label="Duration">
              <p className="text-white text-base font-bold tracking-tight">{project.duration}</p>
            </MetaPanel>
          </div>

          <MetaPanel icon={Zap} label="Technology Stack">
            <div className="flex flex-wrap gap-1.5">
              {project.technology.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] text-white/55 bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </MetaPanel>

          <MetaPanel icon={TrendingUp} label="Status">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  project.status === 'Active'
                    ? 'bg-emerald-400'
                    : project.status === 'Completed'
                    ? 'bg-sky-400'
                    : project.status === 'Ongoing'
                    ? 'bg-amber-400'
                    : 'bg-violet-400'
                }`}
              />
              <span className="text-white font-semibold text-sm">{project.status}</span>
              <span className="text-white/35 text-xs">· {project.year}</span>
            </div>
          </MetaPanel>
        </div>
      </div>
    </section>
  );
}

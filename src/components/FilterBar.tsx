interface FilterBarProps {
  activeStatus: string;
  onStatusChange: (s: string) => void;
  activeTipo: string;
  onTipoChange: (t: string) => void;
}

const statuses = ["Todos", "Lançamento", "Em obras", "Entregue"];
const tipos = ["Todos", "Studio", "2Q", "3Q"];

const FilterBar = ({ activeStatus, onStatusChange, activeTipo, onTipoChange }: FilterBarProps) => (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12">
    <div className="flex flex-wrap gap-2">
      {statuses.map((s) => (
        <button
          key={s}
          onClick={() => onStatusChange(s)}
          className={`px-4 py-2 font-body text-xs tracking-enki-wide uppercase border transition-colors ${
            activeStatus === s
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
          }`}
        >
          {s}
        </button>
      ))}
    </div>
    <div className="flex flex-wrap gap-2">
      {tipos.map((t) => (
        <button
          key={t}
          onClick={() => onTipoChange(t)}
          className={`px-4 py-2 font-body text-xs tracking-enki-wide uppercase border transition-colors ${
            activeTipo === t
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  </div>
);

export default FilterBar;

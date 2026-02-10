import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface LeadFormProps {
  className?: string;
  dark?: boolean;
}

const LeadForm = ({ className = "", dark = false }: LeadFormProps) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", whatsapp: "", email: "", interesse: "" });

  const maskPhone = (v: string) => {
    const n = v.replace(/\D/g, "").slice(0, 11);
    if (n.length <= 2) return `(${n}`;
    if (n.length <= 7) return `(${n.slice(0, 2)}) ${n.slice(2)}`;
    return `(${n.slice(0, 2)}) ${n.slice(2, 3)} ${n.slice(3, 7)}-${n.slice(7)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectar ao backend
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass = `w-full px-4 py-3 font-body text-sm bg-transparent border transition-colors focus:outline-none focus:ring-1 ${
    dark
      ? "border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus:ring-primary-foreground/40"
      : "border-border text-foreground placeholder:text-muted-foreground focus:ring-foreground/20"
  }`;

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <div className={`w-12 h-12 rounded-full border flex items-center justify-center mb-4 ${
              dark ? "border-primary-foreground/40 text-primary-foreground" : "border-foreground/20 text-foreground"
            }`}>
              <Check size={20} />
            </div>
            <p className={`font-body text-sm ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              Recebemos seu contato. Retornaremos em breve.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Nome completo"
              required
              maxLength={100}
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="WhatsApp"
              required
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: maskPhone(e.target.value) })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            <select
              value={form.interesse}
              onChange={(e) => setForm({ ...form, interesse: e.target.value })}
              className={`${inputClass} appearance-none`}
            >
              <option value="">Interesse (opcional)</option>
              <option value="investimento">Investimento</option>
              <option value="moradia">Moradia</option>
              <option value="informacoes">Quero mais informações</option>
            </select>

            <button
              type="submit"
              className={`mt-2 px-8 py-3.5 font-body text-sm tracking-enki-wide uppercase transition-colors ${
                dark
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              Enviar
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadForm;

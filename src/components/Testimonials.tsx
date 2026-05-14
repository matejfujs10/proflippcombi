import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Matej K.", text: "Odlična izkušnja. Kombi je praktičen, udoben in idealen za spontane izlete." },
  { name: "Ana P.", text: "Veliko boljša izkušnja kot klasičen hotel. Spanje v naravi je nekaj posebnega." },
  { name: "Luka R.", text: "Popoln za športne vikende in roadtrip potovanja. Vse je bilo pripravljeno." },
  { name: "Nina B.", text: "Občutek svobode je nekaj posebnega. Definitivno spet." },
  { name: "Tim S.", text: "Hiter odgovor, jasni pogoji, top kombi. Priporočam vsem." },
  { name: "Eva M.", text: "Vikend pobeg v hribe – kombi je idealen za par s športno opremo." },
];

const Testimonials = () => (
  <section id="mnenja" className="py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="section-eyebrow">Mnenja</span>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
          Izkušnje <span className="text-gradient">najemnikov</span>
        </h2>
        <p className="text-muted-foreground mt-4">
          Veliko zadovoljnih najemnikov iz Slovenije in Avstrije.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="card-feature relative">
            <Quote className="absolute top-5 right-5 text-accent/20" size={40} />
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, k) => (
                <Star key={k} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/85 leading-relaxed mb-5 italic">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-primary-foreground font-bold">
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">Slovenija</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

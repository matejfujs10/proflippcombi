import { Bike, Moon, Wallet, Compass, ParkingSquare, Laptop, Map, Sofa, Sun, Activity } from "lucide-react";

const features = [
  { icon: Bike, title: "Idealen za športnike", text: "Prostor za kolo, smuči, opremo." },
  { icon: Moon, title: "Spanje v naravi", text: "Diskretno, udobno, kjerkoli." },
  { icon: Wallet, title: "Brez dragih hotelov", text: "Prihrani in potuj več." },
  { icon: Compass, title: "Popolna svoboda potovanja", text: "Brez urnikov in omejitev." },
  { icon: ParkingSquare, title: "Enostavno parkiranje", text: "Kompakten, parkiraš povsod." },
  { icon: Laptop, title: "Mobilna pisarna z razgledom", text: "Delaj od koderkoli." },
  { icon: Map, title: "Roadtrip brez omejitev", text: "Slovenija, Avstrija in dlje." },
  { icon: Sofa, title: "Praktičen in udoben", text: "Vse na pravem mestu." },
  { icon: Sun, title: "Odličen za vikend pobeg", text: "Petek zvečer – nazaj v ponedeljek." },
  { icon: Activity, title: "Popoln za aktivni stil", text: "Athletes, surferji, kolesarji." },
];

const WhyUs = () => (
  <section className="relative py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="section-eyebrow">Zakaj ravno ta kombi</span>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
          Zakaj ljudje izberejo <span className="text-gradient">ta kombi?</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="card-feature group text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-primary-foreground transition-all">
              <f.icon size={22} className="text-accent group-hover:text-primary-foreground" />
            </div>
            <h3 className="font-heading text-sm md:text-base font-bold text-foreground mb-1.5 leading-tight">
              {f.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-snug">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;

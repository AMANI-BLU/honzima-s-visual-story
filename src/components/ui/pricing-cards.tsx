import { useEffect, useRef, useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
}
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: PricingFeature[];
  button: {
    text: string;
    url: string;
  };
  highlighted?: boolean;
}
interface PricingCardsProps {
  heading?: string;
  description?: string;
  plans?: PricingPlan[];
}

const PricingCards = ({
  heading = "Plans & Pricing",
  description = "Choose the plan that matches your workflow and scale with ease.",
  plans = [],
}: PricingCardsProps) => {
  const [isYearly, setIsYearly] = useState(false);

  // --- minimal hero particles ---
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const setSize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect?.width ?? window.innerWidth));
      const h = Math.max(1, Math.floor(rect?.height ?? window.innerHeight));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    type P = { x: number; y: number; v: number; o: number };
    let parts: P[] = [];
    let raf = 0;

    const make = (): P => ({
      x: Math.random() * (canvas.width / (window.devicePixelRatio || 1)),
      y: Math.random() * (canvas.height / (window.devicePixelRatio || 1)),
      v: Math.random() * 0.25 + 0.05,
      o: Math.random() * 0.35 + 0.15,
    });

    const init = () => {
      parts = [];
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const count = Math.floor((w * h) / 12000);
      for (let i = 0; i < count; i++) parts.push(make());
    };

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);
      parts.forEach((p) => {
        p.y -= p.v;
        if (p.y < 0) {
          p.x = Math.random() * w;
          p.y = h + Math.random() * 40;
          p.v = Math.random() * 0.25 + 0.05;
          p.o = Math.random() * 0.35 + 0.15;
        }
        ctx.fillStyle = `rgba(250,250,250,${p.o})`;
        ctx.fillRect(p.x, p.y, 0.7, 2.2);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      setSize();
      init();
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(canvas.parentElement || document.body);

    init();
    raf = requestAnimationFrame(draw);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden py-20"
      style={
        {
          "--accent-line": "rgba(255,255,255,0.06)",
        } as React.CSSProperties
      }
    >
      <style>{`
        @keyframes drawX{to{transform:scaleX(1)}}
        @keyframes drawY{to{transform:scaleY(1)}}
        .card-animate{opacity:0;transform:translateY(12px);animation:fadeUp .6s ease .25s forwards}
        @keyframes fadeUp{to{opacity:1;transform:translateY(0)}}
      `}</style>

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_12%,rgba(255,255,255,0.04),transparent_60%)]" />

      {/* Animated accent lines */}
      <div className="accent-lines is-ready">
        <div className="hline absolute left-0 right-0 top-[18%] h-px origin-center scale-x-0 animate-[drawX_.6s_ease_.08s_forwards]" style={{ background: "var(--accent-line)" }} />
        <div className="hline absolute left-0 right-0 top-1/2 h-px origin-center scale-x-0 animate-[drawX_.6s_ease_.16s_forwards]" style={{ background: "var(--accent-line)" }} />
        <div className="hline absolute left-0 right-0 top-[82%] h-px origin-center scale-x-0 animate-[drawX_.6s_ease_.24s_forwards]" style={{ background: "var(--accent-line)" }} />
        <div className="vline absolute bottom-0 left-[18%] top-0 w-px origin-top scale-y-0 animate-[drawY_.7s_ease_.2s_forwards]" style={{ background: "var(--accent-line)" }} />
        <div className="vline absolute bottom-0 left-1/2 top-0 w-px origin-top scale-y-0 animate-[drawY_.7s_ease_.28s_forwards]" style={{ background: "var(--accent-line)" }} />
        <div className="vline absolute bottom-0 left-[82%] top-0 w-px origin-top scale-y-0 animate-[drawY_.7s_ease_.36s_forwards]" style={{ background: "var(--accent-line)" }} />
      </div>

      {/* Particles */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{description}</p>

          <div className="mb-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className={cn(!isYearly && "text-foreground font-medium")}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={() => setIsYearly(!isYearly)} />
            <span className={cn(isYearly && "text-foreground font-medium")}>Yearly</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Card
                key={plan.id}
                className={cn(
                  "card-animate relative overflow-hidden backdrop-blur-sm",
                  plan.highlighted && "border-primary/50 bg-primary/5 scale-[1.02] shadow-xl shadow-primary/10"
                )}
                style={{ animationDelay: `${i * 0.1 + 0.25}s` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary" />
                )}
                <CardHeader className="text-left">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-xl font-display">{plan.name}</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <div className="text-4xl font-bold font-display mt-4">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Billed{" "}
                    {isYearly
                      ? `$${Number(plan.yearlyPrice.slice(1)) * 12}`
                      : `$${Number(plan.monthlyPrice.slice(1)) * 12}`}{" "}
                    annually
                  </p>
                </CardHeader>
                <CardContent className="text-left">
                  <Separator className="mb-6" />
                  {plan.id === "pro" && (
                    <p className="mb-4 text-xs font-medium text-muted-foreground">
                      Everything in Starter, and:
                    </p>
                  )}
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CircleCheck className="h-4 w-4 text-primary" />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className={cn(
                      "w-full",
                      plan.highlighted && "bg-primary hover:bg-primary/90"
                    )}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <a href={plan.button.url}>
                      {plan.button.text}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { PricingCards };

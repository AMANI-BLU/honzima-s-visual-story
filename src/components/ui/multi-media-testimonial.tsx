"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

export interface Testimonial {
  name: string;
  designation: string;
  title?: string;
  profile?: string;
  content: string;
  mediaUrl?: string;
  thumbnail?: string;
}

export function TestimonialCard({
  testimonial,
}: {
  testimonial?: Testimonial;
}) {
  const [hydrated, setHydrated] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [open, setOpen] = React.useState(false);

  // Run once on mount
  React.useEffect(() => setHydrated(true), []);

  // Control video playback
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (open) v.play().catch(() => {});
    else {
      v.pause();
      v.currentTime = 0;
    }
  }, [open]);

  // Guard missing data (no conditional hook calls!)
  if (!testimonial) {
    return (
      <Card className="h-full animate-pulse bg-muted">
        <CardContent className="flex items-center justify-center h-40">
          Loading testimonial...
        </CardContent>
      </Card>
    );
  }

  const {
    name = "Anonymous",
    profile = "",
    title = "",
    designation = "Customer",
    content = "No testimonial available.",
    mediaUrl,
    thumbnail,
  } = testimonial;

  // render skeleton until hydrated
  if (!hydrated) {
    return (
      <Card className="h-full animate-pulse bg-muted">
        <CardContent className="flex items-center justify-center h-40">
          Loading...
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 bg-card border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold line-clamp-1 text-foreground">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-3">
        <ScrollArea className="flex-1">
          <div className="space-y-3">
            {/* --- Video Section --- */}
            {mediaUrl && (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button
                    className="relative w-full overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => setOpen(true)}
                  >
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={thumbnail || "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=225&fit=crop"}
                        alt={title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 flex items-center justify-center bg-background/30 group-hover:bg-background/50 transition-colors">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5" />
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                {open && (
                  <DialogContent
                    className="max-w-4xl p-0 overflow-hidden bg-background"
                    onPointerDownOutside={(e) => e.preventDefault()}
                  >
                    <div className="absolute top-2 right-2 z-10">
                      <DialogClose asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full bg-background/80 hover:bg-background"
                          onClick={() => setOpen(false)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </DialogClose>
                    </div>

                    <AspectRatio ratio={16 / 9}>
                      <video
                        ref={videoRef}
                        src={mediaUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </AspectRatio>
                  </DialogContent>
                )}
              </Dialog>
            )}

            {/* --- Image Section --- */}
            {!mediaUrl && thumbnail && (
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                <img
                  src={thumbnail}
                  alt={title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            )}

            {/* --- Text Section --- */}
            {content && (
              <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
            )}
          </div>
        </ScrollArea>

        <Separator className="bg-border/50" />

        {/* --- Profile Section --- */}
        <div className="flex items-center gap-3 pt-1">
          <Avatar className="h-9 w-9 border border-border/50">
            <AvatarImage src={profile} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary text-xs">{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">{name}</span>
            <span className="text-xs text-muted-foreground">{designation}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;

import React, { useState, useRef, useEffect, useLayoutEffect, useCallback, forwardRef } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

// --- Interfaces & Constants ---

export interface Project {
  id: string;
  image: string;
  title: string;
}

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200";

// --- Internal Components ---

interface ProjectCardProps {
  image: string;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  totalCount: number;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, delay, isVisible, index, totalCount, onClick, isSelected }, ref) => {
    const middleIndex = (totalCount - 1) / 2;
    const factor = totalCount > 1 ? (index - middleIndex) / middleIndex : 0;
    
    const rotation = factor * 25; 
    const translationX = factor * 85; 
    const translationY = Math.abs(factor) * 12;

    return (
      <div
        ref={ref}
        className={cn(
          "absolute w-28 h-20 rounded-lg overflow-hidden shadow-xl cursor-pointer transition-all duration-500 ease-out border-2 border-white/20",
          isSelected && "opacity-0"
        )}
        style={{
          transform: isVisible
            ? `translateX(${translationX}px) translateY(${-translationY - 60}px) rotate(${rotation}deg) scale(1)`
            : "translateY(0px) rotate(0deg) scale(0.8)",
          opacity: isVisible ? 1 : 0,
          transitionDelay: `${delay}ms`,
          zIndex: totalCount - Math.abs(index - Math.floor(totalCount / 2)),
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <div className="relative w-full h-full group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-1 left-1 right-1 text-white text-[10px] font-medium truncate opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {title}
          </div>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

interface ImageLightboxProps {
  projects: Project[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  sourceRect: DOMRect | null;
  onCloseComplete?: () => void;
  onNavigate: (index: number) => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  projects,
  currentIndex,
  isOpen,
  onClose,
  sourceRect,
  onCloseComplete,
  onNavigate,
}) => {
  const [animationPhase, setAnimationPhase] = useState<"initial" | "animating" | "complete">("initial");
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalProjects = projects.length;
  const hasNext = internalIndex < totalProjects - 1;
  const hasPrev = internalIndex > 0;
  const currentProject = projects[internalIndex];

  useEffect(() => {
    if (isOpen && currentIndex !== internalIndex && !isSliding) {
      setIsSliding(true);
      const timer = setTimeout(() => {
        setInternalIndex(currentIndex);
        setIsSliding(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isOpen, internalIndex, isSliding]);

  useEffect(() => {
    if (isOpen) {
      setInternalIndex(currentIndex);
      setIsSliding(false);
    }
  }, [isOpen, currentIndex]);

  const navigateNext = useCallback(() => {
    if (internalIndex >= totalProjects - 1 || isSliding) return;
    onNavigate(internalIndex + 1);
  }, [internalIndex, totalProjects, isSliding, onNavigate]);

  const navigatePrev = useCallback(() => {
    if (internalIndex <= 0 || isSliding) return;
    onNavigate(internalIndex - 1);
  }, [internalIndex, isSliding, onNavigate]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    onClose();
    setTimeout(() => {
      setIsClosing(false);
      setShouldRender(false);
      setAnimationPhase("initial");
      onCloseComplete?.();
    }, 500);
  }, [onClose, onCloseComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, navigateNext, navigatePrev]);

  useLayoutEffect(() => {
    if (isOpen && sourceRect) {
      setShouldRender(true);
      setAnimationPhase("initial");
      setIsClosing(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimationPhase("animating");
        });
      });
      const timer = setTimeout(() => {
        setAnimationPhase("complete");
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen, sourceRect]);

  const handleDotClick = (idx: number) => {
    if (isSliding || idx === internalIndex) return;
    onNavigate(idx);
  };

  if (!shouldRender || !currentProject) return null;

  const getInitialStyles = (): React.CSSProperties => {
    if (!sourceRect) return {};
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const targetWidth = Math.min(800, viewportWidth - 64);
    const targetHeight = Math.min(viewportHeight * 0.85, 600);
    const targetX = (viewportWidth - targetWidth) / 2;
    const targetY = (viewportHeight - targetHeight) / 2;
    const scaleX = sourceRect.width / targetWidth;
    const scaleY = sourceRect.height / targetHeight;
    const scale = Math.max(scaleX, scaleY);
    const translateX = sourceRect.left + sourceRect.width / 2 - (targetX + targetWidth / 2) + window.scrollX;
    const translateY = sourceRect.top + sourceRect.height / 2 - (targetY + targetHeight / 2) + window.scrollY;
    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity: 0.5,
      borderRadius: "12px",
    };
  };

  const getFinalStyles = (): React.CSSProperties => ({
    transform: "translate(0, 0) scale(1)",
    opacity: 1,
    borderRadius: "24px",
  });

  const currentStyles = animationPhase === "initial" && !isClosing ? getInitialStyles() : getFinalStyles();

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 transition-all duration-500",
        isClosing ? "bg-black/0" : "bg-black/80 backdrop-blur-md"
      )}
      onClick={handleClose}
    >
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          animationPhase !== "initial" && !isClosing ? "opacity-100" : "opacity-0"
        )}
      />
      
      <button
        onClick={(e) => { e.stopPropagation(); handleClose(); }}
        className={cn(
          "absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-muted/30 backdrop-blur-xl border border-white/10 shadow-2xl text-foreground hover:bg-muted transition-all duration-300",
        )}
        style={{
          opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateY(0)" : "translateY(-30px)",
          transition: "opacity 400ms ease-out 400ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 400ms",
        }}
      >
        <X className="w-5 h-5" />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); navigatePrev(); }}
        disabled={!hasPrev || isSliding}
        className={cn(
          "absolute left-4 md:left-10 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-muted/30 backdrop-blur-xl border border-white/10 text-foreground hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none shadow-2xl",
        )}
        style={{
          opacity: animationPhase === "complete" && !isClosing && hasPrev ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateX(0)" : "translateX(-40px)",
          transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 600ms",
        }}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={(e) => { e.stopPropagation(); navigateNext(); }}
        disabled={!hasNext || isSliding}
        className={cn(
          "absolute right-4 md:right-10 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-muted/30 backdrop-blur-xl border border-white/10 text-foreground hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none shadow-2xl",
        )}
        style={{
          opacity: animationPhase === "complete" && !isClosing && hasNext ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateX(0)" : "translateX(40px)",
          transition: "opacity 400ms ease-out 600ms, transform 500ms cubic-bezier(0.16, 1, 0.3, 1) 600ms",
        }}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      <div
        className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          ...currentStyles,
          transform: isClosing ? "translate(0, 0) scale(0.92)" : currentStyles.transform,
          transition: animationPhase === "initial" && !isClosing ? "none" : "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms ease-out, border-radius 700ms ease",
          transformOrigin: "center center",
        }}
      >
        <div className="relative w-full h-full bg-card rounded-3xl overflow-hidden">
          <div className="relative w-full aspect-video overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${internalIndex * 100}%)` }}
            >
              {projects.map((project, idx) => (
                <div key={project.id} className="w-full h-full flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 md:p-8 bg-gradient-to-t from-card via-card to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {currentProject?.title}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={cn("w-1.5 h-1.5 rounded-full transition-all duration-500", idx === internalIndex ? "bg-foreground scale-150" : "bg-muted-foreground/30 hover:bg-muted-foreground/60")}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {internalIndex + 1} / {totalProjects}
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AnimatedFolderProps {
  title: string;
  projects: Project[];
  className?: string;
  gradient?: string;
}

export const AnimatedFolder: React.FC<AnimatedFolderProps> = ({ title, projects, className, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const [hiddenCardId, setHiddenCardId] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const previewProjects = projects.slice(0, 5);

  const handleProjectClick = (project: Project, index: number) => {
    const cardEl = cardRefs.current[index];
    if (cardEl) setSourceRect(cardEl.getBoundingClientRect());
    setSelectedIndex(index);
    setHiddenCardId(project.id);
  };

  const handleCloseLightbox = () => { setSelectedIndex(null); setSourceRect(null); };
  const handleCloseComplete = () => { setHiddenCardId(null); };
  const handleNavigate = (newIndex: number) => { setSelectedIndex(newIndex); setHiddenCardId(projects[newIndex]?.id || null); };

  const backBg = gradient || "linear-gradient(135deg, var(--folder-back) 0%, var(--folder-tab) 100%)";
  const tabBg = gradient || "var(--folder-tab)";
  const frontBg = gradient || "linear-gradient(135deg, var(--folder-front) 0%, var(--folder-back) 100%)";

  return (
    <>
      <div
        className={cn(
          "relative w-64 h-48 cursor-pointer group perspective-1000",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Folder Back */}
        <div
          className="absolute inset-0 rounded-xl shadow-lg transition-transform duration-500 ease-out"
          style={{
            background: backBg,
            transform: isHovered ? "rotateX(-15deg) translateZ(-20px)" : "rotateX(0deg)",
            transformOrigin: "bottom center",
          }}
        />
        
        {/* Folder Tab */}
        <div
          className="absolute -top-3 left-4 w-20 h-6 rounded-t-lg transition-transform duration-500 ease-out"
          style={{
            background: tabBg,
            transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          }}
        />
        
        {/* Cards Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {previewProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              image={project.image}
              title={project.title}
              delay={index * 50}
              isVisible={isHovered}
              index={index}
              totalCount={previewProjects.length}
              onClick={() => handleProjectClick(project, index)}
              isSelected={hiddenCardId === project.id}
            />
          ))}
        </div>
        
        {/* Folder Front */}
        <div
          className="absolute inset-0 rounded-xl shadow-xl transition-transform duration-500 ease-out"
          style={{
            background: frontBg,
            transform: isHovered ? "rotateX(15deg) translateZ(20px) translateY(10px)" : "rotateX(0deg)",
            transformOrigin: "bottom center",
          }}
        />
        
        {/* Folder Label */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-500"
          style={{
            transform: isHovered ? "translateY(20px)" : "translateY(0)",
            opacity: isHovered ? 0 : 1,
          }}
        >
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm opacity-80">
            {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
        
        {/* Hover Indicator */}
        <div
          className="absolute top-4 right-4 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium transition-all duration-300"
          style={{
            opacity: isHovered ? 0 : 0.7,
          }}
        >
          Hover
        </div>
      </div>
      
      <ImageLightbox
        projects={projects}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={handleCloseLightbox}
        sourceRect={sourceRect}
        onCloseComplete={handleCloseComplete}
        onNavigate={handleNavigate}
      />
    </>
  );
};

export default AnimatedFolder;

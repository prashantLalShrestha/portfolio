import { useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import type { Project } from "../../data/types";
import { productImages } from "../../data/product-images";
import { ProjectVisual } from "./ProjectVisual";
interface Gesture { id: number; x: number; y: number; reveal: number; dragging: boolean; }
export function ProductReveal({ project }: { project: Project }) {
  const productImage = productImages[project.slug];
  const [reveal, setReveal] = useState(0);
  const [failed, setFailed] = useState(false);
  const [animate, setAnimate] = useState(false);
  const gesture = useRef<Gesture | null>(null);
  function move(event: PointerEvent<HTMLDivElement>) {
    const start = gesture.current;
    if (!start || start.id !== event.pointerId || failed) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (!start.dragging) {
      if (Math.abs(dx) < 6) return;
      if (event.pointerType === "touch" && Math.abs(dy) > Math.abs(dx)) return;
      start.dragging = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    const width = event.currentTarget.getBoundingClientRect().width;
    setReveal(Math.max(0, Math.min(100, start.reveal + dx / width * 100)));
  }
  function end(event: PointerEvent<HTMLDivElement>) {
    if (gesture.current?.id !== event.pointerId) return;
    gesture.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }
  function keyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (failed) return;
    setAnimate(false);
    const steps: Record<string, number> = { ArrowRight: 5, ArrowUp: 5, ArrowLeft: -5, ArrowDown: -5, PageUp: 25, PageDown: -25 };
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setReveal(event.key === "Home" ? 0 : 100);
    } else if (event.key in steps) {
      event.preventDefault();
      setReveal(value => Math.max(0, Math.min(100, value + steps[event.key])));
    }
  }
  return (
    <div className={`product-reveal${animate ? " product-reveal--animate" : ""}`}>
      <div className="product-reveal-stage" style={{ "--reveal": `${reveal}%` } as CSSProperties}
        role={failed ? undefined : "slider"} tabIndex={failed ? -1 : 0}
        aria-label={`Reveal product image for ${project.title}`}
        aria-valuemin={failed ? undefined : 0} aria-valuemax={failed ? undefined : 100}
        aria-valuenow={failed ? undefined : Math.round(reveal)}
        aria-valuetext={failed ? undefined : `${Math.round(reveal)}% product image revealed`}
        aria-orientation={failed ? undefined : "horizontal"}
        onPointerDown={event => { if (!failed && event.isPrimary && event.button === 0) { setAnimate(false); gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, reveal, dragging: false }; } }}
        onPointerMove={move} onPointerUp={end} onPointerCancel={end}
        onLostPointerCapture={() => { gesture.current = null; }} onKeyDown={keyDown}>
        <ProjectVisual project={project} productImage={productImage} />
        {!failed ? <>
          <div className={`product-reveal-image ${project.color}`} style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }} aria-hidden="true">
            <img src={productImage} alt="" loading="lazy" decoding="async" draggable={false} onError={() => setFailed(true)} />
          </div>
          {reveal > 0 && reveal < 100 ? <span className="reveal-divider" aria-hidden="true" /> : null}
        </> : null}
      </div>
      {!failed ? <button
        type="button"
        className="reveal-hint"
        aria-label={`${reveal === 100 ? "Hide" : "Show"} product image for ${project.title}`}
        aria-pressed={reveal === 100}
        onClick={() => { setAnimate(true); setReveal(value => value === 100 ? 0 : 100); }}
      ><span aria-hidden="true">↔</span></button> : null}
    </div>
  );
}

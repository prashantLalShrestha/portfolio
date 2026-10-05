import { ShoppingBag, Truck, Users, Wallet } from "lucide-react";
import type { Project } from "../../data/types";
const visuals = {
  retail: { Icon: ShoppingBag, caption: "A home project starts here." },
  payment: { Icon: Wallet, caption: "Everyday payments, in your pocket." },
  delivery: { Icon: Truck, caption: "From the kitchen to your door." },
  community: { Icon: Users, caption: "A little closer to the community." },
};
export function EverydayProjectVisual({ project }: { project: Project }) {
  const key = project.visual;
  if (
    key !== "retail" &&
    key !== "payment" &&
    key !== "delivery" &&
    key !== "community"
  )
    return null;
  const { Icon, caption } = visuals[key];
  return (
    <div
      className={`project-visual everyday-visual ${project.color}`}
      aria-hidden="true"
    >
      <div className="visual-grid" />
      <span className="visual-index">{project.category}</span>
      <div className="everyday-art">
        <span className="everyday-icon">
          <Icon size={55} strokeWidth={1.2} />
        </span>
        <h3>{project.title}</h3>
        <p>{caption}</p>
      </div>
      <span className="visual-caption">CONCEPT ILLUSTRATION</span>
    </div>
  );
}

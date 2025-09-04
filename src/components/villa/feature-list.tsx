import type React from "react";
import { cn } from "@/lib/utils";

export interface FeatureListItem {
  readonly text: string;
}

export interface FeatureListProps {
  readonly title?: string;
  readonly items: ReadonlyArray<FeatureListItem | string>;
  readonly icon?:
    | React.ComponentType<{ className?: string; size?: number }>
    | ((props: { className?: string; size?: number }) => JSX.Element);
  readonly className?: string;
}

export function FeatureList({ title, items, icon: Icon, className }: FeatureListProps): JSX.Element {
  const normalized: ReadonlyArray<FeatureListItem> = items.map((it) =>
    typeof it === "string" ? { text: it } : it
  );
  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-soft border border-gray-100", className)}>
      {title ? (
        <div className="flex items-center gap-3 mb-4">
          {Icon ? <Icon className="text-villa-olive" size={24} /> : null}
          <h4 className="text-xl font-semibold text-villa-olive">{title}</h4>
        </div>
      ) : null}
      <ul className="space-y-3">
        {normalized.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-villa-olive mt-2 flex-shrink-0" />
            <span className="text-gray-700 leading-relaxed">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}



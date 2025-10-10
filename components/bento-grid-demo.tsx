// component/bento-grid-demo.tsx
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    FileText,
    FormInput,
    Globe,
    LayoutDashboard
} from "lucide-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto mt-12">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-slate-900 dark:to-slate-800 to-neutral-100 animate-pulse"></div>
);

const items = [
  {
    title: "Dynamic Dashboards",
    description: "Build and customize dashboards with our intuitive drag-and-drop interface.",
    header: <Skeleton />,
    icon: <LayoutDashboard className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage machine learning to uncover hidden trends in your data.",
    header: <Skeleton />,
    icon: <FileText className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Global CDN",
    description: "Deliver your content at lightning speed with our globally distributed network.",
    header: <Skeleton />,
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Automated Form Processing",
    description:
      "Seamlessly process and analyze form submissions with our powerful automation tools.",
    header: <Skeleton />,
    icon: <FormInput className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
];
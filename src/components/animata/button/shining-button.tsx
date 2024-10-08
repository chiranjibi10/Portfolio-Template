import { cn } from "../../../libs/utils";

interface ShiningButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ShiningButton: React.FC<ShiningButtonProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <button
      className="group cursor-pointer rounded-xl border-4 border-buttonColor border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100"
      onClick={onClick}
    >
      <div className="relative flex items-center justify-center gap-2 md:gap-4 overflow-hidden rounded-lg bg-buttonColor px-4 md:px-6 py-2 md:py-4 font-bold text-foreground/100 text-base md:text-xl">
        {label}
        {icon && (
          <div className="transition-all group-hover:translate-x-2 group-hover:scale-125">
            {icon}
          </div>
        )}
        <div
          className={cn(
            "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]"
          )}
        />
      </div>
    </button>
  );
};

export default ShiningButton;

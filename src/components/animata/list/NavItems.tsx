import { cn } from "../../../libs/utils";

interface NavItemsProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

export const NavItems = ({
  text = "Nav Item",
  className,
  onClick,
}: NavItemsProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group flex flex-col items-center text-lg cursor-pointer py-2",
        className
      )}
    >
      <div className="py-1 px-5 min-w-fit text-foreground hover:text-secondaryColor font-bold">
        {text}
      </div>
      <div className="transition-all duration-300  group-hover:w-24  h-0.5 bg-foreground"></div>
    </div>
  );
};

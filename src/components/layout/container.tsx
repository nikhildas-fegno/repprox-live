import { cn } from "@/lib/utils";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    headerMargin?: boolean;
};

const Container: React.FC<ContainerProps> = ({
    children,
    // headerMargin,
    className = "",
}) => {
    return (
        <div
            className={cn(
                `
          w-full
          px-[16px] 
          sm:px-[24px] 
          md:px-0
          md:max-w-[92%]
          2xl:max-w-[calc(1536px-220px)]
          3xl:max-w-[calc(1600px-260px)]
          4xl:max-w-[calc(1920px-300px)]
          mx-auto
        `,
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;

import * as React from "react"
import { cn } from "@/lib/utils"

// Since I didn't install class-variance-authority or radix-ui slot, I should probably stick to simple props or install them.
// Wait, I didn't install class-variance-authority. I should probably just make a simple button for now to avoid extra deps if I can't run commands easily.
// Actually, I can run commands, it just takes a bit.
// Let's make a simple button without cva for now to be faster, or I can install cva.
// The user wants "dynamic", so a good button is important.
// I'll implement a flexible button without CVA to save a round trip of installation, 
// or I can just install it. I'll install it to be professional.

// Wait, I'll just write a good button component that handles variants manually for now to save time/complexity 
// since I already had issues with npm.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            default: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90",
            destructive: "bg-red-500 text-white hover:bg-red-500/90",
            outline: "border border-[var(--input)] bg-[var(--background)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
            secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/80",
            ghost: "hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
            link: "text-[var(--primary)] underline-offset-4 hover:underline",
        }

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        }

        const Comp = "button"
        return (
            <Comp
                className={cn(baseStyles, variants[variant as keyof typeof variants], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }

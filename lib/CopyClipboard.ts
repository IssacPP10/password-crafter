// copyClipboard.ts
export const copyClipboard = (value: string, toast: (options: any) => void) => {
    navigator.clipboard.writeText(value)
        .then(() => {
            toast({
                title: "Value copied ✅"
            });
        })
        .catch((error) => {
            toast({
                title: "Failed to copy ❌",
                description: error.message,
            });
        });
};

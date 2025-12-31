export function LoadingElement() {
    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div
                className="w-16 h-16 border-4 border-transparent animate-spin flex items-center justify-center border-t-secondary rounded-full"
            >
                <div
                    className="w-12 h-12 border-4 border-transparent animate-spin flex items-center justify-center border-t-primary rounded-full"
                ></div>
            </div>
        </div>
    )
}
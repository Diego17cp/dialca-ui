import { Loader } from "dialca-ui";
import { Suspense } from "react";

const LazyLoader = () => (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader
            size="xl"
        />
    </div>
)

export const LazyWrapper = ({
    children,
    fallback,
} : { children: React.ReactNode; fallback?: React.ReactNode }) => {
    return (
        <Suspense fallback={fallback || <LazyLoader />}>
            {children}
        </Suspense>
    )
}
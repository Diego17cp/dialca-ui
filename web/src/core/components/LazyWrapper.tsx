import { Suspense } from "react";

export const LazyWrapper = ({
    children,
    fallback,
} : { children: React.ReactNode; fallback?: React.ReactNode }) => {
    return (
        <Suspense fallback={fallback || <div>Loading...</div>}>
            {children}
        </Suspense>
    )
}
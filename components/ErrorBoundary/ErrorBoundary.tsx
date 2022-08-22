import { FC, ReactNode } from "react";
import ErrorComponent from "../ErrorComponent";
import Loading from "../Loading";

interface ErrorBoundaryProps {
    isError: boolean;
    isLoading: boolean;
    isFetching: boolean;
    children: ReactNode;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children, isLoading, isFetching, isError }) => {
    return (
        <>
            {
                isLoading || isFetching ? <Loading /> : isError ? <ErrorComponent /> : children
            }
        </>
    )
}

export default ErrorBoundary
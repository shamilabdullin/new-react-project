import React from "react";

interface IProps {
  children: React.ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IProps, IState> {
  public static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  public state = {
    hasError: false
  };

  public componentDidCatch(error: any, errorInfo: any) {
    // tslint:disable-next-line: no-console
    console.log(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

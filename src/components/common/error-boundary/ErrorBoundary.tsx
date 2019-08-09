import React from 'react';

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, IState> {
  private static getDerivedStateFromError(): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public readonly state: IState = {
    hasError: false
  };

  public componentDidCatch(error: any): void {
    console.log(error);
  }

  private handleClose = (): void => {
    this.setState({hasError: false});
  };

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <span>
          Error while rendering
          <button onClick={this.handleClose}>x</button>
        </span>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

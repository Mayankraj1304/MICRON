import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Remote app crashed:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ border: "2px solid red", padding: "16px" }}>
          <h3>Dashboard is unavailable</h3>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

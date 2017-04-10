import React from 'react';

/**
 * Quick and dirty code splitting by Andrew Clark
 * https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
 */
const asyncRoute = (getComponent) => {
  return class AsyncComponent extends React.Component {
    static Component = null;
    mounted = false;

    state = {
      Component: AsyncComponent.Component
    };

    componentWillMount() {
      if (this.state.Component === null) {
        getComponent().then(m => m.default).then((Component) => {
          AsyncComponent.Component = Component;
          if (this.mounted) {
            this.setState({ Component });
          }
        });
      }
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      const { Component } = this.state;

      if (Component !== null) {
        return <Component {...this.props} />;
      }
      return null; // or <div /> with a loading spinner, etc..
    }
  };
};

export default asyncRoute;

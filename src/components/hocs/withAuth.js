import React from 'react';

const withAuth = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.props.history.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withAuth;

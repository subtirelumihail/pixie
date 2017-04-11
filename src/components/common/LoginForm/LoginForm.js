import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Input, Button, Form, Message } from 'semantic-ui-react';

const LoginForm = (props) => {
  const { isLoading, handleLogin, error } = props;

  const loginHandler = () => {
    handleLogin({
      username: this.email.inputRef.value,
      password: this.password.inputRef.value
    });
  };

  return (
    <div className="login-form">
      <Container>
        <Header as="h1">Login</Header>
        <Form size="small" error={!!props.error} loading={isLoading}>
          <Form.Field>
            <label>Email</label>
            <Input ref={(ref) => { this.email = ref; }} icon="mail outline" iconPosition="left" placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input ref={(ref) => { this.password = ref; }} type="password" icon="lock" iconPosition="left" placeholder="Password" />
          </Form.Field>
          <Message
            error
            header="Action Forbidden"
            content={error}
          />
          <Button type="button" primary onClick={loginHandler}>Primary</Button>
        </Form>
      </Container>
    </div>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

LoginForm.defaultProps = {
  error: null,
  isLoading: false
};

export default LoginForm;

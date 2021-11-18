import { Button } from '@material-ui/core';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Register = () => {
  const { registerUser } = useAuth();
  return (
    <div style={{ margin: '20px auto' }}>
      <Button
        variant="contained"
        color="promary"
        onClick={() => registerUser()}
      >
        Sign In
      </Button>
    </div>
  );
};

export default Register;

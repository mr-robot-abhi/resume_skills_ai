'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Form, Input, Label } from 'semantic-ui-react';

const loginpage = () => {
  const [membershipId, setMembershipId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TO DO: Implement login logic with MongoDB and authentication routes
  };

  return (
    <motion.div
      className="login-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: '420px',
        margin: '0 auto',
        padding: '2.5rem',
        background: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.15)',
      }}
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontWeight: '600',
          fontSize: '1.8rem',
          color: '#333',
        }}
      >
        Login
      </motion.h2>
      <Form>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Form.Field>
            <Label style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Membership ID or Phone Number</Label>
            <Input
              type="text"
              value={membershipId}
              onChange={(e) => setMembershipId(e.target.value)}
              placeholder="Membership ID or Phone Number"
              style={{
                padding: '0.9rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
              }}
            />
          </Form.Field>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Form.Field>
            <Label style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{
                padding: '0.9rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
              }}
            />
          </Form.Field>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            primary
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#007BFF',
              color: '#fff',
              fontSize: '1rem',
              marginTop: '1.5rem',
              borderRadius: '6px',
              boxShadow: '0px 6px 16px rgba(0, 123, 255, 0.4)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </Button>

          <Button
            secondary
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#f0f4ff',
              color: '#007BFF',
              fontSize: '1rem',
              marginTop: '1rem',
              borderRadius: '6px',
              border: '1px solid #007BFF',
              boxShadow: '0px 4px 12px rgba(0, 123, 255, 0.1)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Forgot Password?
          </Button>
        </motion.div>
      </Form>
    </motion.div>
  );
};

export default loginpage;

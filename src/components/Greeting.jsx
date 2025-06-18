import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  return (
    <div style={styles.container}>
      <h2>Enter Your Name:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name..."
        style={styles.input}
      />
      {name && <p style={styles.greeting}>Hello, {name}!</p>}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '200px',
  },
  greeting: {
    marginTop: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Greeting;

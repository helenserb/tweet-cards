import React from 'react';

const styles = {
  title: {
    fontWeight: 700,
    fontSize: 50,
    textAlign: 'center',
  },
};

export default function HomeView() {
  return (
<>
      <h1 style = {styles.title}>
        Welcome to phonebook!
      </h1>
</>
  );
}

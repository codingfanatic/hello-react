import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const getRepos = async () => {
      const url = "https://ghapi.huchen.dev/repositories?since=monthly";
      const resp = await fetch(url);
      const body = await resp.json();
      console.log(body);
    };

    getRepos();
  }, []);

  return <div></div>;
}

export default App;

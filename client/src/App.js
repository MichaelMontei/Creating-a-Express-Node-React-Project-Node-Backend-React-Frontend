import React, {useEffect, useState} from "react";
import './App.css';

function App() {

    const [backendData, setBackendData] = useState([{}])
    const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api")
        .then(response => response.json())
        .then(data => {
          setBackendData(data)
        }
      )
  }, [])

    useEffect(() => {
        fetch("/name")
            .then(response => response.json())
            .then(data => {
                    setName(data)
                console.log(data);
                }
            )
    },)



  return (
    <div>
        {(typeof backendData.users === 'undefined') ? (
            <p>Loading ... Please Wait</p>
        ) : (
            backendData.users.map((user, i) => (
                <p key={i}>{user}</p>
            ))
        )}
    </div>
  );
}

export default App;

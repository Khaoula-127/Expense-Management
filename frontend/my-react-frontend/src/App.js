import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import bg from './img/bg.png'
import {MainLayout} from './styles/layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Nav'
import Dashboard from './Components/Dashboard/dashboard';
import Income from './Components/Incomes/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import Login from './Components/Login/Login'
import Register from './Components/Registration/Register'
function App() {
  const [active, setActive] = useState(1)
  const { user } = useGlobalContext()

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <Router>
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/*"
            element={
              user ? (
                <MainLayout>
                  <Navigation active={active} setActive={setActive} />
                  <main>{displayData()}</main>
                </MainLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
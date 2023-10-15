import './App.css';
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { sizing } from "./util";
import Home from "./components/Home";
import Chat from './components/Chat';
import Plan from './components/ActionPlan';
import InquireForm from './components/InquireForm';

const View = styled.div`
  background-color: #fff;
  box-shadow: ${sizing(0)} ${sizing(4)} ${sizing(20)} ${sizing(0)} rgba(0, 0, 0, 0.3);
  width: ${sizing(1000)};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow-y: auto;
`;

function App() {
  return (
    <div className="App">
      <View>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/chat" Component={Chat} />
          <Route path="/plan" Component={Plan} />
          <Route path="/inquire" Component={InquireForm} />
        </Routes>
      </View>
    </div>
  );
}

export default App;

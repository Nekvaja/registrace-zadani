import { Registration } from "./components/Registration";


export const App = () => {
  return (
    <div className="container">
      <h1>REGISTRATION</h1>
      <div className="avatar-container">
        <img src="user.png" alt="user-avatar" />
      </div>
      <Registration/>
    </div>
  );
};

export default App;

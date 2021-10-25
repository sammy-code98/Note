import NewNote from "./components/NewNote";
import ListNote from "./components/ListNote";

const display = {
  display:'flex',
  flexDirection:'row',
  alignItem:'center',
  justifyContent:'center'
}
function App() {
  return <div style={display}>
<NewNote/>
<ListNote/>
  </div>;
}

export default App;

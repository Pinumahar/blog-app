import Blog from "./Blog";
import Review from "./Review";
import Search from "./Search";
import User from "./User";

function App(){
  return (
    <div>
      <h1>Blog App</h1>
      <Search />
      <User name="pinu" role="admin" />
      <Review name="pinu" rating="5" description="hotel is good" />
      <Button title="Create blog" />
      <Button title="Edit blog" />
      <Button title="Delete blog" />
      <Title />


      <Blog title="Blog title 1" description="New Description"/>
      <Blog title="Blog title 2" description="New Description"/>
      <Blog title="Blog title 3" description="New Description"/> 
      <Blog title="Blog title 4" description="New Description"/>
      <Blog title="Blog title 5" description="New Description"/>
      <div>



      </div>
    </div>
  )
}

export default App;
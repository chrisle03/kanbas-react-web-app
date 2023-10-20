import ModuleList from "../Modules/ModuleList";
import Status from "./status";

function Home() {
  return (
    <div>
      <div className="row" style={{paddingTop: "20px"}}>
        <div className="col-8">
          <ModuleList />
        </div>
        <div className="col-3 d-none d-lg-block">
          <Status />
        </div>
      </div>
    </div>
  );
}
export default Home;
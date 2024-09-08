import { useState } from "react";
import ImagePiquer from "./components/ImagePiquer";
import ChartResult from "./components/ChartResult";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [expressions, setExpressions] = useState({});

  return <div className="container my-3">
    <div className="row">
      <div className="col col-md-6">
        <ImagePiquer setExpressions={setExpressions} setLoading={setLoading} />
      </div>
      <div className="col com-md-6">
        {loading ? (<div className="d-flex mt-5 justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>) : expressions !== undefined ?
          <ChartResult expressions={expressions}/> :
            <div className="alert alert-secondary">L&apos;image ne contient aucun visage</div>
        }
      </div>
    </div>
  </div>;
}

export default App;
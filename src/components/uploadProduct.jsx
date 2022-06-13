import React,{useState,useEffect} from "react";
import http from "../services/httpService";
import Papa from "papaparse";
function UploadProduct(){
       const [values, setValues] = useState([]);
       function handlechange(e){
        Papa.parse(e.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
              setValues(results.data);
            },
          });
       }
       useEffect(async ()=>{
        let response=await http.post(`/uploadProduct`,values);
        let {data}=response;
        console.log(data);
    },[])
       console.log(values);
    return(<div className="container">
         <form>
            <h3>File Upload</h3>
            <div className="mb-3">
              <input
                type="file"
                name="file"
                accept=".csv"
                onChange={handlechange}
                className="form-control"
              />
            </div>
            <div className="row">
                 
            </div>
          </form>
    </div>
    );
}
export default UploadProduct;
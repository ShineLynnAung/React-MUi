import axios from "axios";
const API_URL = process.env.REACT_APP_UAT_API_ENDPOINT;
export const GetBusinessTypeAPI=async()=>{
    try{
        const timestamp = new Date().getTime();
        const res=await axios.get(API_URL+'Content/BusinessType.json?t='+timestamp);
        console.log("ResData",res.data);
        return res.data;

    }
    catch(e){
        console.log(e);
    }
}
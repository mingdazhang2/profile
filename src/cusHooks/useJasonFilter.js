
import  { useState, useEffect, useMemo } from 'react';


 function useJasonFilter(jsonObjArray, id='1') {

  const [filterdObjs, setfilterdObjs] = useState(jsonObjArray);

  useEffect(()=>{
  
    setfilterdObjs(jsonObjArray.filter((jsonItem)=>jsonItem.id===id)) 
  },[jsonObjArray, id])
  
  return filterdObjs 

}

export default useJasonFilter;

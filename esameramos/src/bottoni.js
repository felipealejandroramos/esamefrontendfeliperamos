import { useState } from "react";
import  { getUserData } from './api/utenti';
import  { getOrderData } from './api/commesse';

 const Bottoni = () => {
    const [datau, setDatau] = useState({ datau: [] });
    const [datao, setDatao] = useState({ datao: [] });
    
    const handleusers = async () => {
              const  datauser = getUserData()
              console.log("data is: ", JSON.stringify(datauser));
              setDatau(datauser)
      }
      const handleorders = async () => {
        const dataorder = getOrderData()
        console.log("data is: ", JSON.stringify(dataorder));
        setDatao(dataorder)
     
}
    return (
        <div>
          
        
          <button onClick={handleorders}>ordini</button>
          <button onClick={handleusers}>utenti</button>
          
          
         
        </div>
      );
}

export default Bottoni


import axios from "axios";

 export const getUserData = async () => {
   try {
       const users = await  axios.get(`https://zenithar-dev.herokuapp.com/users`, {
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGIzOTRkNzA4OWY5MDAxNmRiYzlkMSIsImlhdCI6MTY1MzI5MTM4Mn0.z11A1VUEDgMQFVfVpNuRSeaVEAV0uLmsYoqLPhT-yUs",
            },
          }).then(Response=>{
            
            return Response
          })
       return JSON.stringify(users)
   } catch (e) {

   }
}




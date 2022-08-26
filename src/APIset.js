/* eslint-disable import/prefer-default-export */
export class MarcoPolo {
 static addScore = async (user, score) => {
   const idUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4nTGw7Pv17Te8sjkTexb/scores/';
   const response = await fetch(idUrl, {
     method: 'POST',
     body: JSON.stringify({
       user,
       score,
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   });
   return response;
 }
}

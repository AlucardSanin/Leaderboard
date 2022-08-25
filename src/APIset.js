/* eslint-disable import/prefer-default-export */
export const MarcoPolo = {
  async addScore(user, score) {
    const idUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/94MD1RzkEJ6LkZ0NpORz/scores/';
    const response = await fetch(idUrl, {
      method: 'POST',
      body: JSON.stringify({
        "user": user,
        "score": score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    console.log(response.json());
  },
};

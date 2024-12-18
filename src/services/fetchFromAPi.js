"use server";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_READ_TOKEN}`,
    //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzUyMGE1MzhmMjBmNzU2ZjA0MTM3OWRmZTBkOTAzYiIsIm5iZiI6MTczMjYyODA0Ny43MTg1NjEyLCJzdWIiOiI2NzQ1Y2QyYzQxNDMzNDI4ZDkyZWMyYWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vl19F0ioPgepbfMPCgcSTO53XUQbEcWfQc6hBHmChlo",
  },
};

export async function fetchFromApi(params) {
  const movieList = await fetch(
    `https://api.themoviedb.org/3/${params}`,
    options
  ).then((res) => res.json());
  return movieList;

  // .catch((err) => console.error(err));
}

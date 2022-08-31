import React from "react";
import Card from "../../Components/Card";
import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";



export const getStaticProps = async () => {
  let res = await fetch(
    'https://fakse-store-api.herokuapp.com/api/v1/products?limit=100&offset=0'
  );
  let data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
 

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((m, i) => {
          return <Card key={i} d={m} />;
        })}
      </Box>
    
    </>
  );
}

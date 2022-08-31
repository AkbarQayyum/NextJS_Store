import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import {useState} from 'react';
import Image from "next/image";
import Model from '../../Components/Model';
import axios from 'axios';
import {useRouter} from 'next/router'

export const getServerSideProps = async (context) => {
  let post = await fetch(
    `https://fakse-store-api.herokuapp.com/api/v1/products/${context.params.id}`
  );
  let data = await post.json();

  return {
    props: {
      data,
    },
  };
};

export default function Slug({ data }) {
  let [state,setstate]=React.useState(false);
   let [num, setnum] = React.useState(0);
let router=useRouter();
  function changeState()
{
  setstate(!state);
}
function sendData()
{
  let obj={
  p_id:data.id,
  p_name:data.title,
  p_price:data.price,
  quantity:num,
  total:num*data.price,
  }
  axios.post('/api/Add',obj).then((res)=>{
    if(res.data=='saved')
    {
      alert('Add to Cart')
      router.push('/Cart')

    }
    else{
      alert('failed to add')
    }
  })
}
  return (
    <div>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ width: "100%", margin: "20px auto" }} component="div">
              <Image
                src={data.images[0]}
                height={100}
                width={250}
                layout="responsive"
                alt="image"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "48%" }} component="div">
                <Image
                  src={data.images[1]}
                  height={80}
                  width={150}
                  layout="responsive"
                  alt="image"
                />
              </Box>
              <Box sx={{ width: "48%" }} component="div">
                <Image
                  src={data.images[2]}
                  height={80}
                  width={150}
                  layout="responsive"
                  alt='image'
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography sx={{ fontWeight: "bold", margin: "10px 0px" }}>
            {data.id}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", color: "chocolate", margin: "10px 0px" }}
            variant="h5"
          >
            {data.category.name}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", margin: "10px 0px" }}
            variant="h4"
          >
            {data.title}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", margin: "10px 0px" }}
            variant="h3"
          >
            $ {data.price}
          </Typography>
          <Typography sx={{ margin: "10px 0px" }} variant="p" component="div">
            {data.description}
          </Typography>
          <Box sx={{margin:'50px auto'}}>
            <Button variant='contained' sx={{width:'100%'}} onClick={changeState}>Add To Cart</Button>
          </Box>
        </Grid>
      </Grid>
      {
        state ?<Model state={state} changeState={changeState} num={num} setnum={setnum} sendData={sendData} />:null
      }
    </div>
  );
}

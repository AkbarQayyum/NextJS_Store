import React from "react";
import Link from 'next/link'
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
export default function Card({ d }) {
  return (
    <Box
      sx={{
        width: { md: "30%", xs: "80%" },
        margin: "20px auto",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "rgba(240,240,240,0.5)",
        boxShadow: "0px 0px 3px 3px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ width: "100%" }}>
        <Image
          src={d.images[0]}
          layout="responsive"
          height={250}
          width={300}
          alt="image"
        />
      </div>
      <Box>
        <Typography variant="h5">{d.title}</Typography>
        <Typography variant="p" component="div" sx={{ color: "chocolate" }}>
          {d.category.name}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          $ {d.price}
        </Typography>
      </Box>
      <Link href={`/productDetails/${d.id}`} >
        <Button variant="contained" sx={{ width: "100%" }}>
          See More
        </Button>
      </Link>
    </Box>
  );
}

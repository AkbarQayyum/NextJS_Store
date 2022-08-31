import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
export default function Header() {
  return (
    <Box>
        <Head>
            <title>Header component</title>
        </Head>
      <Grid container sx={{ boxShadow: "0px 0px 3px 3px rgba(0,0,0,0.4)",padding:'5px 20px' }}>
        <Grid item xs={3} md={6}>
          <Typography variant="h3">Cart.</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap:'wrap'
          }}
        >
          <Typography className={styles.anchor}>
            <Link href='/Home'>Home</Link>
          </Typography>
          <Typography className={styles.anchor}>
            <Link href='/Contact'>Contact us</Link>
          </Typography>
          <Typography className={styles.anchor}>
            <Link href='/About'>About us</Link>
          </Typography>
          <Typography className={styles.anchor}>
            <Link href='/Login'>SignIn</Link>
          </Typography>
          <Typography className={styles.anchor}>
            <Link href='/Register'>Register</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

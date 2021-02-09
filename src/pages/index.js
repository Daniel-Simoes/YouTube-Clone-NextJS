import React from "react";
import { Button } from '@material-ui/core';

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout title="YouTube">
      Clone Youtube with Next.js and Material Ui!
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
    </Layout>
  )
} 
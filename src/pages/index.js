import React from 'react';
import { Box, Grid } from '@material-ui/core';

import Layout from '../components/layout';
import VideoCard from '../components/VideoCard';

function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: "Swiftfox Apps @ Zeminar",
      authoId: 1,
      authorName: "MOVA",
      authorAvatar: "avatarUrl",
      views: 10,
      thumb: "/thumbs/next01.png",
      videoUrl: "url",
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "DTS 2019 App: Promotional Video",
      authoId: 2,
      authorName: "MOVA",
      authorAvatar: "avatarUrl",
      views: 22,
      thumb: "/thumbs/next02.png",
      videoUrl: "url",
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: "Swiftfox Apps @ Dublin Tech Summit",
      authoId: 3,
      authorName: "MOVA",
      authorAvatar: "avatarUrl",
      views: 3,
      thumb: "/thumbs/next03.png",
      videoUrl: "url",
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: "Blocking profile demo",
      authoId: 4,
      authorName: "MOVA",
      authorAvatar: "avatarUrl",
      views: 33,
      thumb: "/thumbs/next04.png",
      videoUrl: "url",
      updatedAt: new Date(),
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Home;
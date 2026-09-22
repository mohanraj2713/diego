import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Swara Patel | Dance Educator",
  description: "I use movement to unlock what words often cannot — confidence, connection, joy, and self-expression.",
  icons: {
    icon: "/assets/img/source/Simple SP Letter Logo 1.png",
  },
};

const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;
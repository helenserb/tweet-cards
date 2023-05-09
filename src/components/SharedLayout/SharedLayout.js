import { Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { Container, Title } from './SharedLayout.styled';

export const SharedLayout = () => (
  <>
    <Container>
      <main>
        <Title>Tweets APP</Title>
        <Suspense
          fallback={
            <ThreeDots
              height="200"
              width="200"
              radius="9"
              color="#5cd3a8"
              ariaLabel="three-dots-loading"
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                position: "fixed",
                top: "300px",
                left: "50%",
                transform: "translate(-50%)",
              }}
              wrapperClassName=""
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  </>
);

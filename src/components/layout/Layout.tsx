import Head from "next/head";
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../store/AppState";
import Footer from "../composed/Footer/Footer";
import Navbar from "../composed/Navbar/Navbar";

interface Props {
  children: React.ReactNode;
  noBodyWrapper?: boolean;
}

const Layout: React.FC<Props> = ({ children, noBodyWrapper }) => {
  const { theme } = useContext(AppContext);

  return (
    <StyledLayout className="bg-blue">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <main
        className={`transition-all duration-500 ease-in-out ${
          theme === "dark" ? "text-white bg-blue" : "text-black bg-white"
        }`}
      >
        <div>
          <Navbar />
          {!noBodyWrapper ? (
            <div className="fk-content custom-container mx-auto">
              {children}
            </div>
          ) : (
            <div className="fk-content">{children}</div>
          )}
          <Footer theme={theme} />
        </div>
      </main>
    </StyledLayout>
  );
};

const StyledLayout = styled.article`
  min-height: 100vh;

  & > main {
    & > div {
      max-width: 1440px;
      margin: 0 auto;
      flex-direction: column;
      justify-content: space-between;

      & > .fk-content {
        width: 100%;
        margin: auto;
        min-height: 78vh;
      }
    }
  }
`;

export default Layout;

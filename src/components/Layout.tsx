import { ReactNode, useEffect, useState } from "react";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import FullScreenLoader from "./FullScreenLoader";

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showHeader = true }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  if (!isReady) {
    return <FullScreenLoader />;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {showHeader && <Header />}

      <Box
        component="main"
        aria-label="Main content"
        sx={{
          width: "100%",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;

import { useEffect } from "react";
import { Outlet, useMatches } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const SITE = "sqDiagramLearn";

// Judul tab diambil dari `handle.title` rute yang paling dalam.
function PageTitle() {
  const matches = useMatches();
  const title = [...matches].reverse().find((m) => m.handle?.title)?.handle.title;
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : SITE;
  }, [title]);
  return null;
}

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <PageTitle />
      <Outlet />
    </>
  );
}

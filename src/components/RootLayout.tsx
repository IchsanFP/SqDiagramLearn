import { useEffect } from "react";
import { Outlet, useMatches } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export interface RouteHandle {
  /** Judul tab browser untuk rute ini; " · sqDiagramLearn" ditambahkan otomatis. */
  title?: string;
}

const SITE = "sqDiagramLearn";

// Judul tab diambil dari `handle.title` rute yang paling dalam.
function PageTitle() {
  const matches = useMatches();
  const title = [...matches]
    .reverse()
    .map((m) => (m.handle as RouteHandle | undefined)?.title)
    .find(Boolean);
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

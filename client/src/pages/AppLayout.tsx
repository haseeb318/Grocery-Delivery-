import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <p>banner</p>
      <p>navbar</p>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <p>foooter</p>
      <p>cartsidebar</p>
    </>
  );
}

export default AppLayout;

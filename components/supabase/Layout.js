import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import Breadcrumb from "@components/supabase/Breadcrumb";
import Navbar from "@components/supabase/Navbar"
import MobileMenu from "@components/supabase/MobileMenu";
import SidebarMenu from "@components/supabase/SidebarMenu";
import { HomeIcon } from "@heroicons/react/outline";
import SidebarNavLink from "@components/supabase/SidebarNavLink";

export default function Layout({ children }) {

  const { showSidebarMenu } = useContext(GlobalContext);

  return (
    <div className="dark:bg-neutral-900 min-h-screen">
      {/* <Navbar /> */}
      <MobileMenu />
      {/* Full Width */}
      {/* <div className="mx-auto px-2 py-2 h-full"> */}
      <div className="max-w-screen-2xl mx-auto h-full">
        <div className="lg:flex h-full relative">
          <SidebarMenu />
          <div className="w-40 fixed ml-14 border-r">
            <div className="border-b h-12 flex items-center p-4">
              <p>Menu</p>
            </div>
            <div style={{
              maxHeight: "calc(-50px + 100vh)"
            }} className="p-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">
              {[...Array(20).keys()].map(i =>
                <SidebarNavLink key={i} href="/dashboard" icon={<HomeIcon className="w-5 h-5" />}>
                  Dashboard {i}
                </SidebarNavLink>
              )}
            </div>
          </div>
          <div className="w-full ml-56">
            <Navbar />
            <div className="m-2">
              <Breadcrumb />
              {/* Start Content */}
              {children}
              {/* End Content */}
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}

import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import Breadcrumb from "@components/supabase/Breadcrumb";
import Navbar from "@components/supabase/Navbar"
import MobileMenu from "@components/supabase/MobileMenu";
import SidebarMenu from "@components/supabase/SidebarMenu";
// import SidebarNavLink from "@components/supabase/SidebarNavLink";
// import SidebarNavAccordion from "@components/supabase/SidebarNavAccordion";

export default function Layout({ children, sidebar, sidebarTitle }) {

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
          <div className={`w-60 hidden fixed lg:pl-14 h-full border-r dark:border-r-neutral-800 ${showSidebarMenu && sidebar ? 'lg:block' : 'lg:hidden'}`}>
            <div className="border-b dark:border-b-neutral-800 h-12 flex items-center p-4">
              <h4 className="text-base font-medium dark:text-white">{sidebarTitle || "Menu"}</h4>
            </div>
            <div style={{
              // to activate scrollbar
              maxHeight: "calc(-55px + 100vh)"
            }} className="p-2 flex flex-col gap-y-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-rounded">
              {sidebar}
            </div>
          </div>
          <div className={`w-full pl-14 ${showSidebarMenu && sidebar ? 'lg:pl-60' : 'lg:pl-14'}`}>
            <Navbar sidebar={sidebar} />
            <div className="px-3 pt-1.5 pb-3 md:px-4 md:pb-4">
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

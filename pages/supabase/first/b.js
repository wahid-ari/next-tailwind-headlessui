import Head from "next/head";
import Layout from "@components/supabase/Layout";
import SidebarNavLink from "@components/supabase/SidebarNavLink";
import SidebarNavAccordion from "@components/supabase/SidebarNavAccordion";

export default function Index() {
  return (
    <>
      <Head>
        <title>First B - Supabase Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout sidebarTitle="First B" sidebar={
        <>
          <SidebarNavAccordion name="One - Five">
            {['One', 'Two', 'Three', 'Four', 'Five'].map(i =>
              <SidebarNavLink key={i} href={`/supabase/first/b#${i}`}>
                First B {i}
              </SidebarNavLink>
            )}
          </SidebarNavAccordion>
          <SidebarNavAccordion name="Six - Ten">
            {['Six', 'Seven', 'Eight', 'Nine', 'Ten'].map(i =>
              <SidebarNavLink key={i} href={`/supabase/first/b#${i}`}>
                First B {i}
              </SidebarNavLink>
            )}
          </SidebarNavAccordion>
          {['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'].map(i =>
            <SidebarNavLink key={i} href={`/supabase/first/b#${i}`}>
              First B {i}
            </SidebarNavLink>
          )}
        </>
      }>
        <div className="bg-orange-500 h-96 flex items-center justify-center">
          <h1 className="text-white font-medium text-2xl px-8">First B Supabase Dashboard</h1>
        </div>
        <div className="bg-purple-500 h-96">
        </div>
        <div className="bg-pink-500 h-96">
        </div>
      </Layout>
    </>
  )
}
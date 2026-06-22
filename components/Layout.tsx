import { Activity, Aperture, Download, GitCompare, History, LayoutDashboard, PlayCircle, Plug, SettingsIcon } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./ui/sidebar";

export default function Layout() {
  const location = useLocation();
  const projectName = "CoreLogics LOOP";

  const navigation = [
    { label: "Dashboard", route: "/", icon: LayoutDashboard },
    { label: "Sources", route: "/sources", icon: Plug },
    { label: "Run Comparison", route: "/run-comparison", icon: PlayCircle },
    { label: "Run History", route: "/history", icon: History },
    { label: "Connector Health", route: "/health", icon: Activity },
    { label: "Comparison Results", route: "/results", icon: GitCompare },
    { label: "Export Center", route: "/exports", icon: Download },
    { label: "Settings", route: "/settings", icon: SettingsIcon },
  ];

  const currentTitle =
    navigation.find((item) =>
      item.route === "/" ? location.pathname === "/" : location.pathname.startsWith(item.route)
    )?.label ?? "CoreLogics LOOP Webapp";

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        <Sidebar collapsible="icon" className="border-r bg-card">
          <SidebarHeader className="h-14 justify-center border-b px-4 group-data-[collapsible=icon]:px-2">
            <NavLink
              to="/"
              end
              className="flex h-10 items-center rounded-md px-2 text-sidebar-foreground/95 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
            >
              <Aperture className="h-5 w-5 shrink-0" />
              <span className="ml-2 truncate text-base font-bold tracking-tight group-data-[collapsible=icon]:hidden">
                {projectName}
              </span>
            </NavLink>
          </SidebarHeader>
          <SidebarContent className="bg-sidebar text-sidebar-foreground">
            <SidebarGroup className="pt-0">
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <SidebarMenuItem key={item.route}>
                        <SidebarMenuButton asChild tooltip={item.label}>
                          <NavLink
                            to={item.route}
                            end={item.route === "/"}
                            className={({ isActive }) =>
                              isActive
                                ? "bg-sidebar-accent text-sidebar-accent-foreground font-bold"
                                : "text-sidebar-foreground font-medium"
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <Icon className="h-4 w-4" strokeWidth={isActive ? 2.6 : 2} />
                                <span className={isActive ? "font-bold" : "font-medium"}>{item.label}</span>
                              </>
                            )}
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="min-w-0 flex-1">
          <div className="flex min-h-screen w-full min-w-0 flex-col bg-background">
            <Header title={currentTitle} />
            <main className="w-full min-w-0 flex-1 p-4 md:p-6">
              <Outlet />
            </main>
            <Footer />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
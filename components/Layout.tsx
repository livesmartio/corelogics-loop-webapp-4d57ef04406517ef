import {
  Activity,
  Download,
  GitCompare,
  History,
  LayoutDashboard,
  PlayCircle,
  Plug,
  Settings as SettingsIcon,
} from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Separator } from "./ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
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
    <SidebarProvider>
      <div className="min-h-screen w-full bg-background text-foreground">
        <Sidebar>
          <SidebarContent className="bg-sidebar text-sidebar-foreground">
            <SidebarGroup>
              <SidebarGroupLabel className="px-2 text-sm font-semibold text-sidebar-foreground/90">
                {projectName}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <SidebarMenuItem key={item.route}>
                        <SidebarMenuButton asChild>
                          <NavLink
                            to={item.route}
                            end={item.route === "/"}
                            className={({ isActive }) =>
                              isActive
                                ? "flex items-center gap-2 rounded-md bg-sidebar-primary px-2 py-1.5 text-sidebar-primary-foreground"
                                : "flex items-center gap-2 rounded-md px-2 py-1.5 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            }
                          >
                            <Icon className="h-4 w-4" />
                            <span>{item.label}</span>
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

        <SidebarInset>
          <div className="flex min-h-screen w-full min-w-0 flex-col bg-background">
            <div className="flex items-center gap-2 border-b px-4 py-2 md:px-6">
              <SidebarTrigger />
              <Separator orientation="vertical" className="h-4" />
              <p className="text-sm font-medium text-muted-foreground">Operations Console</p>
            </div>
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

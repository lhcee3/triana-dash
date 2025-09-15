'use client';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  FileText,
  Map,
  ShieldAlert,
  History,
  Settings,
  Contact,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const menuItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/map', label: 'Interactive Map', icon: Map },
  { href: '/digital-id', label: 'Digital ID', icon: Contact },
  { href: '/e-fir', label: 'E-FIR Generation', icon: FileText },
  { href: '/incidents', label: 'Incident Reporting', icon: ShieldAlert },
  { href: '/alerts', label: 'Alert History', icon: History, badge: '3' },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-primary">
            <svg
              className="h-6 w-6 text-primary-foreground"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" />
              <path d="M12 16.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5-4.5z" />
              <path d="M12 2v2.5" />
              <path d="M12 19.5V22" />
              <path d="M22 12h-2.5" />
              <path d="M4.5 12H2" />
            </svg>
          </div>
          <h1 className="font-headline text-xl font-semibold">Triana Guardian Eye</h1>
        </div>
      </SidebarHeader>
      <SidebarMenu className="flex-1">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              className="w-full justify-start"
              tooltip={item.label}
            >
              <Link href={item.href}>
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
                {item.badge && (
                  <Badge variant="secondary" className="ml-auto">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <SidebarFooter className="mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="w-full justify-start" tooltip="Settings">
              <Link href="#">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="flex items-center gap-3 rounded-md p-2">
            <Avatar className="h-10 w-10">
                <AvatarImage src="https://picsum.photos/seed/avatar/40/40" data-ai-hint="person portrait" />
                <AvatarFallback>PO</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
                <span className="font-semibold text-sm">Police Officer</span>
                <span className="text-xs text-muted-foreground">Badge #1234</span>
            </div>
        </div>
      </SidebarFooter>
    </>
  );
}

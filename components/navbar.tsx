"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Menu, User } from "lucide-react"

interface NavbarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Navbar({ sidebarOpen, setSidebarOpen }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-white px-4 shadow-sm">
      <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="mr-2 lg:hidden">
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex-1 flex items-center">
        <h1 className="text-xl font-bold text-slate-800">Tifaoune Orpholin - Tableau de Bord</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8 border border-slate-200">
                <AvatarImage src="/placeholder.svg" alt="Admin" />
                <AvatarFallback className="bg-sky-100 text-sky-600">AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Admin User</p>
                <p className="text-xs leading-none text-muted-foreground">admin@tifaoune.org</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profil</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Déconnexion</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

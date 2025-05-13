"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Heart, Users, DollarSign, Settings, X } from "lucide-react"
import { Logo } from "./logo"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const links = [
    { name: "Tableau de Bord", href: "/dashboard", icon: Heart },
    { name: "Orphelins", href: "/orphans", icon: Users },
    { name: "Donations", href: "/donations", icon: DollarSign },
    { name: "Paramètres", href: "/settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {open && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-slate-800 shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-700 px-4">
          <div className="flex items-center">
            <Logo className="text-white" />
            <span className="ml-2 text-lg font-bold text-white">Tifaoune</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="lg:hidden text-slate-300 hover:text-white hover:bg-slate-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="space-y-1 px-2 py-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  isActive(link.href) ? "bg-sky-600 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <Icon className={`mr-3 h-5 w-5 ${isActive(link.href) ? "text-white" : "text-slate-400"}`} />
                {link.name}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

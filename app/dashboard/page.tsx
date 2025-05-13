import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DonationTable } from "@/components/donation-table"
import { Users, DollarSign, UserCog } from "lucide-react"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Tableau de Bord</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-slate-200 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Orphelins</CardTitle>
              <Users className="h-4 w-4 text-sky-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">127</div>
              <p className="text-xs text-slate-500">+5 depuis le mois dernier</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Donations</CardTitle>
              <DollarSign className="h-4 w-4 text-sky-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">$24,565</div>
              <p className="text-xs text-slate-500">+12% depuis le mois dernier</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Employés</CardTitle>
              <UserCog className="h-4 w-4 text-sky-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">18</div>
              <p className="text-xs text-slate-500">+2 nouveaux ce mois</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-1">
          <Card className="col-span-1 border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-slate-800">Donations Récentes</CardTitle>
            </CardHeader>
            <CardContent>
              <DonationTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

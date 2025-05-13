import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, DollarSign, Users } from "lucide-react"

export function DonationStats() {
  return (
    <>
      <Card className="border-slate-200 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-600">Total Donations</CardTitle>
          <DollarSign className="h-4 w-4 text-sky-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-800">$24,565</div>
          <p className="text-xs text-green-500 flex items-center mt-1">
            <ArrowUp className="h-3 w-3 mr-1" />
            12% depuis le mois dernier
          </p>
        </CardContent>
      </Card>
      <Card className="border-slate-200 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-600">Donations Mensuelles</CardTitle>
          <DollarSign className="h-4 w-4 text-sky-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-800">$2,890</div>
          <p className="text-xs text-green-500 flex items-center mt-1">
            <ArrowUp className="h-3 w-3 mr-1" />
            8% depuis le mois dernier
          </p>
        </CardContent>
      </Card>
      <Card className="border-slate-200 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-600">Donateurs</CardTitle>
          <Users className="h-4 w-4 text-sky-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-800">78</div>
          <p className="text-xs text-green-500 flex items-center mt-1">
            <ArrowUp className="h-3 w-3 mr-1" />
            5% depuis le mois dernier
          </p>
        </CardContent>
      </Card>
      <Card className="border-slate-200 shadow-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-600">Donation Moyenne</CardTitle>
          <DollarSign className="h-4 w-4 text-sky-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-800">$315</div>
          <p className="text-xs text-red-500 flex items-center mt-1">
            <ArrowDown className="h-3 w-3 mr-1" />
            3% depuis le mois dernier
          </p>
        </CardContent>
      </Card>
    </>
  )
}

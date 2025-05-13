import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationTable } from "@/components/donation-table"
import { DonationStats } from "@/components/donation-stats"
import { Plus, Search } from "lucide-react"

export default function DonationsPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Donations</h2>
          <div className="flex w-full md:w-auto gap-2">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Rechercher des donations..."
                className="w-full md:w-[250px] pl-8 border-slate-300"
              />
            </div>
            <Button className="bg-sky-600 hover:bg-sky-700 text-white">
              <Plus className="mr-2 h-4 w-4" /> Nouvelle Donation
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DonationStats />
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">Toutes les Donations</TabsTrigger>
            <TabsTrigger value="pending">En Attente</TabsTrigger>
            <TabsTrigger value="completed">Complétées</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">Historique des Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <DonationTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pending" className="space-y-4">
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">Donations en Attente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-8 text-slate-500">Aucune donation en attente</div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">Donations Complétées</CardTitle>
              </CardHeader>
              <CardContent>
                <DonationTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="border-slate-200 shadow-md">
          <CardHeader>
            <CardTitle className="text-slate-800">Ajouter une Nouvelle Donation</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="donor-name" className="text-slate-700">
                  Nom du Donateur
                </Label>
                <Input id="donor-name" placeholder="Nom du donateur" className="border-slate-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="orphan" className="text-slate-700">
                  Orphelin Bénéficiaire
                </Label>
                <select
                  id="orphan"
                  className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Sélectionner un orphelin</option>
                  <option value="1">Ahmed Hassan</option>
                  <option value="2">Fatima Zahra</option>
                  <option value="3">Omar Khalid</option>
                  <option value="4">Amina Benali</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-slate-700">
                  Montant
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                  <Input id="amount" type="number" className="pl-7 border-slate-300" placeholder="0.00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date" className="text-slate-700">
                  Date
                </Label>
                <Input id="date" type="date" className="border-slate-300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-slate-700">
                  Notes
                </Label>
                <textarea
                  id="notes"
                  className="flex min-h-[80px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Notes additionnelles"
                />
              </div>
              <Button className="bg-sky-600 hover:bg-sky-700 text-white">Enregistrer la Donation</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

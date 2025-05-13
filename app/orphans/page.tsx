import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Plus, Search } from "lucide-react"

export default function OrphansPage() {
  // Sample orphan data
  const orphans = [
    {
      id: 1,
      name: "Ahmed Hassan",
      age: 8,
      totalDonations: "$1,250",
      medicalNotes: "Asthma, requires regular check-ups and medication.",
    },
    {
      id: 2,
      name: "Fatima Zahra",
      age: 6,
      totalDonations: "$980",
      medicalNotes: "Healthy, annual check-up completed last month.",
    },
    {
      id: 3,
      name: "Omar Khalid",
      age: 10,
      totalDonations: "$2,100",
      medicalNotes: "Recovering from minor surgery, needs follow-up in 2 weeks.",
    },
    {
      id: 4,
      name: "Amina Benali",
      age: 5,
      totalDonations: "$750",
      medicalNotes: "Mild allergies to certain foods, otherwise healthy.",
    },
    {
      id: 5,
      name: "Youssef Amrani",
      age: 12,
      totalDonations: "$1,800",
      medicalNotes: "Wears glasses, last eye exam 3 months ago.",
    },
    {
      id: 6,
      name: "Layla Tazi",
      age: 7,
      totalDonations: "$1,050",
      medicalNotes: "Regular dental check-ups required, next one in 2 months.",
    },
  ]

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Orphelins</h2>
          <div className="flex w-full md:w-auto gap-2">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Rechercher des orphelins..."
                className="w-full md:w-[250px] pl-8 border-slate-300"
              />
            </div>
            <Button className="bg-sky-600 hover:bg-sky-700 text-white">
              <Plus className="mr-2 h-4 w-4" /> Ajouter un Orphelin
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orphans.map((orphan) => (
            <Card
              key={orphan.id}
              className="overflow-hidden border-slate-200 shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className="bg-sky-50 pb-2">
                <CardTitle className="text-lg text-slate-800">{orphan.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-slate-600">Âge:</span>
                    <span className="text-sm text-slate-700">{orphan.age} ans</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-slate-600">Total Donations:</span>
                    <span className="text-sm text-sky-600 font-medium">{orphan.totalDonations}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-medium text-slate-600">Notes Médicales:</span>
                    <p className="text-sm text-slate-500 mt-1">{orphan.medicalNotes}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-slate-50 px-6 py-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-300 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200"
                >
                  <Link href={`/orphans/${orphan.id}`}>Voir le Profil Complet</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

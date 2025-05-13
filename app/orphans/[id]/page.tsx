import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { ArrowLeft, Calendar } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { format } from "date-fns"

export default function OrphanProfilePage({ params }: { params: { id: string } }) {
  // This would normally come from a database
  const orphan = {
    id: params.id,
    name: "Ahmed Hassan",
    birthdate: "2016-05-12",
    age: 8,
    medicalNotes: [
      { date: "2023-12-10", note: "Annual check-up completed. Height and weight within normal range." },
      { date: "2023-09-15", note: "Asthma follow-up. Prescribed new inhaler, to be used as needed." },
      { date: "2023-06-20", note: "Treated for seasonal allergies. Responding well to medication." },
    ],
    schoolNotes: [
      { date: "2024-01-15", note: "Excellent progress in mathematics. Teacher recommends additional challenges." },
      { date: "2023-11-05", note: "Reading skills improving. Enjoys story time and participates actively." },
      { date: "2023-09-01", note: "Started new school year. Adapting well to new classroom environment." },
    ],
    donations: [
      { donor: "Anonymous", amount: "$250", date: "2024-02-15" },
      { donor: "Sarah Johnson", amount: "$500", date: "2023-12-20" },
      { donor: "Mohammed Al-Farsi", amount: "$300", date: "2023-10-05" },
      { donor: "Local Business Association", amount: "$200", date: "2023-08-12" },
    ],
  }

  // Calculate age from birthdate
  const calculateAge = (birthdate: string) => {
    const today = new Date()
    const birth = new Date(birthdate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }

    return age
  }

  const age = calculateAge(orphan.birthdate)
  const formattedBirthdate = format(new Date(orphan.birthdate), "MMMM d, yyyy")

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="border-slate-300 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200"
          >
            <Link href="/orphans">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">{orphan.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="md:col-span-1 border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-slate-800">Informations Personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-slate-600">Nom Complet</Label>
                <p className="text-sm text-slate-700">{orphan.name}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-slate-600">Date de Naissance</Label>
                <p className="text-sm text-slate-700">{formattedBirthdate}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-slate-600">Âge</Label>
                <p className="text-sm text-slate-700">{age} ans</p>
              </div>
              <div className="pt-2">
                <Label className="text-sm font-medium text-slate-600">Total Donations</Label>
                <p className="text-xl font-bold text-sky-600">
                  $
                  {orphan.donations
                    .reduce((sum, donation) => sum + Number.parseInt(donation.amount.replace(/\$|,/g, "")), 0)
                    .toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-slate-800">Notes & Dossiers</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="medical">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="medical">Notes Médicales</TabsTrigger>
                  <TabsTrigger value="school">Notes Scolaires</TabsTrigger>
                </TabsList>
                <TabsContent value="medical" className="space-y-4 pt-4">
                  {orphan.medicalNotes.map((note, index) => (
                    <div key={index} className="border border-slate-200 rounded-md p-3 hover:bg-slate-50">
                      <div className="flex items-center text-sm text-slate-500 mb-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {format(new Date(note.date), "MMMM d, yyyy")}
                      </div>
                      <p className="text-sm text-slate-700">{note.note}</p>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="school" className="space-y-4 pt-4">
                  {orphan.schoolNotes.map((note, index) => (
                    <div key={index} className="border border-slate-200 rounded-md p-3 hover:bg-slate-50">
                      <div className="flex items-center text-sm text-slate-500 mb-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {format(new Date(note.date), "MMMM d, yyyy")}
                      </div>
                      <p className="text-sm text-slate-700">{note.note}</p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-slate-800">Ajouter une Nouvelle Remarque</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="remark-type" className="text-slate-700">
                    Type de Remarque
                  </Label>
                  <RadioGroup defaultValue="medical" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medical" id="medical" />
                      <Label htmlFor="medical" className="text-slate-700">
                        Médicale
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="school" id="school" />
                      <Label htmlFor="school" className="text-slate-700">
                        Scolaire
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="remark" className="text-slate-700">
                    Remarque
                  </Label>
                  <Textarea id="remark" placeholder="Entrez votre remarque ici..." className="border-slate-300" />
                </div>
                <Button className="bg-sky-600 hover:bg-sky-700 text-white">Ajouter une Remarque</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 border-slate-200 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-slate-800">Historique des Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Donateur</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Montant</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-600">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orphan.donations.map((donation, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4 text-slate-700">{donation.donor}</td>
                        <td className="py-3 px-4 text-sky-600 font-medium">{donation.amount}</td>
                        <td className="py-3 px-4 text-slate-700">{format(new Date(donation.date), "MMMM d, yyyy")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

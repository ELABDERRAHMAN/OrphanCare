import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Paramètres</h2>
          <p className="text-slate-500 mt-2">Gérez les paramètres de votre compte et de l'application.</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="account">Compte</TabsTrigger>
            <TabsTrigger value="organization">Organisation</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="space-y-4">
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">Profil</CardTitle>
                <CardDescription>
                  Gérez les informations de votre profil qui seront affichées aux autres utilisateurs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700">
                    Nom
                  </Label>
                  <Input id="name" defaultValue="Admin User" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">
                    Email
                  </Label>
                  <Input id="email" defaultValue="admin@tifaoune.org" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-slate-700">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="Écrivez quelques mots à propos de vous..."
                    className="min-h-[100px] border-slate-300"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-sky-600 hover:bg-sky-700 text-white">Sauvegarder les Changements</Button>
              </CardFooter>
            </Card>
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">Photo de Profil</CardTitle>
                <CardDescription>Changez votre photo de profil.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xl font-semibold">
                    AD
                  </div>
                  <div>
                    <Button variant="outline" className="mr-2 border-slate-300">
                      Changer
                    </Button>
                    <Button variant="outline" className="text-red-500 border-slate-300">
                      Supprimer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="account" className="space-y-4">
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">Sécurité du Compte</CardTitle>
                <CardDescription>Mettez à jour votre mot de passe.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="text-slate-700">
                    Mot de Passe Actuel
                  </Label>
                  <Input id="current-password" type="password" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-slate-700">
                    Nouveau Mot de Passe
                  </Label>
                  <Input id="new-password" type="password" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-slate-700">
                    Confirmer le Mot de Passe
                  </Label>
                  <Input id="confirm-password" type="password" className="border-slate-300" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-sky-600 hover:bg-sky-700 text-white">Changer le Mot de Passe</Button>
              </CardFooter>
            </Card>
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">Sessions</CardTitle>
                <CardDescription>Gérez vos sessions actives sur différents appareils.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-slate-700">Chrome sur Windows</p>
                      <p className="text-sm text-slate-500">Dernière activité: Aujourd'hui à 14:23</p>
                    </div>
                    <Button variant="outline" className="text-red-500 border-slate-300">
                      Déconnecter
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-slate-700">Safari sur iPhone</p>
                      <p className="text-sm text-slate-500">Dernière activité: Hier à 18:45</p>
                    </div>
                    <Button variant="outline" className="text-red-500 border-slate-300">
                      Déconnecter
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="text-red-500 border-slate-300">
                  Déconnecter Toutes les Sessions
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="organization" className="space-y-4">
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">Informations de l'Organisation</CardTitle>
                <CardDescription>Gérez les détails de votre organisation.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="org-name" className="text-slate-700">
                    Nom de l'Organisation
                  </Label>
                  <Input id="org-name" defaultValue="Tifaoune Orpholin" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-address" className="text-slate-700">
                    Adresse
                  </Label>
                  <Textarea
                    id="org-address"
                    defaultValue="123 Rue Principale, Mirleft, Maroc"
                    className="min-h-[80px] border-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-phone" className="text-slate-700">
                    Téléphone
                  </Label>
                  <Input id="org-phone" defaultValue="+212 5XX-XXXXXX" className="border-slate-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-email" className="text-slate-700">
                    Email
                  </Label>
                  <Input id="org-email" defaultValue="contact@tifaoune.org" className="border-slate-300" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-sky-600 hover:bg-sky-700 text-white">Sauvegarder les Changements</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">Préférences de Notification</CardTitle>
                <CardDescription>Gérez comment et quand vous recevez des notifications.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-slate-700">Nouvelles Donations</Label>
                    <p className="text-sm text-slate-500">
                      Recevez une notification quand une nouvelle donation est faite.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-slate-700">Mises à Jour des Orphelins</Label>
                    <p className="text-sm text-slate-500">
                      Recevez une notification quand les informations d'un orphelin sont mises à jour.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-slate-700">Rapports Mensuels</Label>
                    <p className="text-sm text-slate-500">Recevez un rapport mensuel des activités.</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-slate-700">Notifications par Email</Label>
                    <p className="text-sm text-slate-500">Recevez des notifications par email.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-sky-600 hover:bg-sky-700 text-white">Sauvegarder les Préférences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <Card className="w-full max-w-md shadow-xl border-slate-200">
        <CardHeader className="space-y-1 text-center pb-6">
          <div className="flex justify-center mb-2">
            <Logo size="large" className="text-sky-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-800">Tifaoune Orpholin</CardTitle>
          <CardDescription className="text-slate-500">Connectez-vous pour accéder au système</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              className="border-slate-300 focus:border-sky-500 focus:ring-sky-500"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-slate-700">
                Mot de passe
              </Label>
              <Link href="#" className="text-xs text-sky-600 hover:text-sky-800 hover:underline">
                Mot de passe oublié?
              </Link>
            </div>
            <Input id="password" type="password" className="border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white">
            <Link href="/dashboard">Se connecter</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

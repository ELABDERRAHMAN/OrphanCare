import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function DonationTable() {
  const donations = [
    {
      donor: "Sarah Johnson",
      orphan: "Ahmed Hassan",
      amount: "$500",
      date: "Feb 15, 2024",
      status: "Completed",
    },
    {
      donor: "Mohammed Al-Farsi",
      orphan: "Fatima Zahra",
      amount: "$300",
      date: "Feb 10, 2024",
      status: "Completed",
    },
    {
      donor: "Anonymous",
      orphan: "Omar Khalid",
      amount: "$250",
      date: "Feb 5, 2024",
      status: "Completed",
    },
    {
      donor: "Local Business Association",
      orphan: "Amina Benali",
      amount: "$750",
      date: "Jan 28, 2024",
      status: "Completed",
    },
    {
      donor: "John Smith",
      orphan: "Youssef Amrani",
      amount: "$400",
      date: "Jan 20, 2024",
      status: "Completed",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-4 font-medium text-slate-600">Donateur</th>
            <th className="text-left py-3 px-4 font-medium text-slate-600">Orphelin</th>
            <th className="text-left py-3 px-4 font-medium text-slate-600">Montant</th>
            <th className="text-left py-3 px-4 font-medium text-slate-600">Date</th>
            <th className="text-left py-3 px-4 font-medium text-slate-600">Statut</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
              <td className="py-3 px-4">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback className="bg-sky-100 text-sky-600">{donation.donor.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-slate-700">{donation.donor}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-slate-700">{donation.orphan}</td>
              <td className="py-3 px-4 text-sky-600 font-medium">{donation.amount}</td>
              <td className="py-3 px-4 text-slate-700">{donation.date}</td>
              <td className="py-3 px-4">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                  {donation.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronDown } from "lucide-react"
import { Language, getTranslations } from "@/lib/translations"

interface Company {
  id: string
  name: string
  ghostScore: number
  totalApplications: number
}

const mockCompanies: Company[] = [
  { id: "1", name: "TechCorp A.Ş.", ghostScore: 85, totalApplications: 234 },
  { id: "2", name: "StartupHub", ghostScore: 72, totalApplications: 156 },
  { id: "3", name: "MegaBank", ghostScore: 68, totalApplications: 412 },
  { id: "4", name: "CloudSoft", ghostScore: 55, totalApplications: 89 },
  { id: "5", name: "DataCo", ghostScore: 45, totalApplications: 167 },
  { id: "6", name: "FinTech Plus", ghostScore: 38, totalApplications: 203 },
  { id: "7", name: "AI Labs", ghostScore: 28, totalApplications: 95 },
  { id: "8", name: "DevStudio", ghostScore: 15, totalApplications: 142 },
]

function getScoreColor(score: number): string {
  if (score < 20) return 'text-emerald-600 dark:text-emerald-400'
  if (score < 40) return 'text-yellow-600 dark:text-yellow-400'
  if (score < 60) return 'text-orange-600 dark:text-orange-400'
  return 'text-red-600 dark:text-red-400'
}

function getStatusVariant(score: number): "success" | "warning" | "destructive" {
  if (score < 30) return 'success'
  if (score < 60) return 'warning'
  return 'destructive'
}

interface GhostScoreTableProps {
  lang?: Language
}

export function GhostScoreTable({ lang = 'tr' }: GhostScoreTableProps) {
  const t = getTranslations(lang)
  
  const getStatusText = (score: number): string => {
    if (score < 30) return t.table.status.excellent
    if (score < 60) return t.table.status.moderate
    return t.table.status.poor
  }
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {t.table.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {t.table.subtitle}
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">{t.table.headers.rank}</TableHead>
                <TableHead>{t.table.headers.company}</TableHead>
                <TableHead className="text-right">{t.table.headers.score}</TableHead>
                <TableHead className="text-right">{t.table.headers.applications}</TableHead>
                <TableHead className="text-right">{t.table.headers.status}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCompanies.map((company, idx) => (
                <TableRow 
                  key={company.id} 
                  className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                >
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {company.name[0]}
                      </div>
                      <span className="font-medium">{company.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className={`text-lg font-bold ${getScoreColor(company.ghostScore)}`}>
                      {company.ghostScore}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right text-gray-600 dark:text-gray-400">
                    {company.totalApplications}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant={getStatusVariant(company.ghostScore)}>
                      {getStatusText(company.ghostScore)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            {t.table.viewAll}
            <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

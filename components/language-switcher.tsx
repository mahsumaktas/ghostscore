"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')
  
  return (
    <div className="fixed top-6 right-6 z-50">
      <Link href={isEnglish ? '/' : '/en'}>
        <Button 
          variant="outline" 
          size="sm"
          className="backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border shadow-lg"
        >
          <Languages className="w-4 h-4 mr-2" />
          {isEnglish ? 'Türkçe' : 'English'}
        </Button>
      </Link>
    </div>
  )
}

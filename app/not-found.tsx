'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-primary" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Page Not Found</h1>
          <p className="text-foreground/60">
            We couldn&apos;t find the page you were looking for. It might have been moved or deleted.
          </p>
        </div>
        <Button size="lg" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

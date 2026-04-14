'use client'

import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Something Went Wrong</h1>
          <p className="text-foreground/60">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button onClick={reset}>Try Again</Button>
          <Button variant="outline" asChild>
            <a href="/">Go Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

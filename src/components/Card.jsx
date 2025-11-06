import React from 'react'

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg p-4 ${className}`}>
      {children}
    </div>
  )
}

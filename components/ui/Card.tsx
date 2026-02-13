"use client"

import React from 'react'
import clsx from 'clsx'

type CardProps = {
    children : React.ReactNode
    className?: string
}

export default function Card({ children, className } : CardProps) {
  return (
    <div className={clsx(
        "rounded-2xl font-sans",
        className
    )}>
      {children}
    </div>
  )
}

Card.Header = function CardHeader({ children, className } : CardProps) {
    return (
        <div className={clsx(
            className,
            "flex items-start justify-between",
        )}>
            {children}
        </div>
    )
}

Card.Body = function CardBody({ children, className} : {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={clsx(
            "",
            className
        )}> 
        { children }
        </div>
    )
}

Card.Footer = function CardFooter({ children, className} : {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={clsx(
            "flex items-center justify-between", className
        )}>
            { children }
        </div>
    )
}
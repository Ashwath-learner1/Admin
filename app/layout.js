'use client'
import './globals.css'
import React from 'react'
import { useState,useEffect } from 'react'
export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body>{children}</body>
     
    </html>
  )
}
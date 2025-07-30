import React from 'react'
import { Container } from '../container/Container'

export const Footer = () => {
  return (
    <footer className='py-4'>
      <Container>
        <div className='divider'></div>
        <div className='flex justify-center'>
          <p className='text-sm'>© 2025 Task List – Made by Amaia</p>
        </div>
      </Container>
    </footer>
  )
}

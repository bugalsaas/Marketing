import React from 'react'
import { render, screen } from '@/lib/test-utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card'

describe('Card Components', () => {
  describe('Card', () => {
    it('renders with default props', () => {
      render(<Card>Card content</Card>)
      
      const card = screen.getByText('Card content')
      expect(card).toBeInTheDocument()
      
      expect(card).toHaveClass('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm')
      expect(card).toHaveAttribute('data-slot', 'card')
    })

    it('applies custom className', () => {
      render(<Card className="custom-card">Custom Card</Card>)
      
      const card = screen.getByText('Custom Card')
      expect(card).toHaveClass('custom-card')
      expect(card).toHaveClass('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm')
      expect(card).toHaveAttribute('data-slot', 'card')
    })

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>()
      render(<Card ref={ref}>Ref Card</Card>)
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe('CardHeader', () => {
    it('renders with default props', () => {
      render(
        <Card>
          <CardHeader>Header content</CardHeader>
        </Card>
      )
      
      const header = screen.getByText('Header content')
      expect(header).toBeInTheDocument()
      expect(header).toHaveClass('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6')
    })

    it('applies custom className', () => {
      render(
        <Card>
          <CardHeader className="custom-header">Custom Header</CardHeader>
        </Card>
      )
      
      const header = screen.getByText('Custom Header')
      expect(header).toHaveClass('custom-header')
    })
  })

  describe('CardTitle', () => {
    it('renders with default props', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
        </Card>
      )
      
      const title = screen.getByText('Card Title')
      expect(title).toBeInTheDocument()
      expect(title).toHaveClass('leading-none font-semibold')
    })

    it('applies custom className', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle className="custom-title">Custom Title</CardTitle>
          </CardHeader>
        </Card>
      )
      
      const title = screen.getByText('Custom Title')
      expect(title).toHaveClass('custom-title')
    })

    it('renders as div by default', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
        </Card>
      )
      
      const title = screen.getByText('Card Title')
      expect(title.tagName).toBe('DIV')
    })
  })

  describe('CardDescription', () => {
    it('renders with default props', () => {
      render(
        <Card>
          <CardHeader>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
        </Card>
      )
      
      const description = screen.getByText('Card Description')
      expect(description).toBeInTheDocument()
      expect(description).toHaveClass('text-sm text-muted-foreground')
    })

    it('applies custom className', () => {
      render(
        <Card>
          <CardHeader>
            <CardDescription className="custom-description">Custom Description</CardDescription>
          </CardHeader>
        </Card>
      )
      
      const description = screen.getByText('Custom Description')
      expect(description).toHaveClass('custom-description')
    })
  })

  describe('CardContent', () => {
    it('renders with default props', () => {
      render(
        <Card>
          <CardContent>Card content</CardContent>
        </Card>
      )
      
      const content = screen.getByText('Card content')
      expect(content).toBeInTheDocument()
      expect(content).toHaveClass('px-6')
    })

    it('applies custom className', () => {
      render(
        <Card>
          <CardContent className="custom-content">Custom Content</CardContent>
        </Card>
      )
      
      const content = screen.getByText('Custom Content')
      expect(content).toHaveClass('custom-content')
    })
  })

  describe('Card Integration', () => {
    it('renders complete card structure', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
            <CardDescription>Test Description</CardDescription>
          </CardHeader>
          <CardContent>Test Content</CardContent>
        </Card>
      )
      
      expect(screen.getByText('Test Title')).toBeInTheDocument()
      expect(screen.getByText('Test Description')).toBeInTheDocument()
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('maintains proper hierarchy', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>Content</CardContent>
        </Card>
      )
      
      const card = screen.getByText('Title').closest('[data-slot="card"]')
      expect(card).toContainElement(screen.getByText('Title'))
      expect(card).toContainElement(screen.getByText('Description'))
      expect(card).toContainElement(screen.getByText('Content'))
    })
  })
})

import { render, screen } from '@testing-library/vue'
import AcrionButton from '@/components/Shared/ActionButton.vue'

describe('AcrionButton', () => {
  it('renders a button', () => {
    render(AcrionButton, {
      props: {
        text: 'Sign in',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', { name: /Sign in/i })
    expect(button).toBeInTheDocument()
  })
})

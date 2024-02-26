import { render, screen } from '@testing-library/vue'
import TheSubnav from '@/components/Navigation/TheSubnav.vue'

describe('TheSubnav', () => {
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          }
        }
      })

      const jobCount = screen.getByText('165')

      expect(jobCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('does NOT display job count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: false
          }
        }
      })

      const jobCount = screen.queryByText('165')

      expect(jobCount).not.toBeInTheDocument()
    })
  })
})

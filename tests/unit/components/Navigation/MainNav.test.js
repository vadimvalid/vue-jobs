import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/Navigation/MainNav.vue'
import userEvent from '@testing-library/user-event'

const renderMainNav = () => {
  render(MainNav, {
    global: {
      stubs: {
        FontAwesomeIcon: true
      }
    }
  })
}

describe('MainNav', () => {
  it('displays company name', () => {
    renderMainNav()
    const companyName = screen.getByText('Vue Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays mneu items for navigation', () => {
    renderMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual(['Teams', 'Location', 'Life of Vue', 'Students', 'Jobs'])
  })

  describe('when the user is logged in', () => {
    it('displays user profile picture', async () => {
      renderMainNav()

      let profileImage = screen.queryByRole('img', { name: /Profile image/i })
      expect(profileImage).not.toBeInTheDocument()

      const logginButton = screen.getByRole('button', { name: /Sign in/i })
      await userEvent.click(logginButton)

      profileImage = screen.queryByRole('img', { name: /Profile image/i })
      expect(profileImage).toBeInTheDocument()
    })
  })
})

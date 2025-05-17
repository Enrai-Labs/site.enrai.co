// Main JavaScript for Enrai website

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 75, // Adjust for fixed navbar
          behavior: 'smooth',
        })

        // Update active nav item
        document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
          link.classList.remove('active')
        })
        this.classList.add('active')
      }
    })
  })

  // Form submission handling
  const contactForm = document.querySelector('.contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault()

      // Normally you would send the form data to a server here
      // For now, just show an alert
      alert('Thank you for your message! We will get back to you soon.')
      contactForm.reset()
    })
  }

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar')
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled', 'shadow-sm')
      } else {
        navbar.classList.remove('navbar-scrolled', 'shadow-sm')
      }
    })
  }

  // Initialize any tooltips
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  )
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})

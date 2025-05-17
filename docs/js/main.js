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
  const emailForm = document.getElementById('emailForm')
  const sendEmailBtn = document.getElementById('sendEmailBtn')

  if (emailForm && sendEmailBtn) {
    sendEmailBtn.addEventListener('click', function (e) {
      // Get form values
      const name = document.getElementById('userName').value.trim()
      const email = document.getElementById('userEmail').value.trim()
      const subject = document.getElementById('emailSubject').value.trim()
      const message = document.getElementById('emailMessage').value.trim()

      // Validate form
      if (!name || !email || !subject || !message) {
        alert('Please fill out all fields')
        return
      }

      // Create mailto link
      const mailtoLink = `mailto:enrailabs@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
      )}`

      // Open email client
      window.location.href = mailtoLink

      // Reset form after a short delay (after email client opens)
      setTimeout(() => {
        emailForm.reset()
      }, 1000)
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


  /* ── Toggle between Sign In / Register forms ── */
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.signin-form').forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.form === 'login' ? 'login-form' : 'register-form')
              .classList.add('active');

      // Reset left panel when switching tabs
      showImage();
    });
  });

  /* ── Helpers ── */
  const img     = document.getElementById('signin-img');
  const message = document.getElementById('signin-message');

  function showImage() {
    img.style.display = 'block';
    message.classList.remove('visible');
    message.innerHTML = '';
  }

  function showMessage(iconHTML, heading, body) {
    img.style.display = 'none';
    message.innerHTML = `
      <div class="msg-icon">${iconHTML}</div>
      <h3>${heading}</h3>
      <p>${body}</p>
    `;
    message.classList.add('visible');
  }

  /* ── Sign In submit ── */
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    showMessage(
      '👋',
      'Welcome Back!',
      `Good to see you again,<br><span class="msg-username">${email}</span>`
    );
    // Redirect after a short delay so the user sees the message
    //setTimeout(() => { window.location.href = 'pages/common/thanks.html'; }, 1800);
  });

  /* ── Register submit ── */
  document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showMessage(
      '🎉',
      'You\'re In!',
      'Thank you for choosing us.<br>We\'re <span class="msg-username">thrilled</span> to have you on board!'
    );
    //setTimeout(() => { window.location.href = 'pages/common/thanks.html'; }, 1800);
  });
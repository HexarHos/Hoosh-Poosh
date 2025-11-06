document.addEventListener("DOMContentLoaded", function() {
  // HTML content for About Us page
  const htmlContent = `
    <div class="container">
      <!-- Logo -->
      <header class="header">
        <img src="logo.png" alt="Hoosh-Poosh Logo" class="logo">
      </header>
      
      <!-- Dropdown Menu -->
      <nav class="navbar">
        <div class="menu-toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="dropdown-menu">
          <li><a href="Web.html">خانه</a></li>
          <li><a href="#">راهنما</a></li>
        </ul>
      </nav>
      
      <!-- About Us Section -->
      <section class="about-us">
        <h2>درباره ی ما</h2>
        <p>گروه "هوش پوش (شهید همت)" به‌عنوان یک تیم پیشرو در توسعه فناوری‌های پوشیدنی و هوشمند، با هدف بهبود کیفیت زندگی افراد از طریق ایجاد پوشاک هوشمند و نوآورانه، فعالیت می‌کند.</p>
        <p>در این تیم تلاش می‌کنیم تا از جدیدترین فناوری‌ها برای ایجاد محصولاتی با کارایی بالا و متناسب با نیازهای مختلف انسان‌ها استفاده کنیم. از جمله اعضای اصلی تیم ما می‌توان به توسعه‌دهندگان ما و رئیس گروه اشاره کرد:</p>
        
        <!-- Cards for team members -->
        <div class="team-members">
          <div class="card">
            <h3>توسعه‌دهندگان</h3>
            <p>حسین حصاری <span class="name-hidden">/</span> کیان امیری</p>
          </div>
          <div class="card">
            <h3>رئیس گروه</h3>
            <p>محمد تقی بابایی</p>
          </div>
        </div>

        <!-- GitHub and Eitaa Links -->
        <div class="social-links">
          <h3>ارتباط بیشتر با ما و لینک پروژه</h3>
          <p>برای دسترسی به پروژه‌ها و اطلاعات بیشتر، به لینک‌های زیر مراجعه کنید:</p>
          <a href="https://github.com/HexarHos/Hoosh-Poosh" class="social-button github">گیت‌هاب</a>
          <a href="https://web.eitaa.com/#@hooshpoosh" class="social-button eitaa">ایتا</a>
        </div>
        
        <!-- Footer -->
        <footer class="footer">
          <p>تیم توسعه دهندگان 2025 🧠👗</p>
        </footer>
      </section>
    </div>
  `;

  // Add the HTML to the page
  document.body.innerHTML = htmlContent;

  // CSS Styling
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
    }
    .container {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    header .logo {
      width: 150px;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    nav {
      background-color: #222;
      position: relative;
    }
    .navbar .dropdown-menu {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-around;
      background-color: #333;
    }
    .navbar .dropdown-menu li {
      padding: 15px;
    }
    .navbar .dropdown-menu li a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .navbar .dropdown-menu li a:hover {
      color: #ff6347;
    }
    .menu-toggle {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
    .menu-toggle .bar {
      width: 25px;
      height: 4px;
      background-color: #fff;
      margin: 5px 0;
    }

    /* About Us section */
    section.about-us {
      margin-top: 40px;
      text-align: center;
      padding-bottom: 40px;
    }
    section.about-us p {
      margin: 20px 0;
    }
    
    .team-members {
      display: flex;
      justify-content: space-around;
      margin-top: 40px;
    }
    .team-members .card {
      width: 30%;
      background-color: #fff;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    .team-members .card:hover {
      transform: scale(1.05);
    }
    .name-hidden {
      visibility: hidden;
    }

    .social-links {
      margin-top: 40px;
    }

    .social-links h3 {
      font-size: 1.5em;
      margin-bottom: 20px;
    }

    .social-button {
      display: inline-block;
      padding: 10px 20px;
      margin: 10px;
      background-color: #333;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-size: 1.1em;
      transition: background-color 0.3s;
    }

    .social-button.github:hover {
      background-color: #6e5494;
    }

    .social-button.eitaa:hover {
      background-color: #45b9b7;
    }

    footer {
      text-align: center;
      padding: 20px;
      background-color: #333;
      color: white;
      margin-top: 40px;
    }

    /* Responsive Styles */
    @media screen and (max-width: 768px) {
      .navbar .dropdown-menu {
        display: none;
        flex-direction: column;
        width: 100%;
      }
      .navbar .dropdown-menu li {
        text-align: left;
        padding: 10px;
        width: 100%;
      }
      .menu-toggle {
        display: flex;
      }
      .dropdown-menu.active {
        display: flex;
      }
      .team-members {
        flex-direction: column;
      }
      .team-members .card {
        width: 100%;
        margin-bottom: 20px;
      }
      .social-button {
        width: 100%;
        text-align: center;
      }
    }
  `;
  document.head.appendChild(style);

  // Mobile menu toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  mobileMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
  });
});

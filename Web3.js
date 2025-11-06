document.addEventListener("DOMContentLoaded", function() {
  // HTML content for Guide page
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
          <li><a href="Web2.html">درباره ی ما</a></li>
        </ul>
      </nav>
      
      <!-- Guide Section -->
      <section class="guide">
        <h2>راهنمای استفاده از نرم‌افزار آینه هوشمند</h2>
        <p>نرم‌افزار آینه هوشمند این امکان را به شما می‌دهد که چهره‌ جدید و بهینه‌تری از خود پیدا کنید. پس از نصب اپلیکیشن، شما می‌توانید چهره‌های مختلف را مشاهده کرده و بهترین گزینه را برای خود انتخاب کنید. در این راهنما مراحل استفاده از این اپلیکیشن به صورت گام به گام توضیح داده خواهد شد:</p>
        
        <div class="steps">
          <div class="step">
            <h3>گام اول: نصب اپلیکیشن</h3>
            <p>ابتدا باید اپلیکیشن آینه هوشمند را از فروشگاه اپلیکیشن دستگاه خود نصب کنید. این اپلیکیشن بر روی سیستم‌های اندروید و iOS در دسترس است.</p>
          </div>
          <div class="step">
            <h3>گام دوم: ورود به اپلیکیشن</h3>
            <p>پس از نصب اپلیکیشن، آن را باز کرده و وارد محیط اصلی اپلیکیشن شوید.</p>
          </div>
          <div class="step">
            <h3>گام سوم: انتخاب چهره جدید</h3>
            <p>در صفحه اصلی اپلیکیشن، گزینه "چهره جدید" را انتخاب کنید تا بتوانید بهترین چهره خود را پیدا کنید.</p>
          </div>
          <div class="step">
            <h3>گام چهارم: گرفتن عکس</h3>
            <p>پس از انتخاب "چهره جدید"، از شما خواسته می‌شود که یک عکس از خود بگیرید. از خودتان عکس بگیرید و مطمئن شوید که چهره شما به درستی در قاب تصویر قرار گرفته باشد.</p>
          </div>
          <div class="step">
            <h3>گام پنجم: دریافت نتیجه</h3>
            <p>پس از گرفتن عکس، اپلیکیشن چهره شما را تجزیه و تحلیل کرده و بهترین نتیجه را به شما نمایش می‌دهد. شما می‌توانید چهره‌ی بهینه شده خود را مشاهده کنید.</p>
          </div>
        </div>

        <!-- GitHub and Eitaa Links -->
        <div class="social-links">
          <p>:برای دسترسی به پروژه‌ها و اطلاعات بیشتر، به لینک‌های زیر مراجعه کنید</p>
          <a href="https://github.com/HexarHos/Hoosh-Poosh" class="social-button github">گیت‌هاب</a>
          <a href="https://web.eitaa.com/#@hooshpoosh" class="social-button eitaa">ایتا</a>
        </div>
        
        <!-- Footer -->
        <footer class="footer">
          <p>Hoosh-Poosh 2025 🧠👗</p>
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

    /* Guide section */
    section.guide {
      margin-top: 40px;
      text-align: center;
      padding-bottom: 40px;
    }
    section.guide p {
      margin: 20px 0;
    }
    .steps {
      margin-top: 40px;
    }
    .steps .step {
      background-color: #fff;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .steps .step h3 {
      font-size: 1.5em;
      margin-bottom: 10px;
    }
    .steps .step p {
      font-size: 1.1em;
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
      .steps .step {
        margin-bottom: 10px;
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

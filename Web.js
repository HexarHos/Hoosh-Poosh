document.addEventListener("DOMContentLoaded", function() {
  // HTML content
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
          <li><a href="#">خانه</a></li>
          <li><a href="#">درباره ی ما</a></li>
          <li><a href="#">راهنما</a></li>
        </ul>
      </nav>
      
      <!-- Articles Section -->
      <section class="articles">
        <h2>مقالات هوش پوش</h2>
        <div class="article-list">
          <div class="article">
            <h3>هوش پوش چیست؟</h3>
            <p>هوش پوش به فناوری‌های پوشیدنی اطلاق می‌شود که بر اساس نیازهای کاربر عمل می‌کنند و توانایی تعامل با محیط را دارند. این پوشاک شامل سیستم‌هایی است که می‌توانند بر اساس اطلاعات دریافتی از حسگرها و الگوریتم‌های هوش مصنوعی، به‌طور خودکار تصمیم‌گیری کرده و به‌طور هوشمند پاسخ دهند...</p>
            <p>این سیستم‌ها به پوشاک قابلیت هوشمندی می‌دهند که به‌طور مستقیم با کاربران ارتباط برقرار می‌کند و از این طریق می‌توانند وضعیت سلامتی فرد را مانیتور کنند و در صورت نیاز تنظیمات خاصی را انجام دهند...</p>
          </div>
          <div class="article">
            <h3>آینده‌ی هوش پوش</h3>
            <p>با پیشرفت روزافزون علم داده و یادگیری ماشین، پوشاک هوشمند به‌زودی نقش‌های بسیار بیشتری در زندگی انسان‌ها ایفا خواهند کرد. این پوشاک نه‌تنها به‌عنوان یک ابزار پوشیدنی برای راحتی، بلکه به‌عنوان ابزاری برای نظارت بر سلامت و بهبود کیفیت زندگی انسان‌ها مورد استفاده قرار خواهند گرفت...</p>
            <p>پوشاک هوشمند در آینده توانایی تجزیه و تحلیل شرایط فیزیکی و عاطفی فرد را خواهند داشت و قادر خواهند بود در زمان مناسب تنظیمات مختلفی را به‌طور خودکار انجام دهند...</p>
          </div>
          <div class="article">
            <h3>پوشاک هوشمند برای سلامت</h3>
            <p>پوشاک هوشمند با توانایی مانیتورینگ سلامت می‌تواند نقش مهمی در پیشگیری از بیماری‌ها ایفا کند. این پوشاک با استفاده از سنسورها می‌توانند علائم حیاتی بدن فرد را نظارت کنند و در صورت بروز مشکل به‌طور فوری هشدار ارسال کنند...</p>
            <p>این پوشاک علاوه بر نظارت بر وضعیت سلامت، قادر به شبیه‌سازی و تنظیم خود بر اساس محیط نیز هستند تا راحتی و بهبود عملکرد فرد را تضمین کنند...</p>
          </div>
        </div>
      </section>
      
      <!-- Cards Section -->
      <section class="cards">
        <div class="card">
          <h3>هوش پوش برای شما</h3>
          <p>پوشاکی که همیشه با سلیقه شما هماهنگ است.</p>
        </div>
        <div class="card">
          <h3>پوشش هوشمند</h3>
          <p>پوشاکی که بر اساس شرایط محیطی تنظیم می‌شود.</p>
        </div>
        <div class="card">
          <h3>پوشاک برای سلامت</h3>
          <p>پوشاکی که به شما کمک می‌کند سالم‌تر زندگی کنید.</p>
        </div>
      </section>
      
      <!-- Quote Section -->
      <section class="quote">
        <p>"هوش مصنوعی آینده را برای ما شکل می‌دهد. آینده‌ای که همه‌چیز به ما نزدیک‌تر است." 🌟</p>
      </section>
      
      <!-- Footer -->
      <footer class="footer">
        <p>Hoosh-Poosh 2025 🧠👗</p>
      </footer>
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
    header {
      text-align: center;
      padding: 20px;
      background-color: #333;
    }
    .logo {
      width: 150px;
      height: auto;
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
    section.articles {
      margin-top: 40px;
      padding-bottom: 40px;
      text-align: center;
    }
    section.articles .article-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    section.articles .article {
      width: 30%;
      background-color: #fff;
      margin: 10px;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    section.articles .article:hover {
      transform: scale(1.05);
    }
    section.cards {
      display: flex;
      justify-content: space-around;
      margin-top: 40px;
    }
    section.cards .card {
      width: 30%;
      background-color: #f9f9f9;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }
    section.cards .card:hover {
      transform: scale(1.05);
    }
    section.quote {
      margin-top: 40px;
      font-size: 1.2em;
      text-align: center;
      font-style: italic;
      color: #555;
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
      .article, .card {
        width: 100%;
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

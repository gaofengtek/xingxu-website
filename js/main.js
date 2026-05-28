document.addEventListener('DOMContentLoaded', function () {

  // 移动端导航菜单切换
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // 联系我们表单验证与提交
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var valid = true;
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');

      clearErrors();

      if (!name.value.trim()) {
        showError('nameError', '请输入姓名');
        valid = false;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        showError('emailError', '请输入有效的邮箱地址');
        valid = false;
      }

      if (!message.value.trim()) {
        showError('messageError', '请输入留言内容');
        valid = false;
      }

      if (valid) {
        form.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      }
    });
  }

  function showError(id, text) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = text;
      el.style.display = 'block';
    }
  }

  function clearErrors() {
    var errors = document.querySelectorAll('.form-error');
    for (var i = 0; i < errors.length; i++) {
      errors[i].style.display = 'none';
    }
  }

  // 导航栏透明→实色切换
  var navbar = document.querySelector('.navbar');
  var hero = document.querySelector('.hero');
  if (navbar && hero) {
    var heroBottom = hero.offsetTop + hero.offsetHeight - navbar.offsetHeight;
    function updateNav() {
      if (window.scrollY > heroBottom) {
        navbar.classList.add('solid');
        navbar.classList.remove('transparent');
      } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('solid');
      }
    }
    navbar.classList.add('transparent');
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  // 数字增长动画
  var statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length > 0) {
    var statsAnimated = false;
    var statsSection = document.querySelector('.stats-section');
    var statsObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          statNumbers.forEach(function(el) {
            var target = parseInt(el.getAttribute('data-target'), 10);
            var duration = 1500;
            var start = 0;
            var startTime = null;
            function step(timestamp) {
              if (!startTime) startTime = timestamp;
              var progress = Math.min((timestamp - startTime) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(eased * target);
              if (progress < 1) requestAnimationFrame(step);
              else el.textContent = target + (target === 3 ? '' : '+');
            }
            requestAnimationFrame(step);
          });
        }
      });
    }, { threshold: 0.4 });
    if (statsSection) statsObserver.observe(statsSection);
  }
});

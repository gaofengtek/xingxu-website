document.addEventListener('DOMContentLoaded', function () {

  // 移动端导航菜单切换
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // 首页 Hero 轮播
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.carousel-dots .dot');
  if (slides.length && dots.length) {
    var current = 0;
    var total = slides.length;

    function showSlide(index) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = index;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }

    setInterval(function () {
      showSlide((current + 1) % total);
    }, 3000);
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
});

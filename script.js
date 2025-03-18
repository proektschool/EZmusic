document.querySelectorAll('.action-button').forEach(button => {
  button.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем стандартное поведение

      // Определяем, куда перенаправить пользователя
      if (this.textContent.includes('урокам')) {
          window.location.href = 'lessons.html'; // Переход на страницу уроков
      } else if (this.textContent.includes('форуму')) {
          window.location.href = 'forum.html'; // Переход на страницу форума
      } else if (this.textContent.includes('ресурсам')) {
          window.location.href = 'resources.html'; // Переход на страницу ресурсов
      }
  });
  document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        // Добавляем анимацию затухания
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            if (this.textContent.includes('урокам')) {
                window.location.href = 'lessons.html';
            } else if (this.textContent.includes('форуму')) {
                window.location.href = 'forum.html';
            } else if (this.textContent.includes('ресурсам')) {
                window.location.href = 'resources.html';
            }
        }, 500); // Задержка для завершения анимации
    });
});
document.querySelectorAll('.lesson-button').forEach(button => {
  button.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('onclick').split("'")[1]; // Получаем ID цели
      document.querySelectorAll('.lesson-detail').forEach(detail => {
          detail.style.display = 'none'; // Скрываем все блоки
      });
      document.querySelector(targetId).style.display = 'block'; // Показываем нужный блок
  });
});
document.getElementById('cta-button').addEventListener('click', function() {
    window.location.href = 'lessons.html';
});

// Динамическое изменение цвета заголовка при скролле
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// Анимация карточек при наведении
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});
});
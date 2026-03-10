import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <section class="info-section">
      <div class="wrapper">
        <h2>О проекте</h2>
        
        <p>Это приложение для просмотра альбомов.</p>
        
        <div class="meta">
          <p><span class="label">Дисциплина:</span> Веб-разработка</p>
          <p><span class="label">Студент:</span> [Ваше имя]</p>
        </div>
        
        <p>Приложение демонстрирует работу с маршрутизацией, запросами через HTTP и базовыми операциями CRUD с использованием тестового API JSONPlaceholder.</p>
      </div>
    </section>
  `,
  styles: `
    .info-section {
      padding: 3rem 1rem;
    }

    .wrapper {
      max-width: 760px;
      margin: 0 auto;
      background: #f8f9fa;
      padding: 2.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    h2 {
      margin: 0 0 1.8rem;
      color: #2c3e50;
      font-weight: 600;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.7;
      margin: 0 0 1rem;
      color: #444;
    }

    .meta {
      margin: 1.5rem 0;
      padding: 1rem;
      background: #e9ecef;
      border-radius: 6px;
    }

    .label {
      font-weight: 600;
      color: #1a3c5e;
      margin-right: 0.5rem;
    }
  `
})
export class InfoComponent {}
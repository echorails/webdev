import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="wrapper">
      <h1>Album Viewer</h1>
      <p>Open albums and look at photos loaded from the JSONPlaceholder service.</p>
      <button class="open-btn" routerLink="/albums">Open Albums</button>
    </div>
  `,
  styles: [`
    .wrapper {
      max-width: 820px;
      margin: 40px auto;
      padding: 32px;
      text-align: center;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 16px;
    }

    p {
      font-size: 18px;
      margin-bottom: 28px;
      color: #555;
    }

    .open-btn {
      background: #0d6efd;
      color: #fff;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      border-radius: 6px;
      cursor: pointer;
    }

    .open-btn:hover {
      background: #0a58ca;
    }
  `]
})
export class HomeComponent {}
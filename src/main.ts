import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    appConfig.providers, // Mantém os providers padrão gerados pelo CLI
    provideHttpClient() // Habilitando o HttpCliente na aplicação e tornando injetavél
  ]
})
.catch((err) => console.error(err));

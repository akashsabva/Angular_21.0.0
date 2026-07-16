import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { Dashboard } from './dashboard/dashboard';
import { Forms } from './forms/forms';
import { Counter } from './counter/counter';
import { LightDarkMode } from './light-dark-mode/light-dark-mode';
import { TemplateForm } from './forms/template-form/template-form';
import { ReactiveForm } from './forms/reactive-form/reactive-form';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'counter', component: Counter },
    { path: 'mode', component: LightDarkMode },    
    { path: 'todo', component: Todo },
    { 
        path: 'forms', 
        component: Forms,
        children: [
            {path: 'template', component: TemplateForm},
            {path: 'reactive', component: ReactiveForm}
        ] 
    },
    { path: '**', component: PageNotFound }

];

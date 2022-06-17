import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../pages/news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../pages/notification/notification.module').then( m => m.NotificationPageModule)
      },
      {
        path: '',
        redirectTo: '/home/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

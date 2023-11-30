import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeroOverlayComponent } from './components/hero-overlay/hero-overlay.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingComponent } from './components/standing/standing.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddmatchComponent } from './components/addmatch/addmatch.component';
import { AddteamComponent } from './components/addteam/addteam.component';
import { AddplayerComponent } from './components/addplayer/addplayer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchsTableComponent } from './components/matchs-table/matchs-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    HeroOverlayComponent,
    ResultComponent,
    NewsComponent,
    StandingComponent,
    VideosComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    AddmatchComponent,
    AddteamComponent,
    AddplayerComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    AdminComponent,
    MatchsTableComponent,
    MatchInfoComponent,
    TeamsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
